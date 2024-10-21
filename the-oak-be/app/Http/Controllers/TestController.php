<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test(Request $request)
    {
        // Esempio di dati da restituire come risposta
        $data = [
            'message' => 'API di test raggiunta con successo!',
            'status' => 'success',
            'timestamp' => now()->toDateTimeString(),
        ];

        // Restituisce la risposta in formato JSON
        return response()->json($data, 200);
    }
}
