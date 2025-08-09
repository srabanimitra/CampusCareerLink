<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Helpers\JWTAuth;
use App\Models\User; // Assuming you have a User model
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    private $jwtAuth;

    public function __construct()
    {
        $this->jwtAuth = new JWTAuth();
    }

    /**
     * Admin Login (From login table)
     */
    public function adminLogin(Request $request)
    {
        $request->validate([
            'RegisterId' => 'required',
            'Password' => 'required'
        ]);

        $admin = DB::table('login')->where('RegisterId', $request->RegisterId)->first();

        if ($admin && Hash::check($request->Password, $admin->Password)) {
            $token = $this->jwtAuth->encode(['user_id' => $admin->RegisterId]);

            return response()->json([
                'message' => 'Admin login successful',
                'token' => $token
            ], 200);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    /**
     * User Registration (Insert into signups table)
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fullname' => 'required|string|max:255',
            'email' => 'required|email|unique:signups,email',
            'password' => 'required|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = DB::table('signups')->insertGetId([
            'fullname' => $request->fullname,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'created_at' => now(),
            'updated_at' => now()
        ]);

        return response()->json(['message' => 'User registered successfully!', 'user_id' => $user], 201);
    }

    /**
     * User Login (From signups table)
     */
    public function userLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = DB::table('signups')->where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $this->jwtAuth->encode(['user_id' => $user->id]);

        return response()->json([
            'message' => 'User login successful',
            'user' => $user,
            'token' => $token,
        ], 200);
    }

    /**
     * Get All Users (for user management)
     */
    public function getUsers()
    {
        $users = DB::table('signups')->select('id', 'fullname', 'email', 'created_at')->get();

        return response()->json($users, 200);
    }

    /**
     * Delete User
     */
    public function deleteUser($id)
    {
        $user = DB::table('signups')->where('id', $id)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        try {
            DB::table('signups')->where('id', $id)->delete();
            return response()->json(['message' => 'User deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to delete user', 'error' => $e->getMessage()], 500);
        }
    }
    public function countUsers()
    {
        $count = DB::table('signups')->count();  // Count the number of users in the 'signups' table
        return response()->json(['count' => $count]);
    }
    public function adminLogout(Request $request)
{
    $admin = $request->user();
    if ($admin) {
        $request->user()->tokens()->delete(); // Revoke all tokens
        return response()->json(['message' => 'Admin logged out successfully'], 200);
    }

    return response()->json(['message' => 'Admin not authenticated'], 401);
}
}
