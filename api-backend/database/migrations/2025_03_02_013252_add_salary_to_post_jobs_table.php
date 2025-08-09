<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::table('post_jobs', function (Blueprint $table) {
            if (!Schema::hasColumn('post_jobs', 'salary')) {
                $table->decimal('salary', 10, 2)->nullable()->after('application_mode');
            }
        });
    }

    public function down() {
        Schema::table('post_jobs', function (Blueprint $table) {
            $table->dropColumn('salary');
        });
    }
};
