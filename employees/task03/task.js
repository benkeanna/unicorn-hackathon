//@@viewOff:const
const MALE = 'male';
const FEMALE = 'female';
//@@viewOff:const

//@@viewOn:helpers
//@@viewOff:helpers

//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {object} output data
**/
function getAge(currentDate, birthdate) {
    const ageDifMs = currentDate - birthdate;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function getChart(data) {
    let chartData = [];
    for (const [key, value] of Object.entries(data)) {
        let item = {'label': key, 'value': value};
        chartData.push(item);
    }
    return chartData
}

function getStackedBarChart(dataMale, dataFemale) {
    let chartData = [];
    let workload = ['10', '20', '30', '40'];
    workload.forEach((key) => {
        let item = {'label': key, 'valueMale': dataMale[key], 'valueFemale': dataFemale[key]};
        chartData.push(item);
    })
    return chartData;
}

function main(dtoIn=[]) {
    let charts = {};
    let currentDate = new Date();
    let pieChart = {};
    let barChart = {};
    let stackedBarChartMale = {};
    let stackedBarChartFemale = {};
    dtoIn.forEach((obj) => {
        
        pieChart[obj.workload] = (pieChart[obj.workload] || 0) + 1;

        let personBirth = new Date(obj.birthdate);
        let personAge = getAge(currentDate, personBirth);

        if (obj.gender === MALE) {
            barChart[personAge] = (barChart[personAge] || 0) + 1;
            stackedBarChartMale[obj.workload] = (stackedBarChartMale[obj.workload] || 0) + 1;
        } else if (obj.gender === FEMALE) {
            stackedBarChartFemale[obj.workload] = (stackedBarChartFemale[obj.workload] || 0) + 1;
        }
    });
    charts.pieChart = getChart(pieChart);
    charts.barChart = getChart(barChart);
    charts.stackedBarChart = getStackedBarChart(stackedBarChartMale, stackedBarChartFemale);
    return charts;
}
//@@viewOff:main

/*{
    "pieChart": [
     {"label": "10","value": 2},
     {"label": "20","value": 3},
     {"label": "30","value": 5},
     {"label": "40","value": 3},
    ],
    "barChart": [
     {"label": "22","value": 1},
     {"label": "25","value": 3},
     {"label": "39","value": 2},
     {"label": "40","value": 1},
     {"label": "42","value": 1}
    ],
    "stackedBarChart": [
     {"label": "10","valueMale": 1,"valueFemale": 1},
     {"label": "20","valueMale": 2,"valueFemale": 1},
     {"label": "30","valueMale": 2,"valueFemale": 3},
     {"label": "40","valueMale": 1,"valueFemale": 2}
    ]
  }*/