const sculptureList = require('./data.js'); // import data.js
let sculptureListLengths = {}

//const element = sculptureList[1] // <---- comment out this line in your solution!

    for(i=0; i<sculptureList.length; i++){
        const element = sculptureList[i]   //cycle through elements from data.js
        
        console.log("{")
        for(const key in element){  //assign key lengths to be key values for new elements in sculptureListLengths
            let nameLength = element.name.length
            let artistLength = element.artist.length
            let descriptionLength = element.description.length
            let urlLength = element.url.length
            let altLength = element.alt.length 

            //next line assigns new value to respective key
            sculptureListLengths[i]= Object.assign({name: nameLength}, {artist: artistLength}, {description: descriptionLength}, {url: urlLength}, {alt: altLength})    //assign elements to new list

        }
        const newElement = sculptureListLengths[i]
        for (const key in newElement){  //print elements in new list
            console.log("  " + `${key}: ${newElement[key]}` +",")
        }
        console.log("}")
        
    }

//console.log(sculptureListLengths) <---- this was to test my new list had correct data fields

// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
// for (const key in element){
//     console.log(`${key}: ${element[key].length}`)
// }