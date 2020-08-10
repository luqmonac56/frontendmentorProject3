var firstName = document.getElementById('firstname'),
    lastName = document.getElementById('lastname'),
    password = document.getElementById('password-input'),
    email = document.getElementById('email'),
    errorImage1 = document.getElementById('error-image1'),
    errorImage2 = document.getElementById('error-image2'),
    errorImage3 = document.getElementById('error-image3'),
    errorImage4 = document.getElementById('error-image4'),
    innerDiv1 = document.getElementById('inner-div1'),
    innerDiv2 = document.getElementById('inner-div2'),
    innerDiv3 = document.getElementById('inner-div3'),
    innerDiv4 = document.getElementById('inner-div4'),
    error1 = document.getElementById('error1'),
    error2 = document.getElementById('error2'),
    error3 = document.getElementById('error3'),
    error4 = document.getElementById('error4'),
    submitBtn = document.getElementById('submit');



    function validateEmail(){
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    submitBtn.addEventListener('click', function(e){
        e.preventDefault();
        if (firstName.value == "") {
           innerDiv1.style.borderColor = 'hsl(0, 100%, 74%)';
           innerDiv1.style.marginBottom = '0px'
           errorImage1.style.display = 'block';
           error1.style.display = 'block'
    };

        if (lastName.value == "") {
            innerDiv2.style.borderColor = 'hsl(0, 100%, 74%)';
            innerDiv2.style.marginBottom = '0px'
            errorImage2.style.display = 'block';
            error2.style.display = 'block';
    };

        if (validateEmail(email.value)) {
            console.log(123)
        } else {
            innerDiv3.style.borderColor = 'hsl(0, 100%, 74%)';
            innerDiv3.style.marginBottom = '0px'
            errorImage3.style.display = 'block';
            error3.style.display = 'block';
        }

        if (password.value == "") {
            innerDiv4.style.borderColor = 'hsl(0, 100%, 74%)';
            innerDiv4.style.marginBottom = '0px'
            errorImage4.style.display = 'block';
            error4.style.display = 'block';
    };


    })
