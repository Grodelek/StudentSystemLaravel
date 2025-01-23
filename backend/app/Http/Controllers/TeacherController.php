<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TeacherController extends Controller
{
    public function index(): JsonResponse
    {
        try {
            $teachers = Teacher::all();
            return response()->json($teachers);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve teachers'], 500);
        }
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'specialisation' => 'required|string|max:255',
        ]);

        try {
            $teacher = Teacher::create([
                'name' => $request->name,
                'surname' => $request->surname,
                'specialisation' => $request->specialisation,
            ]);

            return response()->json([
                'message' => 'Teacher created successfully',
                'teacher' => $teacher
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create teacher', 'details' => $e->getMessage()], 500);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $teacher = Teacher::find($id);
            if (!$teacher) {
                return response()->json(['error' => 'Teacher not found.'], 404);
            }

            return response()->json($teacher);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve the teacher.'], 500);
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        $request->validate([
            'name' => 'string|max:255',
            'surname' => 'string|max:255',
            'specialisation' => 'string|max:255',
        ]);

        try {
            $teacher = Teacher::find($id);
            if (!$teacher) {
                return response()->json(['error' => 'Teacher not found.'], 404);
            }

            $teacher->update($request->only(['name', 'surname', 'specialisation']));

            return response()->json([
                'message' => 'Teacher updated successfully',
                'teacher' => $teacher
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update the teacher.'], 500);
        }
    }

    public function delete($id): JsonResponse
    {
        try {
            $teacher = Teacher::find($id);
            if (!$teacher) {
                return response()->json(['error' => 'Teacher not found.'], 404);
            }
            $teacher->delete();

            return response()->json(['message' => 'Teacher deleted successfully.'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete the teacher.'], 500);
        }
    }
}
