let firstNamesArray = ["Dave","Bridget","Dennis","Nathen","Matt","George","Bob"]
let lastNamesArray = ["King","Regan","Casey","Maxwell","Hensley","Schwindt","Schmidt"]

let fullNames = (function(array1, array2){
    for (let x=0; x < array1.length; x++){
        console.log(`${x+1}. ${array1[x]} ${array2[x]}`)
        }
    })(firstNamesArray, lastNamesArray);