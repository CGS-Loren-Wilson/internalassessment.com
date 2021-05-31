import * as mongoose from 'mongoose';
import * as autopopulate from 'mongoose-autopopulate';
import {Task} from '../models/Task';

// create definition for object model to store in database
const completeSchema = new mongoose.Schema ({
    dateSubmitted: {
        type: Date,
        default: Date.now
    },
    comments: {
        type: String
    },
    score: {
        type:Number,
        min: 0,
        default: 0
    },
    draft: {
        type: String
    },
    forum: {
        type: String
    },
    improvement: {
        type: String
    },
    extension: {
        type: String
    },
    works: {
        type: String
    },
    early: {
        type: String
    },
    quality: {
        type: Number,
        default: 0
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
        autopopulate: true
    }
})

completeSchema.plugin(autopopulate);
export const Complete = mongoose.model ('Complete', completeSchema);



// create definition for object model to store in database
const studentSchema = new mongoose.Schema ({
    name: {
        type:String, 
        required: true,
        unique: true
    },
    email: {
        type:String,
        required: true
    },
    studentid: {
        type: Number,
        required: [true, 'No Student ID input. Please input a unique Student ID'],
        unique: true
    },
    tasksCompleted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Complete",
        autopopulate: true
    }]
})

//function to define virtual property "score" in student
studentSchema.virtual('score').
    get(function() {
        var total = 0;
        for (var i=0;i<this.tasksCompleted.length;i++) {
            var task = this.tasksCompleted[i];
            console.log(task);
            total+=task['score'];
        } 
        return total;
    })


// Export the constructor (object prototype) method of the object model
studentSchema.plugin(autopopulate);

// Export the constructor (object prototype) method of the object model
export const Student = mongoose.model ('Student', studentSchema);