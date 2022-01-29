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
const MALE = 'male';
const FEMALE = "female";
const MALE_NAMES = ['Václav', 'Miroslav', 'Petr', 'Michal', 'Jiří', 'Jaromír', 'Zdeněk', 'Tomáš', 'Adrian', 'Jan', 'Martin', 'Pavel', 'Robert',
  'Ryszard', 'Josef', 'Vladimír', 'Jaroslav', 'Karel', 'Vitalii', 'Arnošt', 'Roman', 'Ondřej', 'František', 'Luciano', 'Lukáš', 'Milan', 'Jakub',
  'Eduard', 'Adam', 'Antonín', 'Ladislav', 'David', 'Rudolf', 'Gerhard', 'Radim', 'Jozef', 'Stanislav', 'Ludvík', 'Vojtěch', 'Yurii', 'Jindřich',
  'Vladislav', 'Radek', 'Filip', 'Marek', 'Miloš', 'Luboš', 'Otakar', 'Zbyněk', 'Daniel'];
const MALE_SURNAMES = ['Kamrád', 'Štencel', 'Urzedovský', 'Oškera', 'Peinelt', 'Pangrác', 'Herynek', 'Číž', 'Vaněk', 'Bečán', 'Hercík', 'Soural',
  'Grulich', 'Slouka', 'Jeřábek', 'Krajča', 'Jekl', 'Opluštil', 'Chloupek', 'Jasek', 'Bartoník', 'Jaworski', 'Tůma', 'Macháč', 'Zeť', 'Mahdal', 'Holeček',
  'Chaloupka', 'Homolka', 'Vrba', 'Kupček', 'Lysek', 'Zeman', 'Bursík', 'Hanuš', 'Zvonař', 'Král', 'Parkos', 'Rabas', 'Skucius', 'Staněk', 'Palán',
  'Jelínek', 'Valášek', 'Kyksa', 'Hanousek', 'Němec', 'Neplech', 'Tomaj', 'Pokorný'];
const FEMALE_NAMES = ['Zdeňka', 'Radka', 'Martina', 'Libuše', 'Kateřina', 'Marie', 'Jana', 'Stanislava', 'Božena', 'Naděžda', 'Monika', 'Lenka', 'Kristýna',
  'Simona', 'Anna', 'Hana', 'Eva', 'Jaroslava', 'Vendula', 'Dominika', 'Vladislava', 'Miroslava', 'Květoslava', 'Markéta', 'Jitka', 'Lucie', 'Alena', 'Marcela',
  'Valeriya', 'Pavlína', 'Aneta', 'Tetyana', 'Věra', 'Helena', 'Petra', 'Ivana', 'Jiřina', 'Vladimíra', 'Anežka', 'Viktorie', 'Miloslava', 'Jarmila', 'Ludmila',
  'Michaela', 'Barbora', 'Nikola', 'Růžena', 'Milena', 'Miluše', 'Veronika'];
const FEMALE_SURNAMES = ['Paličková', 'Mirgová', 'Opichalová', 'Kuřová', 'Kaufová', 'Holubová', 'Bláhová', 'Zadinová', 'Stránská', 'Uhlířová', 'Kapešová',
  'Středová', 'Benešová', 'Braunerová', 'Foltinová', 'Bažantová', 'Ciupová', 'Kočová', 'Holešinská', 'Redzinová', 'Včeláková', 'Prokešová', 'Čepeláková', 'Šírková',
  'Müllerová', 'Nováková', 'Duchoňová', 'Duchoňová', 'Arnoštová', 'Dočkalová', 'Pilařová', 'Nečesaná', 'Šustková', 'Číhalová', 'Drahotská', 'Frýdlová', 'Tranová',
  'Žáková', 'Kováčová', 'Polášková', 'Leová', 'Valentová', 'Zamprová', 'Erbenová', 'Horáčková', 'Serbusová', 'Budilová', 'Janáčková', 'Táborská', 'Navrátilová'];
const WORKLOAD = [10, 20, 30, 40];

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
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
      person.surname = getRandomMaleSurname()
    }

    person.birthday = getRandomBirthday(dtoIn.age.min, dtoIn.age.max)
    person.workload = getRandomWorkload()

    people.push(person)
  }

  return people
}
//@@viewOff:main