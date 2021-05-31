import {Complete, Student} from '../models/Student'
import {Task} from '../models/Task'

export async function renderLeaderboard(req, res) {
    const studentsUnsorted = await Student.find();
    var students = quick_Sort(studentsUnsorted)
    const params = {
        'students':students,
    };
    res.render('leaderboard/leaderboard', params);
}

function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i].score >= pivot.score) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}