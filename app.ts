#!/usr/bin/env node

import inquirer from "inquirer";

const answer:{biodata:string} =await inquirer.prompt([
    {
        name:"biodata",
        type:"list",
        choices:["naam","age","skills","DOB","phone number","whatsapp number","email"],
        message:"which type of data you want ?"
    }
])
if(answer.biodata==="naam"){
    console.log("My name is Abdul Rafay");
}
else if(answer.biodata==="age"){
    console.log("my age is 18");
}
else if(answer.biodata==="skills"){
    console.log("Hello ! my name is ABDUL RAFAY and i m a passionate Graphic Designer and also a Web Developer with expertise of HTML , CSS and typescript");
}
else if(answer.biodata==="DOB"){
    console.log("my date of birth is 25-October-2005");
}
else if(answer.biodata==="phone number"){
    console.log("my phone number is +92 313 2354942");
}
else if(answer.biodata==="whatsapp number"){
    console.log("my whatsapp number is +92 313 2354942");
}
else if(answer.biodata==="email"){
    console.log("my email ID is rafaysheikhuk218@gmail.com");
}
else{
    "please select one option again"
}