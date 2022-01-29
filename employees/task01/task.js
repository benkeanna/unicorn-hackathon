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

function randomBirthday(start, end) {
  let min = new Date();
  min.setFullYear( min.getFullYear() - end );
  let max = new Date();
  max.setFullYear( max.getFullYear() - start );
  return new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
}
//@@viewOff:helpers
//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {array} output data
**/
function main(dtoIn=  {}) {

}
//@@viewOff:main