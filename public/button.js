// When edit is clicked, display a form to edit the task
function edit(id) {
 window.location.href = '/tasks/edit/' + id;
 }
    
// When delete is clicked, display confirmation message
function confirmDelete(id) {
    const result = confirm('Are you sure you want to delete this task?');
    console.log(result);
    if (result) {
      window.location.href = '/tasks/delete/' + id;
    }
}

// When task is clicked show view with details of task
function view(id) {
  window.location.href = '/tasks/task/' + id;
  }

// When edit is clicked, display a form to edit the student
function editStudent(id) {
  window.location.href = '/students/edit/' + id;
  }
     
 // When delete is clicked, display confirmation message
function confirmDeleteStudent(id) {
     const result = confirm('Are you sure you want to delete this student?');
     console.log(result);
     if (result) {
       window.location.href = '/students/delete/' + id;
     }
 }

 // When edit is clicked completed task can be edited
function deleteCompleted(studentid, completedid) {
  const result = confirm('Are you sure you want to delete this completed task?');
     console.log(result);
     if (result) {
       window.location.href = '/students/delete/' + id;
     }
}

 // task is clicked, display list of allocated tasks for student
function tasks(id) {
  window.location.href = '/students/tasks/' + id;
}

 // When student is clicked show view with details of task
function viewStudent(id) {
  window.location.href = '/students/student/' + id;
  }

// When student is clicked show view with details of task
function viewComplete(id) {
  window.location.href = '/students/student/task/' + id;
  }

 //need to add function for student: tasks, delete, edit and task: date picker