<?php

namespace App\Helpers;

use Lcobucci\JWT\Configuration;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Key\InMemory;
use DateTimeImmutable;
use Exception;

class JWTAuth
{
    private $config;

    public function __construct()
    {
        $this->config = Configuration::forSymmetricSigner(
            new Sha256(),
            InMemory::plainText(env('JWT_SECRET'))
        );
    }

    public function encode(array $data)
    {
        $now = new DateTimeImmutable();
        $expire = $now->modify('+1 hour');

        $token = $this->config->builder()
            ->issuedBy(env('APP_URL'))
            ->permittedFor(env('APP_URL'))
            ->issuedAt($now)
            ->expiresAt($expire)
            ->withClaim('user_id', $data['user_id'])
            ->getToken($this->config->signer(), $this->config->signingKey());

        return $token->toString();
    }

    public function decode($token)
    {
        try {
            $parsedToken = $this->config->parser()->parse($token);

            if ($parsedToken->isExpired(new DateTimeImmutable())) {
                throw new Exception('Token has expired');
            }

            return $parsedToken->claims()->get('user_id');
        } catch (Exception $e) {
            throw new Exception('Invalid token: ' . $e->getMessage());
        }
    }
}
