<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResearchController extends Controller
{
    public function index()
    {
        return response()->json([
            'title' => 'Research on AI',
            'description' => 'Various studies on artificial intelligence.',
            'researchAreas' => [
                ['name' => 'Machine Learning', 'details' => 'Details about Machine Learning'],
                ['name' => 'Natural Language Processing', 'details' => 'Details about NLP'],
            ],
            'ongoingProjects' => [
                ['projectName' => 'AI Research Project', 'projectDescription' => 'Research on AI'],
            ]
        ]);
    }
}
