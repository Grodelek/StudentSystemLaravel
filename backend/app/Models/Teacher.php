<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Teacher extends Model
{
    use HasFactory;

    protected $table = 'teachers';

    protected $fillable = [
        'name',
        'surname',
        'specialisation',
    ];

    // Define a relationship with the Subject model
    public function subjects()
    {
        return $this->belongsToMany(Subject::class, 'subject_teacher', 'teacher_id', 'subject_id');
    }

    // Helper method to get teacher info
    public function getInfo(): string
    {
        $subjectNames = $this->subjects->pluck('name')->toArray();
        $subjectList = implode(", ", $subjectNames);

        return "Teacher: {$this->name} {$this->surname}, Specialisation: {$this->specialisation}, Subjects: [{$subjectList}]";
    }
}