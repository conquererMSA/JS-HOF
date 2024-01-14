//HOF: ekti function ke parametre hisabe nibe ebong function tike modify kore return kore dibe othoba shudu matro tar context er ekti function return kore dite pare
//closure higher order function
// function multiply(value){
//     const multi=value*value 
//     return (value2)=>{
//         return value2*multi
//     }
// }

// const result=multiply(5)(3)
// console.log(result);

// array method map, filter, forEach, find hocce ekekta HOF

//coustom higher order functioons

const favLang=['JavaScript','Python','Java']

function coustomHOF(arr,workFunction){
    let numArray=[]
    for(let i=0; i<arr.length; i++){
        numArray.push(workFunction(arr[i]))
    }
    return numArray
}

function workFunction(lang){
        return lang.length 
}

const result=coustomHOF(favLang,workFunction)
console.log(result);

