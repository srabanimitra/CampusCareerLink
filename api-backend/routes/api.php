<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Post\PostJobController;
use App\Http\Controllers\Post\JobApplicationController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ApplicationController;
use App\Models\Signup;

use App\Http\Controllers\ProfileController;

Route::post('/save-profile', [ProfileController::class, 'saveProfile']);


Route::post('/createpost', [PostJobController::class, 'create']);
Route::put('/posts/{id}', [PostJobController::class, 'update']);
Route::delete('/posts/{id}', [PostJobController::class, 'destroy']);
Route::get('/posts', [PostJobController::class, 'index']);
Route::get('/posts/{id}', [PostJobController::class, 'show']);
Route::get('/users', [UserController::class, 'index']);
Route::delete('/users/{id}', [AuthController::class, 'deleteUser']);
Route::post('/admin/login', [AuthController::class, 'adminLogin']);
Route::post('/user/register', [AuthController::class, 'register']);
Route::post('/user/login', [AuthController::class, 'userLogin']);
Route::get('/applications', [ApplicationController::class, 'index']);
Route::post('/apply', [ApplicationController::class, 'store']);
Route::delete('/applications/{id}', [ApplicationController::class, 'destroy']);
Route::middleware('auth:sanctum')->post('/admin/logout', [AuthController::class, 'adminLogout']);

// Job Count Route (to fetch total number of jobs posted)
Route::get('/jobs/count', [DashboardController::class, 'getJobCount']);

// Route for fetching total number of users
Route::get('/user-count', function () {
    return response()->json(['count' => Signup::count()]);  // Use the Signup model for counting
});

// Route for fetching total number of job applications
Route::get('/application-count', function () {
    return response()->json(['count' => App\Models\Application::count()]);
});


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/apply', [JobApplicationController::class, 'store']);
// ✅ Secure profile route with JWT Middleware
Route::middleware(['jwt.auth'])->group(function () {
    Route::get('/profile', function (Request $request) {
        return response()->json([
            'message' => 'Protected content',
            'user_id' => $request->get('user_id')
        ]);
    });
});
// routes/api.php
use App\Http\Controllers\ResearchController;

Route::get('/research', [ResearchController::class, 'index']);
