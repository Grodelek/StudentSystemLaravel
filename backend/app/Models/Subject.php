<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $table = 'subjects';

    protected $fillable = ['name', 'hours', 'lecturer'];

    public function teachers()
    {
        return $this->belongsToMany(Teacher::class, 'subject_teacher', 'subject_id', 'teacher_id');
    }

    public function getInfo(): string
    {
        return "Subject: {$this->name}, Hours: {$this->hours}, Lecturer: {$this->lecturer}";
    }
}
