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
  zooExistingAnimal,
  zooExistingAnimalNum,
  zooMaxNumAnimals
) {
  this.location = zooLocation;
  this.existingAnimal = zooExistingAnimal;
  this.existingAnimalNum = zooExistingAnimalNum;
  this.maxNumAnimals = zooMaxNumAnimals;
  this.currentTotalNum = 0;

  //Calculate the current total numbers of animals
  for (let i = 0; i < zooExistingAnimalNum.length; i++) {
    this.currentTotalNum += zooExistingAnimalNum[i];
  }

  //Function-- add animals(which the zoo currently doesn't have) within the max spaces
  this.addAnimals = function (animalsType, animalAmount) {
    const extraSpaces = this.maxNumAnimals - this.currentTotalNum;
    const isNewAnimalType = !this.existingAnimal.includes(animalsType);
    const addAnimalType = this.existingAnimal.push(animalsType);

    //when there are enough spaces for the adding animal amount
    if (extraSpaces >= animalAmount && animalAmount !== 0 && isNewAnimalType) {
      addAnimalType;
      this.existingAnimalNum.push(animalAmount);
      this.currentTotalNum += animalAmount;
      console.log(`we have added ${animalAmount} ${animalsType} to the zoo`);
    } else if (
      //when there are spaces but not enough spaces for the adding animal amount
      extraSpaces < animalAmount &&
      extraSpaces !== 0 &&
      isNewAnimalType
    ) {
      addAnimalType;
      this.existingAnimalNum.push(extraSpaces);
      this.currentTotalNum += extraSpaces;
      console.log(
        `Currently we can only take ${extraSpaces} ${animalsType}, and we have added ${extraSpaces} ${animalsType} to the zoo.`
      );
    } else if (animalAmount === 0) {
      //if the input of animal amount is 0
      console.log(`Please contact us when ${animalsType} is available`);
    } else {
      //When there is no extra spaces or we already have this kind of animal in the zoo
      console.log(
        `Sorry, currently we are not going to take ${
          animalAmount === 1 ? 'this' : 'these'
        } ${animalsType}`
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
