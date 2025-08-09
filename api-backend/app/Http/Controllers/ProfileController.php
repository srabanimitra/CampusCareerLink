<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function saveProfile(Request $request)
    {
        // Validate the incoming data
        $validated = $request->validate([
            'nameEnglish' => 'required|string|max:255',
            'nameBangla' => 'nullable|string|max:255',
            'fatherName' => 'nullable|string|max:255',
            'motherName' => 'nullable|string|max:255',
            'mobileNumber' => 'required|string|max:15',
            'dob' => 'required|date',
            'address' => 'nullable|string',
            'educationalInfo' => 'nullable|string',
            'cvFile' => 'nullable|file|mimes:pdf,doc,docx|max:5120',  // Allow only PDF, DOC, DOCX files up to 5MB
        ]);

        // Save the profile data
        $user = auth()->user(); // Assuming you are using authenticated users

        // Update or create profile for the user
        $user->profile()->updateOrCreate([], [
            'name_english' => $validated['nameEnglish'],
            'name_bangla' => $validated['nameBangla'],
            'father_name' => $validated['fatherName'],
            'mother_name' => $validated['motherName'],
            'mobile_number' => $validated['mobileNumber'],
            'dob' => $validated['dob'],
            'address' => $validated['address'],
            'educational_info' => $validated['educationalInfo'],
        ]);

        // Handle file upload (CV)
        if ($request->hasFile('cvFile')) {
            $cvPath = $request->file('cvFile')->store('cv_files');
            $user->profile->update(['cv_file' => $cvPath]);
        }

        return response()->json(['message' => 'Profile saved successfully!'], 200);
    }
}
