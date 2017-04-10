var mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{
  text:{
    type:String,
    minlength:1,
    required:true,
    trim:true
  },
  completed:{
    default:false,
    type:Boolean
  },
  completedAt:{
    type:Number,
    default:null
  }
});


module.exports={Todo};
