const mocha=require('mocha');
const assert=require('assert');

describe('some demo tests',function(){

    //create tests
    it('adds two numbers together',function(){
let questions=[2,5,8]
let aswers=[4,10,16]

let doubleOperation=(elem)=>2*elem

questions.forEach((elem,idx)=>{assert(doubleOperation(elem)===aswers[idx])})

    })

})