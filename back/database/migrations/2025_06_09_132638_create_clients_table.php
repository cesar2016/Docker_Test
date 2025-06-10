<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id(); // Columna autoincremental para la clave primaria
            $table->string('name');
            $table->string('lastname');
            $table->string('phone')->nullable(); // Podría ser opcional, por eso nullable
            $table->string('city')->nullable();
            $table->integer('age')->nullable();
            $table->string('sex')->nullable(); // Podrías usar 'enum' si quieres restringir valores a 'male', 'female', 'other'
            $table->string('country')->nullable();
            $table->timestamps(); // Columnas created_at y updated_at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
};
