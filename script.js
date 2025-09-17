document.getElementById("loginForm").addEventListener("submit",function(e){
  e.preventDefault();
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;


if(email==="rsh.@clinic.com" && password==="1234"){
  alert("login successful");
  window.location.href="dashbord.html";
}else{
  alert("invalid email or password");
}
});