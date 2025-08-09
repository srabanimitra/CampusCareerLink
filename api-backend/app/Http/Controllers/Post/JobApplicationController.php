<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Application;
use Illuminate\Support\Facades\Storage;

class JobApplicationController extends Controller
{
    public function store(Request $request)
    {
        // Validate incoming request
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:20',
            'cv' => 'required|mimes:pdf|max:2048', // Max file size 2MB
            'job_id' => 'required|integer',
            'job_title' => 'required|string',
        ]);

        // Store CV file
        $cvPath = $request->file('cv')->store('cvs', 'public'); // Save in storage/app/public/cvs

        // Save application data in DB
        $application = Application::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'cv' => $cvPath,
            'job_id' => $request->job_id,
            'job_title' => $request->job_title,
        ]);

        // Return response
        return response()->json(['message' => 'Application submitted successfully!']);
    }
}
