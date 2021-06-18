// const mocha=require('mocha');
const assert=require('assert');

//pour lancer un test mocha, il faut faire npm run test_mocha, voir dans mon package.json => ensuite ca va executer les tests dans le dossier test
//on a meme pas besoin d'importer mocha
describe('some demo tests',function(){

    //create tests
    it('function for x2 multiplication',function(){
let questions=[2,5,8]
let aswers=[4,10,16]

let doubleOperation=(elem)=>2*elem

//assert va returner true ou false, pass or fail
questions.forEach((elem,idx)=>{assert(doubleOperation(elem)===aswers[idx])})
    })

    it('new test: addition 2+3',function(){
        assert(2+3===5)})

})