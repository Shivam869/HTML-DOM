function validate(e) {
    e.preventDefault()

    const email=document.getElementById("email") .value
    const pass=document.getElementById("password") .value
    const age=document.getElementById("age") .value
    const msg_box=document.getElementById("message") 
    let message=""
    if(email==="") {
        message="Enter Your E-mail"
        msg_box .style .color="red"
    }
    else if(pass==="") {
        message="Enter The Password"
        msg_box .style .color="red"
    }
    else if(age==="") {
        message="Enter Your Age"
        msg_box .style .color="red"
    }
    else {
        message="Thanks For Logining In"
        msg_box .style .color="green"
    }
    msg_box .innerText=message
}