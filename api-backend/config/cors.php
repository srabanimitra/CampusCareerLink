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

    'paths' => ['api/*'], // Allowing API routes to be accessed cross-origin

    'allowed_methods' => ['*'], // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)

    'allowed_origins' => [
        'http://localhost:3000', // Allow React frontend (or whatever your frontend URL is)
        'http://localhost:5173', // Add other URLs if necessary
        '*', // You can allow all origins if needed, but using specific ones is better for security
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // Allow all headers

    'exposed_headers' => [],


    'max_age' => 0, // How long the results of a preflight request can be cached

    'supports_credentials' => true,

];
