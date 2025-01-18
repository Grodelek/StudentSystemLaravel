<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    protected $model = Student::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->firstName,
            'surname' => $this->faker->lastName,
            'specialization' => $this->faker->randomElement(['Engineering', 'Medicine', 'Law', 'Arts', 'Computer Science']),
            'age' => $this->faker->numberBetween(18, 30),
            'index' => $this->faker->unique()->numberBetween(10000, 99999),
        ];
    }
}
