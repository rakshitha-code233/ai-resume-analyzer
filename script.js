
// Get the file input element from HTML
const resumeInput = document.getElementById("resume");

// Get the area where we will display the uploaded file
const uploadedFile = document.querySelector(".uploaded-file");

// Get the file name element
const fileName = uploadedFile.querySelector("strong");

// Get the file size element
const fileSize = uploadedFile.querySelector("small");
const analyzeBtn = document.getElementById("analyzeBtn");
const jobDescription = document.getElementById("jobDescription");
const analysisMessage = document.getElementById("analysisMessage");
const atsScore = document.getElementById("atsScore");
const missingSkills = document.getElementById("missingSkills")
const aiSuggestions = document.getElementById("aiSuggestions");
const atsProgress = document.getElementById("atsProgress");
const charCount = document.getElementById("charCount");

// Listen for a change in the file input
resumeInput.addEventListener("change", function () {

    // Check whether the user selected a file
    if (resumeInput.files.length > 0) {

        // Get the selected file
        const file = resumeInput.files[0];

        //get the file extension
        const fileName = file.name;
        const extension = fileName.split(".").pop().toLowerCase();

        //Allowed file types
        const allowedTypes = ["pdf", "doc", "docx"];

        //check whether the file type is allowed
        if(!allowedTypes.includes(extension)){
            alert("Please select a PDF, DOC, or DOCS file.");
            resumeInput.value = "";
            return;
        }

        // Display the file name
        const fileNameElement = uploadedFile.querySelector("strong");
        fileNameElement.textContent = file.name;

        // Convert file size from bytes to KB
        const sizeInKB = Math.round(file.size / 1024);

        // Display the file size
        const fileSizeElement = uploadedFile.querySelector("small");
        fileSize.textContent = sizeInKB + " KB • Selected just now";

        // Show the uploaded-file section
        uploadedFile.style.display = "flex";

        console.log("Selected file:", file);
    }
});
analyzeBtn.addEventListener("click", function () {
    if(resumeInput.files.length === 0){
        alert("Please select your resume first.");
        return;
    }
    const jd = jobDescription.value;
    if(jd.trim() === ""){
        alert("Please enter the job description");
        return;
    }
    analysisMessage.textContent = "Analyzing your resume...";
    analyzeBtn.textContent = "Analyzing....";
    analyzeBtn.disabled = true; 
    setTimeout(function () {

    // Temporary ATS score
    const score = 92;

    atsScore.textContent = score + "%";
    atsProgress.style.width = score + "%";


    // Temporary missing skills
    const skills = [
        "Spring Boot",
        "REST API",
        "Docker"
    ];

    let skillsHTML = "";

    skills.forEach(function(skill) {
        skillsHTML += `<p>${skill}</p>`;
    });

    missingSkills.innerHTML = skillsHTML;


    // Temporary suggestions
    const suggestions = [
        "Add Spring Boot projects to your resume.",
        "Mention REST API experience.",
        "Add Docker if you have relevant experience."
    ];

    let suggestionsHTML = "";

    suggestions.forEach(function(suggestion) {
        suggestionsHTML += `<p>${suggestion}</p>`;
    });

    aiSuggestions.innerHTML = suggestionsHTML;


    // Analysis finished
    analysisMessage.textContent = "Analysis complete!";

    // Enable button again
    analyzeBtn.textContent = "Analyze Resume";
    analyzeBtn.disabled = false;

}, 3000);

    console.log("Resume:", resumeInput.files[0]);
    console.log("Job Description:",jd);
});
 
jobDescription.addEventListener("input", function () {

    const count = jobDescription.value.length;

    charCount.textContent = count + " characters";

});