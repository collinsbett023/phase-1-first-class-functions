function receivesAFunction(callback){
   callback()
}

function returnsANamedFunction(){
    return function callback(){
        console.log("Hey")
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("Hi")
    }
}