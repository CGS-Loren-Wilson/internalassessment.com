import * as mongoose from 'mongoose';
import * as autopopulate from 'mongoose-autopopulate';

// create definition for object model to store in database
const taskSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    weighting: {
        type: String,
        min: 0,
        max: 100,
    }, 
    datepublished: {
        type: Date,
        required: true,
        default: Date.now
    },
    duedate: {
        type: Date,
        min: Date.now
    },
    formative: {
        type: Boolean,
        //required: true
    }, 
});

// Export the constructor (object prototype) method of the object model
export const Task = mongoose.model ('Task', taskSchema);