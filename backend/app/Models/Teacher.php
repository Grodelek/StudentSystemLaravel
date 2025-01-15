<?php

use App\Models\Subject;

class Teacher
{
    private string $name;
    private string $surname;
    private string $specialisation;

    /** @var Subject[] */
    private array $subjects = [];

    public function __construct(string $name, string $surname, string $specialisation)
    {
        $this->name = $name;
        $this->surname = $surname;
        $this->specialisation = $specialisation;
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

    public function getSubjects(): array
    {
        return $this->subjects;
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

    public function addSubject(Subject $subject): void
    {
        $this->subjects[] = $subject;
    }

    public function removeSubject(Subject $subject): void
    {
        foreach ($this->subjects as $key => $s) {
            if ($s === $subject) {
                unset($this->subjects[$key]);
                break;
            }
        }
    }

    public function getInfo(): string
    {
        $subjectNames = array_map(function (Subject $subject) {
            return $subject->getName();
        }, $this->subjects);

        $subjectList = implode(", ", $subjectNames);
        return "Teacher: {$this->name} {$this->surname}, Specialisation: {$this->specialisation}, Subjects: [{$subjectList}]";
    }
}
