function showPreview(event) {
  if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
  }
}

var positive = 0;
var negative = 0;

function myFunction() {
    
    negative = 0;
   
  var name = document.getElementById("nametxt").value;
  namecheck(name)
  var lname = document.getElementById("lnametxt").value;
  lnamecheck(lname)
  var input = document.getElementById('file');
  imagevalidater(input)
  var no1 = document.getElementById("value1").value;
  Validate(no1)
  var email = document.getElementById('mailid').value;
  isValidEmail(email)
  var url = document.getElementById('url').value;
  validurl(url)
  var pass = document.getElementById('pass').value;
  passwordchecker(pass)
  var add = document.getElementById('add').value;
  addresschecker(add)
  var radios = document.getElementsByName("gender");
  validateradio(radios)
  var selector = document.getElementById("ddlView");
  Validateselector(selector)
  var pass = document.getElementById('pass').value;
  var confpass = document.getElementById("passcon").value;
  confirmpass(pass, confpass)
  onsubmit(positive,negative)
}

function onsubmit(positive,negative){
    if(negative == 0){
        alert("your data has been submitted")
        window.location.reload();
    }
    else{
        
    }
}

function imagevalidater(input) {
  var filePath = input.value;
  var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
  if (!allowedExtensions.exec(filePath)) {
      document.getElementById("imagePreview").innerHTML = "Only .jpg, .jpeg and .png file allowed";
      negative++;
      input.value = '';
      return false;
  } else {
      document.getElementById("imagePreview").innerHTML = "";
      positive++;
  }
}

function Validate(no1) {
  if (no1 == null || no1 == "") {
      document.getElementById("phoneerror").innerHTML = "This Field Can't be blank"
      negative++;
      return false;
  } else if (isNaN(no1)) {
      document.getElementById("phoneerror").innerHTML = "must be numeric"
      negative++;

  } else if (no1.charAt(0) == "1" || no1.charAt(0) == "2" || no1.charAt(0) == "3" || no1.charAt(0) == "4" || no1.charAt(0) == "5" || no1.charAt(0) == "6") {
      document.getElementById("phoneerror").innerHTML = "Phone Number Must be start with 9, 8 or 7"
      negative++;
      return false;
  } else if (no1.length < 10 || no1.length > 10) {
      document.getElementById("phoneerror").innerHTML = "Phone Number Length must be of 10 digits"
      negative++;
      return false;
  } else {
      document.getElementById("phoneerror").innerHTML = ""
      positive++;
  }
}

function namecheck(name) {
  var specialchar = 0;
  var numberinpass = 0;

  for (var i = 0; i < name.length; i++) {
      if ((name.charCodeAt(i) > 32 && name.charCodeAt(i) < 48) || (name.charCodeAt(i) > 57 && name.charCodeAt(i) < 65)) {
          specialchar++;

      }
      if ((name.charCodeAt(i) > 47 && name.charCodeAt(i) < 58)) {
          numberinpass++;
      }
  }

  for (var i = 0; i < name.length; i++) {
      if (name.charCodeAt(i) > 31 && (name.charCodeAt(i) < 65 || name.charCodeAt(i) > 90) && (name.charCodeAt(i) < 97 || name.charCodeAt(i) > 122)) {
          document.getElementById("nameerror").innerHTML = "Must be Alphabets no special characters"
          negative++;
      }
  }
  if (name == null || name == "") {
      document.getElementById("nameerror").innerHTML = "This Field Can't be blank"
      negative++;
      return false;
  } else if (!isNaN(name)) {
      document.getElementById("nameerror").innerHTML = "Must be Alphabets Can't be number"
      negative++;
      return false;
  } else if (!(specialchar == 0)) {
      document.getElementById("nameerror").innerHTML = "Must be Alphabets Can't be special character"
      negative++;
      return false;
  } else if (!(numberinpass == 0)) {
      document.getElementById("nameerror").innerHTML = "Must be Alphabets Can't be numeric character"
      negative++;
      return false;
  } else {
      document.getElementById("nameerror").innerHTML = ""
      positive++;
  }
}

function lnamecheck(name) {

  var specialchar = 0;
  var numberinpass = 0;

  for (var i = 0; i < name.length; i++) {
      if ((name.charCodeAt(i) > 32 && name.charCodeAt(i) < 48) || (name.charCodeAt(i) > 57 && name.charCodeAt(i) < 65)) {
          specialchar++;

      }
      if ((name.charCodeAt(i) > 47 && name.charCodeAt(i) < 58)) {
          numberinpass++;
      }
  }
  for (var i = 0; i < name.length; i++) {
      if (name.charCodeAt(i) > 31 && (name.charCodeAt(i) < 65 || name.charCodeAt(i) > 90) && (name.charCodeAt(i) < 97 || name.charCodeAt(i) > 122)) {
          document.getElementById("lnameerror").innerHTML = "Must be Alphabets no special characters"
      }
  }
  if (name == null || name == "") {
      document.getElementById("lnameerror").innerHTML = "This Field Can't be blank"
      negative++;
      return false;
  } else if (!isNaN(name)) {
      document.getElementById("lnameerror").innerHTML = "Must be Alphabets Can't be number"
      negative++;
      return false;
  } else if (!(specialchar == 0)) {
      document.getElementById("lnameerror").innerHTML = "Must be Alphabets Can't be special character"
      negative++;
      return false;
  } else if (!(numberinpass == 0)) {
      document.getElementById("lnameerror").innerHTML = "Must be Alphabets Can't be numeric character"
      negative++;
      return false;
  } else {
      document.getElementById("lnameerror").innerHTML = ""
      positive++;
  }
}

function isValidEmail(email) {
  if (email == null || email == "") {
      document.getElementById("mailerror").innerHTML = "This Field Can't be blank"
      negative++;
      return false;
  }
  if (email.length <= 2) {
      document.getElementById("mailerror").innerHTML = "not valid length"
      negative++;

      return false;
  } else if (email.indexOf("@") == -1) {
      document.getElementById("mailerror").innerHTML = "not have @"
      negative++;
      return false;
  } else {
      document.getElementById("mailerror").innerHTML = ""
      positive++;
  }
  var parts = email.split("@");
  var dot = parts[1].indexOf(".");
  var len = parts[1].length;
  var dotSplits = parts[1].split(".");
  var dotCount = dotSplits.length - 1;
  if (dot == -1 || dot < 2 || dotCount > 2) {
      document.getElementById("mailerror").innerHTML = ". is not present in mail id"
      negative++;
      return false;
  } else {
      document.getElementById("mailerror").innerHTML = ""
      positive++;
  }
  for (var i = 0; i < dotSplits.length; i++) {
      if (dotSplits[i].length == 0) {
          document.getElementById("mailerror").innerHTML = "After . Must be atleast two characters are there"
          negative++;
          return false;
      }
      else {
        document.getElementById("mailerror").innerHTML = ""
        positive++;
    }
  }
  return true;
}

function validurl(url) {
  if (url.indexOf("http") == 0 || url.indexOf("https") == 0) {
      document.getElementById("urlerror").innerHTML = ""
      positive++;

  } else {
      document.getElementById("urlerror").innerHTML = "The link doesn't have http or https."
      negative++;
  }
}

function passwordchecker(pass) {
  var specialsymbol = 0;
  var numberinpass = 0;
  var bigletter = 0;
  var smallletter = 0;
  for (var i = 0; i < pass.length; i++) {
      if ((pass.charCodeAt(i) > 47 && pass.charCodeAt(i) < 58)) {
          numberinpass++;
      }
      if ((pass.charCodeAt(i) > 32 && pass.charCodeAt(i) < 48) || (pass.charCodeAt(i) > 57 && pass.charCodeAt(i) < 65)) {
          specialsymbol++;
      }
      if ((pass.charCodeAt(i) > 64 && pass.charCodeAt(i) < 91)) {
          bigletter++;
      }
      if ((pass.charCodeAt(i) > 96 && pass.charCodeAt(i) < 123)) {
          smallletter++;
      }
  }
  if (pass == null || pass == "") {
      document.getElementById("passerror").innerHTML = "This Field Can't be blank"
      negative++;
      return false;
  } else if (specialsymbol == 0) {
      document.getElementById("passerror").innerHTML = "Add atleast one special symbol"
      negative++;
  } else if (numberinpass == 0) {
      document.getElementById("passerror").innerHTML = "Add atleast one numeric value"
      negative++;
  } else if (smallletter == 0) {
      document.getElementById("passerror").innerHTML = "Add atleast one small letter in password"
      negative++;
  } else if (bigletter == 0) {
      document.getElementById("passerror").innerHTML = "Add atleast one Capital letter in password"
      negative++;
  } else if (pass.length > 14) {
      document.getElementById("passerror").innerHTML = "password shold be of less than 14 char"
      negative++;
      return false;
  } else if (pass.length < 8) {
      document.getElementById("passerror").innerHTML = "password shold be of more than 8 char"
      negative++;
      return false;
  } else {
      document.getElementById("passerror").innerHTML = ""
      positive++;
      return true;
  }
}

function validateradio(radios) {
  var formValid = false;
  var i = 0;
  while (!formValid && i < radios.length) {
      if (radios[i].checked) formValid = true;
      i++;
  }
  if (!formValid){
    document.getElementById("generror").innerHTML = "select any of these"
    negative++;
  } 

  else {
      document.getElementById("generror").innerHTML = ""
      positive++;
  }
  return formValid;
}

function Validateselector(selector) {
  var strUser = selector.options[selector.selectedIndex].value;
  if (strUser == 0) {
      document.getElementById("selectorerror").innerHTML = "select any of these hobby"
      negative++;

  } else {
      document.getElementById("selectorerror").innerHTML = ""
      positive
  }
}

function addresschecker(add) {
  if (add == null || add == "") {
      document.getElementById("adderror").innerHTML = "This Field Can't be blank"
      negative++;
      return false;
  }
  if (add.length > 125) {
      document.getElementById("adderror").innerHTML = "To be short"
      negative++;
      return false;
  } else {
      document.getElementById("adderror").innerHTML = ""
      positive++;
  }
}

function confirmpass(pass, confpass) {
  if (confpass == null || confpass == "") {
      document.getElementById("passconerror").innerHTML = "This Field Can't be blank"
      negative++;
      return false;
  }
  if (pass != confpass) {
      document.getElementById("passconerror").innerHTML = "not same as above password"
      negative++;

  } else {
      document.getElementById("passconerror").innerHTML = ""
      positive++;
  }
}