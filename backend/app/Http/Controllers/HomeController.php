<?php
namespace App\Http\Controllers;

use App\Models\Student;

class HomeController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        return response()->json(['message' => 'HELLO WORLD!'], 200);
    }
    public function getStudents(): \Illuminate\Http\JsonResponse
    {
        try{
            $students = Student::all();
            return response()->json(['students' => $students ], 200);
        }catch (\Exception $e){
            return response()->json(['error' => 'Failed to retrieve students'], 500);
        }
    }

}