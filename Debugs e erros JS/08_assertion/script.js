let arr = [2,3,4,5];
let arr2 =[1,2,3];

function iterarArray (arr) {
    if (arr.length == 0){
        throw new Error ("O Array precisa ter pelo menos um elemento");
    }else {
        for (let i = 0; i < arr.length; i++){
            console.log(i);
        }
    }
}

iterarArray(arr);
iterarArray(arr2);
