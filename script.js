// finances = {"Name": "Andrew", "Balance": 1000}

function submit(){
    user = document.getElementById('email').value;
    password = document.getElementById('password').value;
    // console.log(user, password);
    if(user == '510036553' && password == 'Andrew@5454'){
        window.location.href = 'Andrewbank.html';
    }
    if(user == '510036554' && password == 'Aaron@5454'){
        window.location.href = 'Aaronbank.html';
    }
    if(user == 'k3E&58mDne' && password == '79838'){
        window.location.href = 'Aadhilbank.html';
    }
}