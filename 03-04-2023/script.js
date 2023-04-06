'use strict';

// function favoriteDogs(breed, size, trait) {
//   this.breedName = breed;
//   this.dogSizeIbs = size;
//   this.dogTrait = trait;

//   this.forApartment = function () {
//     this.dogSizeIbs <= 50
//       ? console.log('You can raise them in apartments')
//       : console.log("It's better to raise them in houses");
//   };
// }

// const shibaTrait = ['good-natured', 'alert', 'bold'];
// let myFavoriteDog1 = new favoriteDogs('shiba-inu', 15, shibaTrait);
// console.log(myFavoriteDog1);
// myFavoriteDog1.forApartment();

// const samoyedTrait = ['social', 'mischievous', 'smart'];
// let myFavoriteDog2 = new favoriteDogs('Samoyed', 53, samoyedTrait);
// console.log(myFavoriteDog2);
// myFavoriteDog2.forApartment();

function myFavoriteAnimals(
  animalName,
  animalAge,
  animalClassification,
  numOfLegs
) {
  this.name = animalName;
  this.age = animalAge;
  this.classification = animalClassification;
  this.legs = numOfLegs;
  this.canWalk = function () {
    this.legs > 1 ? console.log('It can walk') : console.log('It cannot walk');
  };
  this.makeBabies = function () {
    console.log(
      `This ${this.age} ${this.age === 1 ? 'year' : 'years'} old ${
        this.name
      } is going to mate!`
    );
  };
}

let myFavoriteAnimals1 = new myFavoriteAnimals('dog', 1, 'mammal', 4);
// console.log(myFavoriteAnimals1);
// myFavoriteAnimals1.canWalk();
// myFavoriteAnimals1.makeBabies();

function zoo(
  zooLocation,
  zooExistedAnimal,
  zooExistedAnimalNum,
  zooMaxNumAnimals
) {
  this.location = zooLocation;
  this.existedAnimal = zooExistedAnimal;
  this.existedAnimalNum = zooExistedAnimalNum;
  this.maxNumAnimals = zooMaxNumAnimals;
  this.currentTotalNum = 0;

  for (let i = 0; i < zooExistedAnimalNum.length; i++) {
    this.currentTotalNum += zooExistedAnimalNum[i];
  }

  this.addAnimals = function (animalsName, animalAmount) {
    const extraNumAnimals = this.maxNumAnimals - this.currentTotalNum;
    const isNewAnimalType = !this.existedAnimal.includes(animalsName);

    if (
      extraNumAnimals >= animalAmount &&
      animalAmount !== 0 &&
      isNewAnimalType
    ) {
      this.existedAnimal.push(animalsName);
      this.existedAnimalNum.push(animalAmount);
      this.currentTotalNum += animalAmount;
      console.log(`we have added ${animalAmount} ${animalsName} to the zoo`);
    } else if (
      extraNumAnimals < animalAmount &&
      extraNumAnimals !== 0 &&
      !this.existedAnimal.includes(animalsName)
    ) {
      this.existedAnimal.push(animalsName);
      this.existedAnimalNum.push(extraNumAnimals);
      this.currentTotalNum += extraNumAnimals;
      console.log(
        `Currently we can only take ${extraNumAnimals} ${animalsName}, and we have added ${extraNumAnimals} ${animalsName} to the zoo.`
      );
    } else if (animalAmount === 0) {
      console.log(`Please contact us when ${animalsName} is available`);
    } else {
      console.log(
        `Sorry, currently we are not going to take ${
          animalAmount === 1 ? 'this' : 'these'
        } ${animalsName}`
      );
    }
  };
}

let zoo1ExistedAnimal = [
  'red panda',
  'tiger',
  'giraffe',
  'lion',
  'okapi',
  'koala',
];
let zoo1ExistedAnimalNum = [2, 1, 2, 1, 3, 1];
let zoo1 = new zoo('Zagreb', zoo1ExistedAnimal, zoo1ExistedAnimalNum, 12);

// zoo1.addAnimals('tiger', 1);
zoo1.addAnimals('dog', 1);

zoo1.addAnimals('elephant', 2);

console.log(zoo1);
