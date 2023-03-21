var regForm=document.getElementById("register-form-id")

regForm.addEventListener("submit",function(e){
    e.preventDefault();
    console.log(document.getElementById("fullname").value);

})