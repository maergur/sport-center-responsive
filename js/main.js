/* This is the function used to turn the transparent header to colored when scrolled. */

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = "#355592";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

/* Below functions are used to change the color of the buttons to orange when clicked

Here, I used resetColor() function to make sure everything is reseted, before changing their color. */

function groupImage() {
    resetColor();
    var currentImage = document.getElementById('currentImg');
    var groupButton = document.getElementById('groupBtn');
    currentImage.src = "/images/group.webp";
    groupButton.style.backgroundColor = "orange";
    groupButton.style.border ="orange"; 
}

function soloImage() {
    resetColor();
    var currentImage = document.getElementById('currentImg');
    var soloButton = document.getElementById('soloBtn');
    currentImage.src = "/images/solo.jpg"; 
    soloButton.style.backgroundColor = "orange";
    soloButton.style.border ="orange";
}

function strechImage() {
    resetColor();
    var currentImage = document.getElementById('currentImg');
    var strechButton = document.getElementById('stretchBtn');
    currentImage.src = "/images/stret.webp"; 
    strechButton.style.backgroundColor = "orange";
    strechButton.style.border ="orange";
}

function yogaImage() {
    resetColor();
    var currentImage = document.getElementById('currentImg');
    var yogaButton = document.getElementById('yogaBtn');
    currentImage.src = "/images/yoga.jpg"; 
    yogaButton.style.backgroundColor = "orange";
    yogaButton.style.border ="orange";

}

function resetColor() {
    var yogaButton = document.getElementById('yogaBtn');
    var strechButton = document.getElementById('stretchBtn');
    var soloButton = document.getElementById('soloBtn');
    var groupButton = document.getElementById('groupBtn');
    
    yogaButton.style.backgroundColor = "#355592";
    strechButton.style.backgroundColor = "#355592";
    soloButton.style.backgroundColor = "#355592";
    groupButton.style.backgroundColor = "#355592";


}

/* This is the function used to calculate BMI */

function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (!isNaN(weight) && !isNaN(height) && height > 0 && weight > 0) {
        var bmi = weight / (height * height);
        document.getElementById('bmiResult').innerText = 'Your BMI: ' + bmi.toFixed(2);


        if (bmi < 18.5) {
            triangle.style.borderBottomColor = 'blue';
            triangle.style.marginLeft = "97px"
        } else if (bmi >= 18.5 && bmi < 25) {
            triangle.style.borderBottomColor = 'green';
            triangle.style.marginLeft = "177px"
        } 
        else if (bmi >= 25 && bmi < 30) {
            triangle.style.borderBottomColor = 'yellow';
            triangle.style.marginLeft = "260px"
        }        
        else if (bmi >= 30 && bmi < 35) {
            triangle.style.borderBottomColor = 'orange';
            triangle.style.marginLeft = "343px"
        } else {
            triangle.style.borderBottomColor = 'red';
            triangle.style.marginLeft = "425px"
        }
    }}

    // Change header color when menu is open

    document.getElementById('menu-toggle').addEventListener('change', function() {
        var header = document.getElementById('header');
        if (this.checked) {
            header.style.backgroundColor ="#355592";
        } 
    });



    

    