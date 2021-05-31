import * as mongoose from 'mongoose';
//import {Task} from '../models/task';
import * as autopopulate from 'mongoose-autopopulate';

 // create definition for object model to store in database
const completeSchema = new mongoose.Schema ({
    comments: {
        type: String
    },
    score: {
        type: Number
    },
    draft: {
        type: Boolean
    },
    forum: {
        type: Boolean
    },
    improvement: {
        type: Boolean
    },
    extension: {
        type: Boolean
    },
    works: {
        type: Boolean
    },
    early: {
        type: Boolean
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

// Export the constructor (object prototype) method of the object model
completeSchema.plugin(autopopulate);

// Export the constructor (object prototype) method of the object model
export const Complete = mongoose.model ('Complete', completeSchema);