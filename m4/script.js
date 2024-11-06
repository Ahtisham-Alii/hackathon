var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var Experience = document.getElementById('Experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2 class=\"ye\"><b>Resume</b></h2>\n    <h3 class=\"pp\">Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    \n\n    <h3 class=\"e\">Education:</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n      <h3 class=\"ex\">Experience:</h3>\n    <p contenteditable=\"true\">").concat(Experience, "</p>\n\n      <h3 class=\"sk\">Skills:</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Type Something to generate resume');
    }
});
