import { getMaxListeners } from 'process';
import { Task } from '../models/Task';
import {Complete} from '../models/Complete';
import {Student} from '../models/Student';


// Display all tasks
export async function index(req: any, res: any) {
    const data = await Student.find();
    console.log(data);
    const params = {
      'students': data,
    };
   res.render('students/index', params);
   };
  
// Edit task 
export async function edit(req: any, res: any) {
    const id = req.params.id;
    const data = await Student.findById(id);
    const params = {
      student: data,
    };
   res.render('students/edit', params);
   }; 
   
// Route to handle form data
export async function createStudent(req, res) {
    const data = await Student.create(req.fields);
    console.log(data);
    const params = {
      student: data,
    };
   res.render('students/saved', params);
  };   
     
// Update task
export async function updateStudent(req: any, res: any) {
    const data = await Student.findByIdAndUpdate(req.params.id, req.fields);
    console.log(data);
    const params = {
      student: data,
    };
   res.render('students/saved', params);
 };
  
//Delete task
export async function deleteStudent (req: any, res: any) {
    const data = await Student.findByIdAndRemove(req.params.id);
    console.log(data);
    res.redirect('/students');
  };
     
//Render Form
export function form(req: any, res: any) {
      res.render('students/form');
  };

// Render list of completed task for students
export async function showTasks(req: any, res: any) {
  const id = req.params.id;
  console.log(id);
  const student = await Student.findById(id);
  const tasksCompleted = student['tasksCompleted'];
  console.log(tasksCompleted);
  const params = {
    'tasksCompleted': tasksCompleted,
    student: student,
  };
 res.render('students/tasks', params);
};

// Render view of student's details
export async function view(req: any, res: any) {
  const data = await Student.findById(req.params.id);
  console.log(data);
  const params = {
    student: data,
  };
  res.render('students/view', params); 
}

//Delete completed task
export async function deleteCompleted (req: any, res: any) {
  const student = await Student.findById(req.params.studentid);
  const completedid = req.params.completedid;
  const tasks = await Task.find();
};