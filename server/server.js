var {mongoose}=require('./db/mongoose')

var {Todo}=require('./models/todo');
var {User}=require('./models/user');


// console.log(mongoose);
//
// /*
//
//
// var user=new User({
//   email:'abhigyan.dwivedi@gmail.com'
// });
//
// var savePromise=user.save();
//
// savePromise.then((doc)=>{
//   console.log('Document of User Saved to DB',doc);
// },(err)=>{
//   console.log('User Not Saved To DB',err);
// });
//
//
// */
// var newTodo=new Todo({
//   //text:'',
//   text:'Saving the better Todo',
//   //text:true
//   // completed:true,
//   // completedAt:Date.now()
// });
//
// savePromise=newTodo.save();
//
// savePromise.then((doc)=>{
//   console.log('Saved Todo');
//   console.log(JSON.stringify(doc))
// },(err)=>{
//   console.log('Unable to save todo',err);
// });
