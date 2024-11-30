
const inputFname = document.getElementById("fname");
const inputLname = document.getElementById("lname");
const inputEmail = document.getElementById("email");
const inputTask = document.getElementById("task");
const inputDt = document.getElementById("dt");
const submitBtn = document.getElementById("submitBtn");  


const outputFullname = document.getElementById("output-fullname");  
const outputEmail = document.getElementById("output-email");     
const outputTask = document.getElementById("output-task");        
const outputDt = document.getElementById("output-datetime");      


submitBtn.addEventListener("click", () => {
    
    const fname = inputFname.value.trim();
    const lname = inputLname.value.trim();
    const email = inputEmail.value.trim();
    const task = inputTask.value.trim();
    const dt = inputDt.value.trim();


    if (!fname || !lname || !email || !task || !dt) {
        alert("Please fill all the fields");
        return;
    }

    
    const fullName = `${fname} ${lname}`;

    
    outputFullname.textContent = `Full Name: ${fullName}`;
    outputEmail.textContent = `Email: ${email}`;  
    outputTask.textContent = `Task: ${task}`;   
    outputDt.textContent = `Date and Time: ${dt}`; 


    inputFname.value = "";
    inputLname.value = "";
    inputEmail.value = "";
    inputTask.value = "";
    inputDt.value = "";
});
