var instructor = " Axle Barr";
class Course {
    constructor (courseName, instructor){
        this.courseName = courseName;
        this.instructor = instructor;
    }
    about(){
        return this.courseName + "is being taght by" + this.instructor;
    }
}
function choiceMade(courseChosen){
    currentCourse = new Course(courseChosen,instructor);
    document.getElementById("courseInfo").innerHTML = currentCourse.about();
}



//let course = new Course("JavaScript","Axle");
// var courseArray = [ "Angular", "React", "","JavaScript","CSS"]
// var nextCourse = "TypeScript";
// window.onload=function showNextCourse(){
    // document.getElementById('futureCourses');
// }


var dateToday = new Date();
function choiceMade(choice){
    alert("choice made"+ choice);
    document.getElementById("courseName").value = choice;

}


function validate(){
    if ((feedback.like[0].checked==false)&&(feedback.like[1].checked==false)){
        alert("You must check Yes or No");
    }
}

function showDate(){
    var showDate = document.getElementById("dateToday");
    showDate.innerHTML +=dateToday.getMonth()+'/'+ dateToday.getDate()+'/'+dateToday.getFullYear();
    showDate.innerHTML +=dateToday.toISOString().slice(0,10);
    showDate.innerHTML +=dateToday.toISOString().split('T')[0];
}

function calculateThis(){
    result = Math.round(8.2);
    document.getElementById("result").innerHTML = result;
}