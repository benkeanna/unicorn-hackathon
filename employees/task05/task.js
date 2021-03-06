//@@viewOff:const
//@@viewOff:const

//@@viewOn:helpers
function getAge(currentDate, birthdate) {
    const ageDifMs = currentDate - birthdate;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
//@@viewOff:helpers

//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {object} output data
**/

function main(dtoIn=[]) {
    let people = [];
    let currentDate = new Date();
    for (let i = 0; i < dtoIn.length; i++) {
        let personBirth = new Date(dtoIn[i].birthdate);
        if (currentDate.getMonth() === personBirth.getMonth()) {
            let person = {};
            person.name = dtoIn[i].name;
            person.surname = dtoIn[i].surname;
            person.gender = dtoIn[i].gender;
            person.age = getAge(currentDate, personBirth);
            people.push(person);
        }
    }
    return people;
}
//@@viewOff:main