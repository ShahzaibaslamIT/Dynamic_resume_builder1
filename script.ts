document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();


     //Get references to form elements using their IDs

     const profilePictureInput=document.getElementById('profilePicture') as HTMLInputElement;
     


     const profilePictureInput=document.getElementById('profilePicture') as HTMLInputElement;

    const nameElement=document.getElementById('name') as HTMLInputElement;
    const emailElement=document.getElementById('email') as HTMLInputElement;
    const phoneElement=document.getElementById('phone') as HTMLInputElement;
    const educatiomElement=document.getElementById('education') as HTMLInputElement;
    const experienceElement=document.getElementById('experience') as HTMLInputElement;
    const skillsElement=document.getElementById('skills') as HTMLInputElement;
    
   
   if(nameElement && emailElement && phoneElement && educatiomElement && experienceElement &&skillsElement ){

    const name=nameElement.value;
    const email=emailElement.value;
    const phone=phoneElement.value;
    const education=educatiomElement.value;
    const experience=experienceElement.value;
    const skills=skillsElement.value;


     // Resume output
     const resumeOutput = `
     <h2>Resume</h2>
     <p><strong>Name:</strong>${name}</p>
     <p><strong>Email:</strong>${email}</p>
      <p><strong>Phone number:</strong>${phone}</p>
     
     <h3>Education</h3>
     <p>${education}</p>

     <h3>Experience</h3>
     <p>${experience}</p>

     <h3>Skills</h3>
     <p>${skills}</p>





    
     `;


     const resumeOutputElement=document.getElementById('resumeOutput')
     if(resumeOutputElement){
        resumeOutputElement.innerHTML=resumeOutput
     }else{
        console.error('The resume output elements are missing')

     }

    }else {
        console.error("one or more output elements are missing")
     };
   
   
   
   
   




})