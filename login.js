var namepattern=/^[a-zA-Z]+$/
 var emailpattern =/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.([a-zA-Z]{2,4})$/
 var emailpattern2 =/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*$/
 var idpattern=/^\d{6}$/;

function validateForm()
{
 
var x=document.form1.email;
 if(x.value=="")
 {
  x.value="";
  document.getElementById('pointemail').innerHTML="Please enter the email id.";
  x.focus();
  return false;
 }
 else if(!emailpattern.test(x.value))
 {
  x.value="";
  document.getElementById('pointemail').innerHTML="Please enter a valid email address.";
  x.focus();
  return false;
 }
 document.getElementById('pointemail').innerHTML="";



x= document.getElementById("password");
 if(x.value==null || x.value=="" )
 {
  x.value="";
  document.getElementById('pointadrs').innerHTML="Please enter your password";
  x.focus();
  return false;
 }
 else if(x.value.length<6 || x.value.length>15)
   {
  x.value="";
  document.getElementById('pointadrs').innerHTML="Please enter a valid password";
  x.focus();
  return false;
 }
 document.getElementById('pointadrs').innerHTML="";


 }
        
 
 