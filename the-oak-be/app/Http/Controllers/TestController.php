<?php

namespace App\Http\Controllers;

use \ArdaGnsrn\Ollama\Ollama;

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


    public function chatTest(){
        $ollamaUrl = config("app.ollama_url");
        $client = Ollama::client($ollamaUrl);


        $response = $client->chat()->create([
            'model' => 'qwen2:0.5b',
            'messages' => [
                ['role' => 'system', 'content' => 'You are a llama.'],
                ['role' => 'user', 'content' => 'Hello!'],
                ['role' => 'assistant', 'content' => 'Hi! How can I help you today?'],
                ['role' => 'user', 'content' => 'I need help with my taxes.'],
            ],
        ]);

        return response()->json($response->message->content, 200);
    }
}
