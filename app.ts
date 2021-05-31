import * as mongoose from 'mongoose';
import * as express from 'express';
import * as formidableMiddleware from 'express-formidable';
import * as taskcontroller from './controllers/taskcontroller';
import * as homecontroller from './controllers/homecontroller';
import * as studentcontroller from './controllers/studentcontroller';
import * as homeworkcontroller from './controllers/homeworkcontroller';
import * as leaderboardcontroller from './controllers/leaderboardcontroller';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

async function expressServer() {
    const port = 3000;
    const app = express();
   
   // Middleware setup
   app.use(formidableMiddleware());
   app.use(express.static('public'));
   
   // View engine setup
   app.set('view engine', 'pug');
   app.set('views', './views');
   
   // Controller routes
   app.get ('/', homecontroller.index);

   // Task Controller routes
   app.get ('/tasks', taskcontroller.index);
   app.get ('/tasks/form', taskcontroller.form);
   app.get ('/tasks/edit/:id', taskcontroller.edit);
   app.post ('/tasks/create', taskcontroller.createTask);
   app.post ('/tasks/update/:id', taskcontroller.updateTask);
   app.get ('/tasks/delete/:id', taskcontroller.deleteTask);
   app.get ('/tasks/task/:id', taskcontroller.view);

  // Student Controller routes
   app.get ('/students', studentcontroller.index);
   app.get ('/students/form', studentcontroller.form);
   app.get ('/students/edit/:id', studentcontroller.edit);
   app.post ('/students/create', studentcontroller.createStudent);
   app.post ('/students/update/:id', studentcontroller.updateStudent);
   app.get ('/students/delete/:id', studentcontroller.deleteStudent);
   app.get ('/students/tasks/:id', studentcontroller.showTasks);
   app.get ('/students/student/:id', studentcontroller.view);
   //app.get ('/students/student/task/:id', studentcontroller.viewCompleted);

  // Home Controller routes
   app.get ('/homework', homeworkcontroller.index);
   app.get ('/homework/complete/:student/:task', homeworkcontroller.completeTask);
   app.post ('/homework/completed/:student/:task', homeworkcontroller.markCompletedTask);

  //Leaderboard Controller routes
   app.get ('/leaderboard', leaderboardcontroller.renderLeaderboard);
  
  // Express server startup
   await app.listen(port);
   console.log(`Listening on port number: ${port}`);
}

async function main() {
    try {
      await mongoose.connect('mongodb+srv://loren:hellomrpham@unit2.pbddh.mongodb.net/unit3?retryWrites=true&w=majority');
      console.log('Successfully connected to MongoDB using Mongoose!');
      await expressServer();
    } catch (error) {
      console.log(error.stack);
    }
}
    
// Call the async function to start the main program
main();

