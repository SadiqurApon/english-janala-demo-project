const loadlessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then(json => displayLessons(json.data))
};

// id:5
// level:1
// meaning:"আগ্রহী"
// pronunciation:"ইগার"
// word:"Eager"

const removeActive = () => {
    const lessonButtons = document.querySelectorAll(".lesson-btn");
    // console.log(lessonButtons);
    lessonButtons.forEach((btn) => btn.classList.remove("active"));
};

const loadlevelWords = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActive();
            const clickBtn = document.getElementById(`lesson-btn-${id}`);

            clickBtn.classList.add("active");
            displayWords(data.data);
        });
};




const displayWords = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    if (words.length == 0) {
        wordContainer.innerHTML = `
        <div class="text-center col-span-full rounded-xl p-10 space-y-4">
                <img src="assets/alert-error.png" alt="alert error" class="mx-auto">
                <p class="text-gray-400 font-semibold text-xl">আপনি এখনো কোন Lesson Select করেন ন</p>
                <h2 class="font-bold text-5xl ">একটি Lesson Select করুন।</h2>
            </div>
        `
        return;
    }
    words.forEach((word) => {

        const wordDiv = document.createElement("div");
        wordDiv.innerHTML = `
        <div class="bg-white p-10 text-center rounded-xl space-y-2">
                <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
                <p class="font-medium text-lg">Meaning / Pronounciation</p>
                <div class="bangla-font font-semibold text-2xl">${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronounciation ? word.pronounciation : "উচ্চারণ পাওয়া যায়নি"}</div>
                <div class="flex justify-between items-center">
                    <button onclick="my_modal_5.showModal()" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume"></i></button>
                </div>
            </div>
        `;
        wordContainer.append(wordDiv);
    });
};

const displayLessons = (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    for (let lesson of lessons) {
        // console.log(lesson);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick="loadlevelWords(${lesson.level_no})" id="lesson-btn-${lesson.level_no}" class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
        `;
        levelContainer.appendChild(btnDiv);
    }
}
loadlessons();