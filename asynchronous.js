//student object
// let setStudentAgeApi = (student, age) => {  //async code below
//     console.log("1. Starting ..")
//     setTimeout(() => { student.age = age; console.log("2. Api Processing")}, 500);
//     console.log("3. Done ..")
 
 
//  }
 let student = {name: "Eric"}
//  setStudentAgeApi(student, 20)
//  console.log(student)

 //I guess I realized that the order of logs & result of log(student) is not what was expected,  that is what we call Asynchronous behavior of Javascript APIs.

 setStudentAgeApi = (student, age) => {


    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if(age < 0)
                reject ("Bad Age")
         else
                  resolve(student)
        },
            500);
 
 
    });
 }
setStudentAgeApi(student, -3).then((student)=>{
    console.log(student)
})
.catch((a) => {
    console.log(a)
})

