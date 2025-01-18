<?php
namespace App\Http\Controllers;
use Illuminate\Routing\Controller;

class MainController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        return response()->json(['message' => 'HELLO WORLD!'], 200);
    }
}