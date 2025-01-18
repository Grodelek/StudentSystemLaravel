<?php
namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;
use App\Models\Student;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index(): JsonResponse|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        try{
            $students = Student::all();
            return response()->json($students);
        }catch (\Exception $e){
            return response()->json(['error' => 'Failed to retrieve students'], 500);
        }
    }
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'specialization' => 'required|string|max:255',
            'age' => 'required|integer|min:1',
            'index' => 'required|integer|digits:6',
        ]);
        $student = Student::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'specialization' => $request->specialization,
            'age' => $request->age,
            'index' => $request->index
        ]);
        return response()->json([
            'message' => 'Student created successfully'
        ]);
    }
}