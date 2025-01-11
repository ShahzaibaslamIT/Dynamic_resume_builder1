const Skills = document.getElementById("skills")
const toggleSkillsButton= document.getElementById("toggle-skills-button");

function toggleSkillsVisibility() {
    if(Skills){
        Skills.style.display==="none"?"block":"none";
    }
}
if(toggleSkillsButton){
    toggleSkillsButton.addEventListener("click",toggleSkillsVisibility);
}