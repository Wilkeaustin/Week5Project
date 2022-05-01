let tempArray = [];

class Task {
    constructor (taskName, taskNotes, taskDay) {
        this.taskName = taskName;
        this.taskNotes = taskNotes;
        this.taskDate = taskDay;
    }
}

class Date {
    constructor (monthName, monthDate) {
        this.monthName = monthName;
        this.monthDate = monthDate;
        this.task = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
}

function mainMenu () {
   let userSelection = prompt('What would you like to do? \n1) Create A New Task \n2) View Task List \n3) Delete A Task \n4) Exit');
    switch(userSelection) {
            case '1':
                listCreation ();
                break;
            case '2':
                viewLists ();
                break;
            case '3':
                listDeletion ();
                break;
            case '4':
                alert('Have a nice day!');
                close();
                break;
            default: alert("Oops! Incorrect input...please try again!");
            mainMenu()
    }
}



function viewLists () {
    let str = "";
    for (let i = 0; i < tempArray.length; i++) {
        str += i+1 + ") " + tempArray[i].taskName + "\n";
    }
    let activeLists = alert("Here are the tasks you have created so far: \n \n" + str);
    mainMenu();
}



function listCreation () {
           const task = new Task(
               prompt("What would you like to name this Task?"),
               prompt("Attach a note to your task: "),
               prompt("What date & time would you like to accomplish this task? (mm/dd & time) "),
               )
           tempArray.push(task);
           console.log(tempArray);
           let userContinue = prompt("Would you like to create another task... \n1) Yes \n2) No");
           if (userContinue == 1) {
              listCreation(); 
           } else if (userContinue == 2) {
               mainMenu();
           } else {
               alert("ERROR \nInvalid Response...Returning To Main Menu");
               mainMenu();
           }
    }
    

function listDeletion () {
    let str = "";
    for(let i = 0; i < tempArray.length; i++){
        str += i+1 + ") " + tempArray[i].taskName + "\n";
    }
    let deletedTask = prompt("Select the task you would like to delete: \n \n" + str);
    deletedTask = parseInt(deletedTask) - 1;
    tempArray.splice(deletedTask, 1);
    mainMenu();
}




mainMenu();