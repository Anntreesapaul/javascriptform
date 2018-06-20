var namepattern=/^[a-zA-Z]+$/
 var emailpattern =/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.([a-zA-Z]{2,4})$/
 var emailpattern2 =/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*$/
 var idpattern=/^\d{6}$/;

function validateForm()
{
 
 var x=document.forms["form1"]["name"];
 if (x.value=="")
   {
  document.getElementById('pointfn').innerHTML="Please enter a name.";
    x.focus();
  return false;
   }
 else if(x.value.length<3 || x.value.length>20)
   {
  x.value="";
  document.getElementById('pointfn').innerHTML="Please enter a name between 3 and 20";
  x.focus();
  return false;
   }
 else if ((!namepattern.test(x.value)))
   {
  document.getElementById('pointfn').innerHTML="Please enter only alphabets.";
    x.value="";
  x.focus();
  return false;
   }
document.getElementById('pointfn').innerHTML='';


x=document.form1.email;
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
  document.getElementById('pointadrs').innerHTML="Please enter a Password";
  x.focus();
  return false;
 }
 else if(x.value.length<6 || x.value.length>15)
   {
  x.value="";
  document.getElementById('pointadrs').innerHTML="Please enter a password between 6 and 15";
  x.focus();
  return false;
 }
 document.getElementById('pointadrs').innerHTML="";

 }
        
 
 