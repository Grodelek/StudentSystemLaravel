<?php
namespace App\Models;
class Student
{
    private string $name;
    private string $surname;
    private string $specialisation;
    private int $age;
    private int $index;

    public function __construct(string $name, string $surname, string $specialisation, int $age, int $index)
    {
        $this->name = $name;
        $this->surname = $surname;
        $this->specialisation = $specialisation;
        $this->age = $age;
        $this->index = $index;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getSurname(): string
    {
        return $this->surname;
    }

    public function getSpecialisation(): string
    {
        return $this->specialisation;
    }

    public function getAge(): int
    {
        return $this->age;
    }

    public function getIndex(): int
    {
        return $this->index;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function setSurname(string $surname): void
    {
        $this->surname = $surname;
    }

    public function setSpecialisation(string $specialisation): void
    {
        $this->specialisation = $specialisation;
    }

    public function setAge(int $age): void
    {
        if ($age < 0) {
            throw new InvalidArgumentException("Age cannot be negative.");
        }
        $this->age = $age;
    }

    public function setIndex(int $index): void
    {
        $this->index = $index;
    }

    public function getInfo(): string
    {
        return "Student: {$this->name} {$this->surname}, Specialisation: {$this->specialisation}, Age: {$this->age}, Index: {$this->index}";
    }
}
