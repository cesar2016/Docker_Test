<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Http\Response; // Importar la clase Response

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): \Illuminate\Http\JsonResponse
    {
        // Obtiene todos los clientes y los devuelve como JSON
        $clients = Client::all();
        return response()->json($clients);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        // Valida los datos de entrada
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
            'city' => 'nullable|string|max:255',
            'age' => 'nullable|integer|min:0',
            'sex' => 'nullable|string|max:10', // O 'in:male,female,other' si usaste enum
            'country' => 'nullable|string|max:255',
        ]);

        // Crea un nuevo cliente con los datos validados
        $client = Client::create($validatedData);

        // Devuelve el cliente creado con un código de estado 201 (Created)
        return response()->json($client, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Client $client): \Illuminate\Http\JsonResponse
    {
        // Devuelve el cliente específico como JSON
        return response()->json($client);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Client $client): \Illuminate\Http\JsonResponse
    {
        // Valida los datos de entrada
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
            'city' => 'nullable|string|max:255',
            'age' => 'nullable|integer|min:0',
            'sex' => 'nullable|string|max:10',
            'country' => 'nullable|string|max:255',
        ]);

        // Actualiza el cliente con los datos validados
        $client->update($validatedData);

        // Devuelve el cliente actualizado como JSON
        return response()->json($client);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client): Response
    {
        // Elimina el cliente
        $client->delete();

        // Devuelve una respuesta sin contenido con un código de estado 204 (No Content)
        return response(null, Response::HTTP_NO_CONTENT);
    }
}