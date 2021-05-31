import { Student } from '../models/Student';
import {Task} from '../models/Task';


// Display all tasks
export async function index(req: any, res: any) {
  const data = await Task.find();
  console.log(data);
  const params = {
    'tasks': data,
  };
 res.render('tasks/index', params);
 };

// Edit task 
export async function edit(req: any, res: any) {
  const id = req.params.id;
  const data = await Task.findById(id);
  const params = {
    task: data,
  };
 res.render('tasks/edit', params);
 }; 
 
// Route to handle form data
export async function createTask(req, res) {
  const data = await Task.create(req.fields);
  console.log(data);
  const params = {
    task: data,
  };
 res.render('tasks/saved', params);
 };   
   
// Update task
export async function updateTask(req: any, res: any) {
  const data = await Task.findByIdAndUpdate(req.params.id, req.fields);
  console.log(data);
  const params = {
    task: data,
  };
 res.render('tasks/saved', params);
 };

//Delete task
export async function deleteTask (req: any, res: any) {
  const data = await Task.findByIdAndRemove(req.params.id);
  console.log(data);
  res.redirect('/tasks');
 };
   
//Render Form
export function form(req: any, res: any) {
    res.render('tasks/form');
  };

export async function view(req: any, res: any) {
  const data = await Task.findById(req.params.id);
  console.log(data);
  const params = {
    task: data,
  };
  res.render('tasks/view', params); 
}

   