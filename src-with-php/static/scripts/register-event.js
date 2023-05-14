var invoice
var invoiceFile= document.getElementById("invoice")
invoiceFile.addEventListener("change",function(e){
    e.preventDefault()
            
    invoice = URL.createObjectURL(invoiceFile.files[0])
})

var regForm=document.getElementById("register-form-id")

var register=[]

regForm.addEventListener("submit",function(e){

    e.preventDefault();

    let newReg={} 
    newReg.fullName=document.getElementById("fullname").value
    newReg.email=document.getElementById("emailid").value
    newReg.year=document.getElementById("year").value
    newReg.regNo = document.getElementById("clg-reg-no").value

    var clg = document.getElementsByName('clg');
    for(i = 0; i < clg.length; i++) {
        if(clg[i].checked)
            newReg.clg=clg[i].value; 
    }

    var dept=document.getElementById("dept")
    newReg.dept = dept.options[dept.selectedIndex].text

    if((document.getElementById("phno").value.length)!=10){
        alert("enter correct phone number")
    }else{
        newReg.PhNo = document.getElementById("phno").value
    }
    
    newReg.invoice=invoice

    newReg.id=(Math.random())*1000

    console.log(newReg)

})