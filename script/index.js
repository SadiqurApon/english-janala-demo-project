const loadlessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then(json => displayLessons(json.data))
};
const displayLessons = (lessons) => {
    console.log(lessons);
}
loadlessons();