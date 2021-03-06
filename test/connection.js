const mongoose=require('mongoose')

//before est un hook seulment dans mocha qui sert a ce que la connection commence avant de lancer les tests
//la function done est seulement dans mocha, sert a dire que la function asynchrone est fini
before(function(done){

//connect to mongodb
//voir tutorial : https://www.youtube.com/watch?v=oT2HOw3fWp4&list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u&index=3
//la connection dans le tutorial est deprecated et j'ai fait la correction pour enlever les erreurs
// mongoose.connect('mongodb://localhost/testaroo');
mongoose.connect("mongodb://localhost:27017/testaroo", { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open',function(){
    console.log('Connection with MongoDB has been made')
    done()
}).on('error',function(error){console.log('Connection error:',error);})

})