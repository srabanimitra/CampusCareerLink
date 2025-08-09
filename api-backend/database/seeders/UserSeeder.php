<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        DB::table('login')->insert([
            'RegisterId' => 'admin123',
            'Password' => Hash::make('password123'),
        ]);
    }
}
