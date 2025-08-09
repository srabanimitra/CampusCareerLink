<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Signup; // Your user model
use Illuminate\Support\Facades\Hash; // For password hashing
use Illuminate\Support\Facades\Auth; // For authentication

class UserController extends Controller
{
    // Fetch all users (if required)
    public function index()
    {
        return response()->json(Signup::all(), 200);
    }

    // Delete user by ID
    public function destroy($id)
    {
        $user = Signup::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->delete();
        return response()->json(['message' => 'User deleted successfully'], 200);
    }

    // Change Password Method
    public function changePassword(Request $request)
    {
        // Validate incoming data
        $validated = $request->validate([
            'currentPassword' => 'required|string',
            'newPassword' => 'required|string|min:6|confirmed', // Ensure password confirmation
        ]);

        // Get the authenticated user (Assumes session or Sanctum token authentication)
        $user = Auth::user();  // Make sure you're using proper authentication middleware

        if (!$user) {
            return response()->json(['message' => 'User not authenticated'], 401);
        }

        // Check if the current password is correct
        if (!Hash::check($request->currentPassword, $user->password)) {
            return response()->json(['message' => 'Current password is incorrect'], 400);
        }

        // Update the password
        $user->password = Hash::make($request->newPassword); // Hash the new password
        $user->save();

        return response()->json(['message' => 'Password changed successfully'], 200);
    }
}
