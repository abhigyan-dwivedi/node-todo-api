var express =require('express');
var bodyParser =require('body-parser');


var {mongoose}=require('./db/mongoose')
var {Todo}=require('./models/todo');
var {User}=require('./models/user');


var app=express();

app.use(bodyParser.json());



app.get('/',(req,res)=>{
  console.log('req recieved');
});


app.post('/todos',(req,res)=>{
    console.log('request recieved');
    console.log((req.body));

    var todo=new Todo({
        text:req.body.text
    });

    todo.save().then((doc)=>{
      res.status(200).send(doc);
      console.log(JSON.stringify(doc));
    },(e)=>{
      res.status(400).send(e);
    });

    // res.send({textOutput:'Sent from Client'});

});









var PORT=3000;
app.listen(PORT,()=>{
  console.log(`Started on ${PORT}`);
});






//
// var app=express();
//
// //Body Parser takes the String body and parses it into a JS OBJECT
// app.use(bodyParser.json());
//
//
// app.post('/todos',(req,res)=>{
//     var todo=new Todo({
//       text:req.body.text
//     });
//
//     console.log(JSON.stringify(todo));
//
//     savePromise=todo.save();
//     savePromise.then((doc)=>{
//       res.status(200).send(doc);
//     },(e)=>{
//       res.status(404).send(e);
//     });
//
//
// });
//
//
// app.listen(3000,()=>{
//   console.log('Started on port 3000');
// });
