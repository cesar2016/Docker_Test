<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */  

    'paths' => ['api/*', 'sanctum/csrf-cookie'], // Asegúrate que 'api/*' está aquí

    'allowed_origins' => ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://127.0.0.1:3000', 'http://localhost:3000', 'http://127.0.0.1:3002', 'http://localhost:3002'], // Añade la URL de tu frontend React
    'allowed_origins_patterns' => [],
    'allowed_methods' => ['*'], // Permite todos los métodos (GET, POST, PUT, DELETE, etc.)
    'allowed_headers' => ['*'], // Permite todas las cabeceras
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
