console.log("Please check the git hub link for the code");
console.log("https://github.com/swaff-y/coral-active/blob/main/js/main.js");

const array = ["one","two",["three",["four"],"five"],"six"];
const arrayTwo = ["one", {name: "two", nodes: [{name: "2.1", nodes: ["2.1a"]}, "two point two"]}, "three"];
let str = "";

const isObject = (obj) => {
  return obj === Object(obj);
}

const recursive = (array) => {
  const testArrayIn = Array.isArray(array);
  // check if we dealing with an array or object
  if(testArrayIn === true){
    str = str + "<ol>"; //Print out first <UL>
    //Go through all elements in the array
    for( let i = 0; i < array.length; i++ ){
        //Test if the element is an Object or not
        if(isObject(array[i]) === true){
          //if object convert values to an array
          const arr = Object.values(array[i]);
          //always choosing the first "Name" - Kind of going back a step
          //print out the list item
          str = str + `<li>) ${ arr[0]}</li>`;
        }else{
          // if not an object print the element
          //print out the "node" part of the object
          str = str + `<li>) ${ array[i]}</li>`;
        }
        //After printing out -> recursivly call the function again to
        //check array items again for each element
        recursive(array[i]);
    }
    //the UL gets added recursivly after the depth first search is complete
    str = str + "</ol>";
  }else{
    //if we are not dealing with an array but rather an object
    //create an array from the values and loop through to
    //recursivly call the fuction again to test for array's
    const arr = Object.values(array);
    for( let i = 0; i < arr.length; i++ ){
      if(isObject(arr[i]) === true){
        recursive(arr[i]);
      }
    }
  }
  return str
}

// const recursive = (array) => {
//   const test = Array.isArray(array);
//   if(test === true){
//     let count = array.length
//     // console.log("<ul>");
//     str = str + "<ul>";
//     for( let i = 0; i < count; i++ ){
//       recursive(array[i]);
//     }
//     // console.log("</ul>");
//     str = str + "</ul>";
//   }else{
//     str = str + `<li>${isObject(array)}</li>`;
//   }
//   return str
// }

// const iterate = (array,str) => {
//   // str = str + "<ul>";
//   for( let i = 0; i < array.length; i++ ){
//     if(isObject(array[i]) === true){
//       const objArray = Object.values(array[i])
//       iterate(objArray,str);
//     }else{
//       str = str + `<li>${array[i]}</li>`;
//     }
//   }
//   // str = str + "</ul>";
//   return str;
// }
//
// const iterate2 = (array,arrayReturn) => {
//
//   for( let i = 0; i < array.length; i++ ){
//     if(isObject(array[i]) === true){
//       check = false;
//       const objArray = Object.values(array[i])
//       iterate2(objArray,arrayReturn);
//     }else{
//       arrayReturn.push("<ul>")
//       arrayReturn.push(`<li>${array[i]}</li>`);
//     }
//   }
//   arrayReturn.push("</ul>")
//   return arrayReturn;
// }
//

//
// let string = "";
// let arr = [];
// let check = true;
// console.log(iterate(arrayTwo,string));
// console.log(iterate2(arrayTwo,arr,check).join(""));


// const recursive = (array) => {
//   const test = Array.isArray(array);
//   if(test === true){
//     let count = array.length
//     // console.log("<ul>");
//     str = str + "<ul>";
//     for( let i = 0; i < count; i++ ){
//        // console.log("run: ", array[i]);
//        recursive(array[i]);
//     }
//     // console.log("</ul>");
//     str = str + "</ul>";
//   }else{
//     str = str + `<li>${array}</li>`;
//   }
//   return str
// }
//
// const iterate = (array,arrayReturn) => {
//   for( let i = 0; i < array.length; i++ ){
//     if(isObject(array[i]) === true){
//       const objArray = Object.values(array[i])
//       iterate(objArray,arrayReturn);
//     }else{
//       arrayReturn.push(`${array[i]}`)
//     }
//   }
//   return arrayReturn;
// }
//
// const isObject = (obj) => {
//   return obj === Object(obj);
// }
