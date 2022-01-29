//@@viewOff:const
const FEMALE = "female";

const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

function median(values){
    if(values.length ===0) throw new Error("No inputs");

    values.sort(function(a,b){
        return a-b;
    });

    let half = Math.floor(values.length / 2);

    if (values.length % 2)
        return values[half];

    return (values[half - 1] + values[half]) / 2.0;
}
//@@viewOff:const

//@@viewOn:helpers
function getAge(birthdate) {
    let currentDate = new Date()
    let personBirth = new Date(birthdate);
    const ageDifMs = currentDate - personBirth;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function getStats(data) {
    let stats = {};
    stats.workload = []
    stats.workload10 = []
    stats.workload20 = []
    stats.workload30 = []
    stats.workload40 = []
    stats.workloadWomen = []
    stats.ages = []

    data.forEach((obj) => {
        switch (true) {
            case (obj.workload === 10):
                stats.workload10.push(obj.workload)
                break
            case (obj.workload === 20):
                stats.workload20.push(obj.workload)
                break
            case (obj.workload === 30):
                stats.workload30.push(obj.workload)
                break
            case (obj.workload === 40):
                stats.workload40.push(obj.workload)
                break
        }
        stats.workload.push(obj.workload)
        if (obj.gender === FEMALE) {
            stats.workloadWomen.push(obj.workload)
        }

        stats.ages.push(getAge(obj.birthdate))

    });

    return stats
}
//@@viewOff:helpers

//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {object} output data
**/
function main(dtoIn=[]) {
    let result = {};
    let stats = getStats(dtoIn);

    result.total = dtoIn.length
    result.workload10 = stats.workload10.length
    result.workload20 = stats.workload20.length
    result.workload30 = stats.workload30.length
    result.workload40 = stats.workload40.length
    result.averageAge = average(stats.ages)
    result.minAge = Math.min.apply(Math, stats.ages)
    result.maxAge = Math.max.apply(Math, stats.ages)
    result.medianAge = median(stats.ages)
    result.medianWorkload = median(stats.workload)
    result.averageWomenWorkload = average(stats.workloadWomen)
    result.sortedByWorkload = dtoIn.sort((a, b) => (a.workload > b.workload) ? 1 : -1)

    return result;
}
//@@viewOff:main