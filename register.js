function Validation()
{
	var FName = document.getElementById("firstname").value;
	if (FName == "")
	{
		alert("Попълнете празното поле за име!");
		return false;
	}

	var LName = document.getElementById("lastname").value;
	if (LName == "")
	{
		alert("Попълнете празното поле за фамилия!");
		return false;
	}

	var pass = document.getElementById("password").value;
    if (pass == "") 
    {
        alert("Напишете парола!");
        return false;
    }
        
    var repass = document.getElementById("RePassword").value;
    if (repass == "") 
    {
        alert("Повторете паролата си!");
        return false;
    }

    var email = document.getElementById("IDemail").value;
    if (email == "")
    {
    	alert("Въведете E-mail!");
    	return false;
    }

    var day = document.getElementById("day").value;
    if (day == "Ден") 
    {
        alert("Моля въведете ден на раждане!");
        return false;
    }

    var month = document.getElementById("month").value;
    if (month == "Месец") 
    {
        alert("Моля въведете месец на раждане!");
        return false;
    }

    var year = document.getElementById("year").value;
    if (year == "Година") 
    {
        alert("Моля въведете година на раждане!");
        return false;
    }

    alert("Регистрацията Ви беше успешна!");    
}

function FName()
{
	var name = document.getElementById("firstname").value;
	var regex = /^[a-zA-Z]{3,20}$/;
	if (!regex.test(name)) 
	{
        document.getElementById("firstname").className="error";       
    }
    else 
    {
        document.getElementById("firstname").className="name";
    }
}

function LName()
{
    var name = document.getElementById("lastname").value;
    var regex = /^[a-zA-Z]{3,20}$/;
    if (!regex.test(name)) 
    {
        document.getElementById("lastname").className="error";
    }
    else 
    {
        document.getElementById("lastname").className="name";
    }
}

function Pass()
{
    var pass = document.getElementById("password").value;
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{10,}$/;
    if (!regex.test(pass)) 
    {
        document.getElementById("password").className="error";
        alert("Паролата Ви трябва да съдържа цифри, главни и малки букви!");
    }
    else 
    {
        document.getElementById("password").className="pass";
    }
}

function RePass()
{
    var pass = document.getElementById("password").value;
    var repass = document.getElementById("RePassword").value;
    if (pass !== repass) 
    {
        document.getElementById("RePassword").className="error";
        alert("Паролата Ви не трябва да се различава!");
    }
    else 
    {
        document.getElementById("RePassword").className="pass";
    }
}

function Email()
{
    var email = document.getElementById("IDemail").value;
    var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!regex.test(email)) 
    {
        document.getElementById("IDemail").className="error";
    }
    else 
    {
        document.getElementById("IDemail").className="classEmail";
    }
}

function Phone() 
{
    var phone = document.getElementById("phone").value;
    var regex = /^[0-9\-\+]{10,13}$/;
    if (!regex.test(phone)) 
    {
        document.getElementById("phone").className="error";
    }
    else
    {
        document.getElementById("phone").className="Rphone";
    }
}
