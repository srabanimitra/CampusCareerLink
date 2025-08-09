<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PostJob;
use Illuminate\Support\Facades\Validator;

class PostJobController extends Controller
{
    /**
     * Get all job circulars
     */
    public function index()
    {
        try {
            $jobs = PostJob::all();

            if ($jobs->isEmpty()) {
                return response()->json(['message' => 'No job circulars found'], 200);
            }

            return response()->json($jobs, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Create a new job post
     */
    public function create(Request $request)
    {
        try {
            // Validate input
            $validator = Validator::make($request->all(), [
                'title' => 'required|string|max:255',
                'department' => 'required|string|max:255',
                'grade' => 'required|string|max:255',
                'posted_on' => 'required|date',
                'deadline' => 'required|date',
                'application_mode' => 'required|string|max:255',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'error' => $validator->errors()
                ], 422);
            }

            // Save job post
            $job = PostJob::create($request->all());

            return response()->json([
                'message' => 'Post added successfully!',
                'job' => $job
            ], 201);

        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Get a single job circular by ID
     */
    public function show($id)
    {
        try {
            $job = PostJob::find($id);

            if (!$job) {
                return response()->json(['message' => 'Job not found'], 404);
            }

            return response()->json($job, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Update an existing job circular
     */
    public function update(Request $request, $id)
    {
        try {
            $job = PostJob::find($id);

            if (!$job) {
                return response()->json(['message' => 'Job not found'], 404);
            }

            // Validate fields only if they are provided
            $validated = $request->validate([
                'title' => 'sometimes|string|max:255',
                'department' => 'sometimes|string|max:255',
                'grade' => 'sometimes|string|max:255',
                'posted_on' => 'sometimes|date',
                'deadline' => 'sometimes|date',
                'application_mode' => 'sometimes|string|max:255',
            ]);

            $job->update($validated);

            return response()->json([
                'message' => 'Job circular updated successfully!',
                'job' => $job
            ], 200);

        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Delete a job circular
     */
    public function destroy($id)
    {
        try {
            $job = PostJob::find($id);

            if (!$job) {
                return response()->json(['message' => 'Job not found'], 404);
            }

            $job->delete();

            return response()->json(['message' => 'Job circular deleted successfully!'], 200);

        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong', 'message' => $e->getMessage()], 500);
        }
    }
    /**
 * Get the total number of job posts (circulars)
 */
public function countJobs()
{
    try {
        $count = PostJob::count(); // This will return the total number of posts

        return response()->json([
            'count' => $count
        ], 200);

    } catch (\Exception $e) {
        return response()->json(['error' => 'Something went wrong', 'message' => $e->getMessage()], 500);
    }
}

}