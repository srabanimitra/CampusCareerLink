<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\PostJob;

class DashboardController extends Controller
{
    /**
     * Get the count of all users.
     */
    public function getUserCount()
    {
        // Return the count of all users
        return response()->json(['count' => User::count()]);
    }

    /**
     * Get the count of all jobs.
     */
    public function getJobCount()
    {
        try {
            $count = PostJob::count(); // Count the number of job posts
            return response()->json(['count' => $count]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error fetching job count', 'message' => $e->getMessage()], 500);
        }
    }

    
}
