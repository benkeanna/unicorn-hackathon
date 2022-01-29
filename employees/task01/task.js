//@@viewOff:const
//@@viewOff:const

//@@viewOn:helpers
const {FEMALE, MALE, FEMALE_NAMES, FEMALE_SURNAMES, MALE_NAMES, MALE_SURNAMES, WORKLOAD} = require("../helpers/helpers");

/**
   * Returns random number in range <min,max>
   * 
   * @param {number} min min value
   * @param {number} max max value
   * @return {number} random number
  **/
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getRandomBirthday(start, end) {
  let min = new Date();
  min.setFullYear( min.getFullYear() - end );
  let max = new Date();
  max.setFullYear( max.getFullYear() - start );
  return new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
}

function getRandomFemaleName() {
  if (FEMALE_NAMES == null){
    return false;
  } else {
    return FEMALE_NAMES[getRandom(0, FEMALE_NAMES.length)];
  }
}

function getRandomMaleName() {
  if (MALE_NAMES == null){
    return false;
  } else {
    return MALE_NAMES[getRandom(0, MALE_NAMES.length)];
  }
}

function getRandomFemaleSurname() {
  if (FEMALE_SURNAMES == null){
    return false;
  } else {
    return FEMALE_SURNAMES[getRandom(0, FEMALE_SURNAMES.length)];
  }
}

function getRandomMaleSurname() {
  if (MALE_SURNAMES == null){
    return false;
  } else {
    return MALE_SURNAMES[getRandom(0, MALE_SURNAMES.length)];
  }
}

function getRandomWorkload() {
    if (WORKLOAD == null){
      return false;
    } else {
      return WORKLOAD[getRandom(0, WORKLOAD.length)];
    }
}

function getRandomGender() {
    return [MALE, FEMALE][getRandom(0, 1)];
}

//@@viewOff:helpers
//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {array} output data
**/
function main(dtoIn=  {}) {
  let people = []

  for (let i = 0; i < dtoIn.count; i++) {
    let person = {};
    person.gender = getRandomGender()
    if (person.gender === FEMALE) {
      person.name = getRandomFemaleName()
      person.surname = getRandomFemaleSurname()
    } else {
      person.name = getRandomMaleName()
      person.surname = getRandomMaleName()
    }

    person.birthday = getRandomBirthday(dtoIn.age.min, dtoIn.age.max)
    person.workload = getRandomWorkload()

    people.push(person)
  }

  return people
}
//@@viewOff:main