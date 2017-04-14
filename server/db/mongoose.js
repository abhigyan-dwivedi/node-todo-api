var mongoose=require('mongoose')

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://172.17.0.2:27017/TodoApp',()=>{
  console.log('DB Connected');
})

//module.exports.mongoose=mongoose;


// module.exports={
//   mongoose:mongoose;
// }
//Configured mongoose
module.exports={mongoose};
