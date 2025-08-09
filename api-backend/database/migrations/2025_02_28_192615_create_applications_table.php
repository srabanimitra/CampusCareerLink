<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    // Migration for storing job details in the applications table

public function up()
{
    Schema::create('applications', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email');
        $table->string('phone');
        $table->string('cv'); // Store file path
        $table->unsignedBigInteger('job_id'); // Add job_id column
        $table->string('job_title'); // Add job_title column
        $table->timestamps();
    });
}

    
    public function down()
    {
        Schema::dropIfExists('applications');
    }
};
