const request=require('supertest');
const expect=require('expect');

const {app}=require('./../server');
const {Todo}=require('./../models/todo');


beforeEach((done)=>{
  Todo.remove({}).then(()=>{
    done();
  });
});



describe('POST /todos', ()=> {
  //Test Cases go in here
  it('Should create a new todo',(done)=>{
    //For Async tests we alwayas have a done arguement otherwise it will notwork as expected.

    var text='Test todo text';
    request(app)
      .post('/todos')
      .send({text})
      .expect(200)///Assertions status
      .expect((res)=>{
        expect(res.body.text).toBe(text);
      })
      .end((err,res)=>{
        if(err){
          return done(err);
        }

        Todo.find().then((todos)=>{
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e)=>{
          done(e);
        });

      });

  });

  it('should not create todo with invalid body data',(done)=>{

    request(app)
      .post('/todos')
      .send({})
      .expect(400)//Assertion stataus
      .end((err,res)=>{
        if(err){
          return done(err);
        }

        Todo.find().then((todos)=>{
          //console.log(todos);
          expect(todos.length).toBe(0)
          done();
        }).catch((e)=>{
          done(e);
      });

  });

});
});
