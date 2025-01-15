<?php
namespace App\Models;

class Subject
{
    private string $name;
    private int $hours;
    private string $lecturer;

    public function __construct(string $name, int $hours, string $lecturer)
    {
        $this->name = $name;
        $this->hours = $hours;
        $this->lecturer = $lecturer;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getHours(): int
    {
        return $this->hours;
    }

    public function getLecturer(): string
    {
        return $this->lecturer;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function setHours(int $hours): void
    {
        if ($hours < 0) {
            throw new InvalidArgumentException("Hours cannot be negative.");
        }
        $this->hours = $hours;
    }

    public function setLecturer(string $lecturer): void
    {
        $this->lecturer = $lecturer;
    }

    public function getInfo(): string
    {
        return "Subject: {$this->name}, Hours: {$this->hours}, Lecturer: {$this->lecturer}";
    }
}
