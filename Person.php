<?php
class Person
{
    //Здоровье не может быть более 100
    private $name;
    private $lastname;
    private $age;
    private $hp;
    private $mother;
    private $father;

    function __construct($name, $lastname, $age, $mother = null, $father = null)
    {
        $this->name = $name;
        $this->lastname = $lastname;
        $this->age = $age;
        $this->mother = $mother;
        $this->father = $father;
        $this->hp = 100;
    }
    function sayHi($name)
    {
        return "Hi, $name! I'm " . $this->name;
    }
    function setHP($hp)
    {
        if ($this->hp + $hp >= 100) $this->hp = 100;
        else $this->hp = $this->hp + $hp;
    }
    function getHP()
    {
        return $this->hp;
    }
    function getName()
    {
        return $this->name;
    }
    function getlastname()
    {
        return $this->lastname;
    }
    function getAge()
    {
        return $this->age;
    }
    function getMother()
    {
        return $this->mother;
    }
    function getFather()
    {
        return $this->father;
    }
    function getInfo()
    {
        return "<h3>a few words about myself</h3><br>" . "My name is: " . $this->getName() . "<br>my last name is: " . $this->getlastname() . "<br>my father's name: " . $this->getFather()->getName() . "<br>he's: " . $this->getFather()->getAge() . "<br>my mother's name: " . $this->getMother()->getName() . "<br>she's: " . $this->getMother()->getAge() . "<br>my mother's father: " . $this->getMother()->getFather()->getName() . "<br>my father's father: " . $this->getFather()->getFather()->getName() . "<br>my mother's mother: " . $this->getMother()->getMother()->getName() . "<br>my father's mother: " . $this->getFather()->getMother()->getName() . "";
    }
}

$petr = new Person("Petr", "Ivanov", 70);
$nadya = new Person("Nadya", "Ivanova", 65);
$igor = new Person("Igor", "Petrov", 68);
$varvara = new Person("Varvara", "Petrova", 65);

$alex = new Person("Alex", "Ivanov", 42, $nadya, $petr);
$olga = new Person("Olga", "Ivanova", 42, $varvara, $igor);

$valera = new Person("Valera", "Ivanov", 15, $olga, $alex);

// echo $valera->getMother()->getFather()->getName();


echo $valera->getInfo();




// $medKit = 50;
// $alex->setHP(-30); //упал
// echo $alex->getHP() . "<br>";
// $alex->setHP(+$medKit); //нашел аптечку
// echo $alex->$getHP();



// echo $alex->sayHi($igor->name);
// $alex->name="Alex";
// echo $alex->name;
