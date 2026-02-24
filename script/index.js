const loadlessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then(json => displayLessons(json.data))
};
const displayLessons = (lessons) => {
    const lessonContainer = document.getElementById("lesson-container");
    lessonContainer.innerHTML = "";
    for (let lesson of lessons) {
        console.log(lesson);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button class="btn btn-outline btn-primary"><iclass="fa-solid fa-circle-question"></i>Lesson - ${lesson.level_no}</button>
        `;
        lessonContainer.appendChild(btnDiv);
    }
}
loadlessons();