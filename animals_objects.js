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

    // Create variables
    // let name;
    // let type;
    // let desc;
    // let age;

    // Define a template for the data objects
    const Animal = {
      name: "",
      type: "",
      desc: "",
      age: "",
    };
    // create a objects from a prototype
    const animal = Object.create(Animal);

    // Find the rigth values/informations
    animal.name = jsonObject.fullname.substring(0, jsonObject.fullname.indexOf(" "));
    animal.type = jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf(" ") + 1);
    animal.desc = jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf("the") + 4, jsonObject.fullname.lastIndexOf(" "));
    animal.age = jsonObject.age;
    console.log("animal:", animal);

    //Push informations to list
    allAnimals.push(animal);
  });

  displayList();
}

function displayList() {
  console.log("displayList");
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
