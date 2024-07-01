/*### Task: Student Grade Management System

You need to create a simple student grade management system. This system will manage student information and their grades for different subjects. The task includes the following steps:

1. *Create Student Objects*:
   - Each student should have the following properties: id, name, and grades.
   - The grades property should be an object with subjects as keys and corresponding grades as values.

2. *Store Students in an Array*:
   - Create an array to store multiple student objects.

3. *Functions*:
   - *Add a Student*: Create a function to add a new student to the array.
   - *Remove a Student*: Create a function to remove a student from the array by their id.*/

let S1 ={
    id: 1,
    name : "hariom",
    grade: 'A',
};

S2 ={
    id: 2,
    name : "jousua",
    grade: 'B',
};
let arr=[S1,S2];

function add(){
    let sid= prompt("Enter Student id");
    let sname= prompt("Enter student name");
    let sgrade= prompt("Enter Student grade");
    let temp ={
        id: sid,
        name: sname,
        grade: sgrade,
    }
    return arr.push(temp);
}



function remove(){
    let sid= prompt("Enter Student id for removing");
    return delete arr[sid-1];
    
}
add();
remove();
console.log(arr);
