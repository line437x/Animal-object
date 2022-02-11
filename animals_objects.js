"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    let name;
    let type;
    let desc;
    let age;

    // name = jsonObject.fullname.indexOf(" ") + 1;
    name = jsonObject.fullname.substring(1, jsonObject.fullname.indexOf(" "));
    type = jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf(" ") + 1);
    desc = jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf("the") + 4, jsonObject.fullname.lastIndexOf(" "));
    age = jsonObject.age;

    const Animal = {
      name: "",
      type: "",
      desc: "",
      age: "",
    };

    const animal = Object.create(Animal);
    animal.name = name;
    animal.type = type;
    animal.desc = desc;
    animal.age = age;
    console.log("animal:", animal);
    // TODO: MISSING CODE HERE !!!
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
