<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use InvalidArgumentException;

class Student extends Model
{
    use HasFactory;

    protected $table = 'students';

    protected $fillable = [
        'name',
        'surname',
        'specialization',
        'age',
        'index',
    ];


    public function getInfo(): string
    {
        return "Student: {$this->name} {$this->surname}, Specialization: {$this->specialization}, Age: {$this->age}, Index: {$this->index}";
    }

    public function setAgeAttribute($value): void
    {
        if ($value < 0) {
            throw new InvalidArgumentException("Age cannot be negative.");
        }
        $this->attributes['age'] = $value;
    }
}