import {Complete, Student} from '../models/Student'
import {Task} from '../models/Task'

export async function index(req, res) {
    const students = await Student.find();
    const tasks = await Task.find();
    const params = {
        'students':students,
        'tasks':tasks
    };
    res.render('homework/index', params);
}

export async function completeTask (req, res) {
    const studentID = req.params.student;
    const taskID = req.params.task;
    const student = await Student.findById(studentID);
    const task = await Task.findById(taskID);
    const params = {
        'student':student,
        'task':task
    };
    res.render('homework/complete', params);
}

export async function markCompletedTask(req, res) {
    const studentID = req.params.student;
    const taskID = req.params.task;

    const student = await Student.findById(studentID);
    const task = await Task.findById(taskID);

    const completeParams = req.fields;
    completeParams.task = task;
    const complete = await Complete.create(completeParams);
    for (const [key, value] of Object.entries(req.fields)) {
        console.log(key + ": " + value);

        if (value == "on") {
            complete['score'] += 200;
            console.log(complete['score']);
        } 
    }

    const updatedComplete = await Complete.findByIdAndUpdate(complete['_id'], complete);
    console.log(updatedComplete);

    student['tasksCompleted'].push(updatedComplete);
    const updatedStudent = await Student.findByIdAndUpdate(studentID, student);

    //add points
    console.log(updatedStudent);

    console.log(student);
    const params = {
        student:student,
        task:updatedComplete
    };
    //res.send(updatedStudent);
    res.render('homework/completed', params);
}


export async function viewCompleted(req, res) {
    const studentID = req.params.student;
    const taskID = req.params.student;
    const student = await Student.findById(studentID);
    const task = student['tasksCompleted']
    const params = {
        'student':student,
        'task':task
    };
}