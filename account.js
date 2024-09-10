// start sign
var emailRegex = /[a-zA-Z0-9_]+@(gmail|ymail|hotmail)\.com/;
var phoneRegex = /^(010|011|012|015)\d{8}$/;
var eMail1 = document.forms[0][0];
var passWord1 = document.forms[0][1];
var eMail2 = document.forms[1][0];
var passWord2 = document.forms[1][1];
var phoneNum = document.forms[1][2];
var email2Val;
var pass2Val;
var phoneVal;
var pass1Val;
var email1Val;

document.forms[1][0].addEventListener("input", function () {
  if (!emailRegex.test(eMail2.value)) {
    // alert("please enter a valid mail..")
    eMail2.style.border = "1px solid red";
  } else {
    email2Val = eMail2.value;
    eMail2.style.border = "";
    localStorage.setItem("emaill", email2Val);
  }
});
document.forms[1][2].addEventListener("input", function () {
  if (!phoneRegex.test(phoneNum.value)) {
    // alert("please enter a valid phone number..")
    phoneNum.style.border = "1px solid red";
  } else {
    phoneVal = phoneNum.value;
    phoneNum.style.border = "";
    localStorage.setItem("phone", phoneVal);
  }
});

document.forms[1][1].addEventListener("input", function () {
  localStorage.setItem("password", passWord2.value);
});

document.forms[0][0].addEventListener("input", function () {
  var get1 = localStorage.getItem("emaill");
  var get2 = localStorage.getItem("phone");
  var get3 = localStorage.getItem("password");
  // console.log(get1, get2, get3);

  if (eMail1.value !== get1) {
    eMail1.style.border = "1px solid red";
  } else {
    eMail1.style.border = "";
  }
});

document.forms[0][1].addEventListener("input", function () {
  var get3 = localStorage.getItem("password");

  if (get3 === null || passWord1.value !== get3) {
    passWord1.style.border = "1px solid red";
  } else {
    passWord1.style.border = "";
  }
});

var form1 = document.forms[0];

form1.addEventListener("submit", function (event) {
  var get1 = localStorage.getItem("emaill");
  var get3 = localStorage.getItem("password");
  var isValid = true;

  if (eMail1.value !== get1) {
    // alert("please enter your valid email..");
    eMail1.style.border = "1px solid red";
    isValid = false;
  } else {
    eMail1.style.border = "";
    localStorage.setItem('valid1',true);
    localStorage.setItem('logout1',false);
  }

  if (passWord1.value !== get3) {
    // alert("please enter your valid password..");
    passWord1.style.border = "1px solid red";
    isValid = false;
  } else {
    passWord1.style.border = "";
    localStorage.setItem('valid2',true);
    localStorage.setItem('logout2',false)
  }

  if (!isValid) {
    event.preventDefault();
  }
});
// end sign
document.forms[1].addEventListener("submit", function (event) {
   if (localStorage.getItem('logout1')=='true'&& localStorage.getItem('logout2')=='true' ) {
    Object.keys(localStorage).forEach(key => {
      if (key.includes(`data`)) {
        localStorage.removeItem(key);
      }
    });
  }
})