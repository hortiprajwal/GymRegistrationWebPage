                function FirstName(){
						var fName = document.getElementById("firstName").value;
						var re1 = /^[a-zA-Z\s\'\-']{2,25}$/;
						
						if(re1.test(fName)){ // id input is valid , update page to show succesful entry
							document.getElementById("firstNamePrompt").style.color = "green";
							document.getElementById("firstNamePrompt").innerHTML = "<strong>valid</strong>";
							return true;
						}
						else{ //if input is invalid, update page to prompt for new input
							document.getElementById("firstNamePrompt").style.color = "Red";
							document.getElementById("firstNamePrompt").innerHTML = "<strong>Enter min 3 characters.</strong>";
							return false;
						}
					}

				function MiddleName(){
					var mName = document.getElementById("middleName").value;
					var re2 = /^[a-zA-Z\s\'\-']{2,25}$/;
					
					if(re2.test(mName)){
						document.getElementById("middleNamePrompt").style.color = "green";
						document.getElementById("middleNamePrompt").innerHTML = "<strong>valid</strong>";
						return true;
					}
					else{
						document.getElementById("middleNamePrompt").style.color = "red";
						document.getElementById("middleNamePrompt").innerHTML = "<strong>Enter min 3 characters.</strong>";
						return false;
					}
				}

				function LastName(){
					var lName = document.getElementById("lastName").value;
					var re2 = /^[a-zA-Z\s\'\-']{2,25}$/;
					
					if(re2.test(lName)){
						document.getElementById("lastNamePrompt").style.color = "green";
						document.getElementById("lastNamePrompt").innerHTML = "<strong>valid</strong>";
						return true;
					}
					else{
						document.getElementById("lastNamePrompt").style.color = "red";
						document.getElementById("lastNamePrompt").innerHTML = "<strong>Enter min 3 characters.</strong>";
						return false;
					}
				}

				function PhoneNumber(){
					var phoneNumber = document.getElementById("phone").value;
					var re3 = /^\d{2}-\d{2}-\d{2}-\d{2}-\d{2}$/;
					
					if(re3.test(phoneNumber)){ //if input is valid
						document.getElementById("phonePrompt").style.color = "green";
						document.getElementById("phonePrompt").innerHTML = "<strong>valid</strong>";
						return true;
					}
					else{ //if input is invalid
						document.getElementById("phonePrompt").style.color = "red";
						document.getElementById("phonePrompt").innerHTML = "<strong>Use xx-xx-xx-xx-xx format</strong>";
						return false;
					}
				}

				function email(){
					var email = document.getElementById("mail").value;
					var re4 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
					
					if(re4.test(email)){
						document.getElementById("emailPrompt").style.color = "green";
						document.getElementById("emailPrompt").innerHTML = "<strong>valid</strong>";
						return true;
					}
					else{
						document.getElementById("emailPrompt").style.color = "red";
						document.getElementById("emailPrompt").innerHTML = "<strong>You have entered an invalid email address!</strong>";
						return false;
					}
				}

				function register(){
					
					document.getElementById("registerNow").innerHTML = "Thank you For Joining Us." + "</br>" + " Our Team will contact you in two working Days." + "</br>";
					document.getElementById("registerNow").innerHTML += " Welcome Onboard Mate!";
				}

        