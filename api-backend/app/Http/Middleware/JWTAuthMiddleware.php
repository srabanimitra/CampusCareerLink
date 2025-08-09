<?php

namespace App\Http\Middleware;

use App\Helpers\JWTAuth;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class JWTAuthMiddleware
{
    private $jwtAuth;

    public function __construct()
    {
        $this->jwtAuth = new JWTAuth();
    }

    public function handle(Request $request, Closure $next)
    {
        $token = $request->bearerToken();

        if (!$token) {
            return response()->json(['message' => 'Token not provided'], Response::HTTP_UNAUTHORIZED);
        }

        try {
            $userId = $this->jwtAuth->decode($token);
            $request->attributes->add(['user_id' => $userId]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Invalid token: ' . $e->getMessage()], Response::HTTP_UNAUTHORIZED);
        }

        return $next($request);
    }
}
