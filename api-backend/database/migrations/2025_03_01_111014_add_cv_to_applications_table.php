<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::table('applications', function (Blueprint $table) {
            // Check if the column does not already exist before adding it
            if (!Schema::hasColumn('applications', 'cv')) {
                $table->string('cv')->nullable()->after('phone');
            }
        });
    }
    public function down() {
        Schema::table('applications', function (Blueprint $table) {
            // Check if the column exists before trying to drop it
            if (Schema::hasColumn('applications', 'cv')) {
                $table->dropColumn('cv');
            }
        });
    }
};
