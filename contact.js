var namepattern=/^[a-zA-Z]+$/
 var phonepattern = /^\d{10}$/
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


 x=document.form1.contctno;
 if(x.value=="")
 {
  
  x.value="";
  document.getElementById('pointcontct').innerHTML="Please enter the contact number.";
  x.focus();
  return false;
 }
 else if(isNaN(x.value))
 {
  x.value="";
  document.getElementById('pointcontct').innerHTML="Please enter only digits.";
  x.focus();
  return false;
 }
 else if(x.value.length!=10)
 {
  x.value="";
  document.getElementById('pointcontct').innerHTML="Please enter a valid contact number";
  x.focus();
  return false;
 }
 else if(!phonepattern.test(x.value))
 {
  x.value="";
  document.getElementById('pointcontct').innerHTML="Please enter a valid contact number.";
  x.focus();
  return false;
 }
 document.getElementById('pointcontct').innerHTML="";

  
 x= document.getElementById("question");
 if(x.value==null || x.value=="" )
 {
  x.value="";
  document.getElementById('pointadrs').innerHTML="Please enter the question.";
  x.focus();
  return false;
 }
 else if(x.value.length>200)
   {
  x.value="";
  document.getElementById('pointadrs').innerHTML="Please enter below 200";
  x.focus();
  return false;
 }
 document.getElementById('pointadrs').innerHTML="";

 }
        
 
 