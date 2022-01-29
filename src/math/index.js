export function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
export function generate8Characters(){
  let nbChars = 8;
  let toReturn = "";
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    "A", "B", "C", "D", "E", "F", "G", 
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", 
    "V", "W", "X", "Y", "Z"];
  for(let i = 0; i < nbChars; i++){
    toReturn += characters[getRandomInt(characters.length - 1)];
  }
  return toReturn;
 }
 export function cutString(chars){
   let toReturn = "";
   for(let i = 0; i < chars.length; i++){
     if(toReturn.length !== 0 && i % 2 === 0 && i < chars.length-1){
       toReturn += "-";
     }
     toReturn += chars[i];
   }
   return toReturn;
 }
 export function uuidv4() {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c==='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
export function compare(a, b) {
  if ( a.position < b.position ){
    return -1;
  }
  if ( a.position > b.position ){
    return 1;
  }
  return 0;
}
export function compareInt(a, b) {
  if ( a < b ){
    return -1;
  }
  if ( a > b ){
    return 1;
  }
  return 0;
}