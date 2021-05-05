console.log("Please check the gitHub link for the code");
console.log("https://github.com/swaff-y/coral-active/blob/main/js/main.js");

const array = ["one","two",["three",["four"],"five"],"six"];
const arrayTwo = ["one", {name: "two", nodes: [{name: "2.1", nodes: ["2.1a"]}, "two point two"]}, "three"];
let str = "";
let strD = "";

const isObject = (obj) => {
  return obj === Object(obj);
}

const recursive = (array,type = false) => {
  let orderedListFront = "<ul>";
  let orderedListBack = "</ul>";
  let orderedListItemFront = "<li>";

  if(type === true){
    orderedListFront = "<ol class='ol'>";
    orderedListBack = "</ol>"
    orderedListItemFront = "<li class='li'>)"
  } //end if

  const testArrayIn = Array.isArray(array);
  // check if we dealing with an array or object
  if(testArrayIn === true){
    //Print out first <UL>
    type === true
    ?
      str = str + orderedListFront
    :
      strD = strD + orderedListFront;
    //Go through all elements in the array
    for( let i = 0; i < array.length; i++ ){
        //Test if the element is an Object or not
        if(isObject(array[i]) === true){
          //if object convert values to an array
          const arr = Object.values(array[i]);
          //always choosing the first "Name" - Kind of going back a step
          //print out the list item
          type === true
          ?
            str = str + `${orderedListItemFront} ${ arr[0]}</li>`
          :
            strD = strD + `${orderedListItemFront} ${ arr[0]}</li>`;
        }else{
          // if not an object print the element
          //print out the "node" part of the object
          type === true
          ?
            str = str + `${orderedListItemFront} ${ array[i]}</li>`
          :
            strD = strD + `${orderedListItemFront} ${ array[i]}</li>`;
        } // end else
        //After printing out -> recursivly call the function again to
        //check array items again for each element
        recursive(array[i],type);
    } // end for
    //the UL gets added recursivly after the depth first search is complete
    type === true
    ?
      str = str + orderedListBack
    :
      strD = strD + orderedListBack;
  }else{
    //if we are not dealing with an array but rather an object
    //create an array from the values and loop through to
    //recursivly call the fuction again to test for array's
    const arr = Object.values(array);
    for( let i = 0; i < arr.length; i++ ){
      if(isObject(arr[i]) === true) recursive(arr[i],type);
    } // end for
  } // end else

  //return the HTML string
  if(type === true){
    return str
  } // end if
  return strD
}

//------------------ A try at an iterative version ----------------------

const cond = (item, index, last) => {
  if(index === 0){
    item = "<ul><li>" + item + "</li>";
  }else if(index === last){
    item = "<li>" + item + "</li></ul>";
  }else{
    item = "<li>" + item + "<li>";
  }
  return item;
}


const outCond = (item, index, last) => {
  if(Array.isArray(item) === false){
    item = cond(item, index, last);
  }else{
    // item = outCond(item,index, last);
    item = item;
  }
  return item;
}

const last = array.length -1;

const change = array.map((item,index)=>{

  item = outCond(item, index, last);
  return item;
});

console.log(change);

// const itArr = [];
// const iterative = (array) => {
//   const innerArray = array;
//   let i = 0;
//   while( innerArray.length > 0 ){
//     if(Array.isArray(array[i]) === false){
//
//     }
//
//     i++;
//     innerArray.shift(); // remove from array
//   } // while
//
//   return itArr;
// };

// console.log(iterative(array));
// console.log(itArrs);
