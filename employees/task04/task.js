//@@viewOff:const
//@@viewOff:const

//@@viewOn:helpers
const MALE_NAMES = ['Václav', 'Miroslav', 'Petr', 'Michal', 'Jiří', 'Jaromír', 'Zdeněk', 'Tomáš', 'Adrian', 'Jan', 'Martin', 'Pavel', 'Robert',
    'Ryszard', 'Josef', 'Vladimír', 'Jaroslav', 'Karel', 'Vitalii', 'Arnošt', 'Roman', 'Ondřej', 'František', 'Luciano', 'Lukáš', 'Milan', 'Jakub',
    'Eduard', 'Adam', 'Antonín', 'Ladislav', 'David', 'Rudolf', 'Gerhard', 'Radim', 'Jozef', 'Stanislav', 'Ludvík', 'Vojtěch', 'Yurii', 'Jindřich',
    'Vladislav', 'Radek', 'Filip', 'Marek', 'Miloš', 'Luboš', 'Otakar', 'Zbyněk', 'Daniel'];
const FEMALE_NAMES = ['Zdeňka', 'Radka', 'Martina', 'Libuše', 'Kateřina', 'Marie', 'Jana', 'Stanislava', 'Božena', 'Naděžda', 'Monika', 'Lenka', 'Kristýna',
    'Simona', 'Anna', 'Hana', 'Eva', 'Jaroslava', 'Vendula', 'Dominika', 'Vladislava', 'Miroslava', 'Květoslava', 'Markéta', 'Jitka', 'Lucie', 'Alena', 'Marcela',
    'Valeriya', 'Pavlína', 'Aneta', 'Tetyana', 'Věra', 'Helena', 'Petra', 'Ivana', 'Jiřina', 'Vladimíra', 'Anežka', 'Viktorie', 'Miloslava', 'Jarmila', 'Ludmila',
    'Michaela', 'Barbora', 'Nikola', 'Růžena', 'Milena', 'Miluše', 'Veronika'];

function getNames(data) {
    let names = {}
    names.all = {}
    names.male = {}
    names.female = {}
    names.femalePartTime = {}
    names.maleFullTime = {}

    data.forEach((obj) => {
        if (FEMALE_NAMES.includes(obj.name)) {
            names.female[obj.name] = (names.female[obj.name] || 0) + 1;
            if (obj.workload < 40) {
                names.femalePartTime[obj.name] = (names.femalePartTime[obj.name] || 0) + 1;
            }
        } else if (MALE_NAMES.includes(obj.name)) {
            names.male[obj.name] = (names.male[obj.name] || 0) + 1;
            if (obj.workload === 40) {
                names.maleFullTime[obj.name] = (names.maleFullTime[obj.name] || 0) + 1;
            }
        }
        names.all[obj.name] = (names.all[obj.name] || 0) + 1;
    });
    return names;
}

function getChartData(data) {
    let chartData = {}

    for (let dataKey in data) {
        let chartDataKey = data[dataKey];
        let items = [];
        for (const [key, value] of Object.entries(chartDataKey)) {
            let item = {'label': key, 'value': value};
            items.push(item);
        }
        chartData[dataKey] = items;
    }
    return chartData;
}
//@@viewOff:helpers

//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {object} output data
**/
function main(dtoIn=[]) {
    let namesData = {}
    namesData.names = getNames(dtoIn);
    namesData.chartData = getChartData(namesData.names);
    return namesData;
}
//@@viewOff:main