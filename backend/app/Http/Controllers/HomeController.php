<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        return response()->json(['message' => 'dupa'], 200);
    }
    public function hello(): \Illuminate\Http\JsonResponse
    {
        return response()->json(['message' => 'Hello, world!']);
    }
}
