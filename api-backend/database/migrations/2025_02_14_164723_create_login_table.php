<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoginTable extends Migration
{
    public function up(): void
    {
        Schema::create('login', function (Blueprint $table) {
            $table->id();                    // Auto-incrementing id
            $table->string('RegisterId')->unique(); // RegisterId (unique)
            $table->string('Password');           // Password field
            $table->timestamps();               // Timestamps for created_at and updated_at
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('login');  // Drop the login table if exists
    }
}
