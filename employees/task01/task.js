//@@viewOff:const
//@@viewOff:const

//@@viewOn:helpers
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
  return 'femaleName'
}

function getRandomMaleName() {
 return 'maleName'
}

function getRandomFemaleSurname() {
  return 'femaleSurname'
}

function getRandomMaleSurname() {
  return 'maleSurname'
}

function getRandomWorkload() {
    return 10
}

function getRandomGender() {
    return female
}

//@@viewOff:helpers
//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {array} output data
**/
function main(dtoIn=  {}) {
  const person = {};

  person.gender = getRandomGender()
  if (person.gender === FEMALE) {
    person.name = getRandomFemaleName()
    person.surname = getRandomFemaleSurname()
  } else {
    person.name = getRandomMaleName()
    person.surname = getRandomMaleName()
  }

  person.birthday = getRandomBirthday()
  person.workload = 10




  return [
    {
      gender: "male",
      birthdate: "1993-08-07T00:00:00.000Z",
      name: "Vratislav",
      surname: "Sýkora",
      workload: 40
    },
    {
      gender: "female",
      birthdate: "2000-01-03T00:00:00.000Z",
      name: "Jiřina",
      surname: "Ptáčková",
      workload: 20
    }
  ]
}
//@@viewOff:main