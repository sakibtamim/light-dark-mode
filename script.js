// const toggleSwitch = document.querySelector('input[type="checkbox"]');

// // switch theme dynamically
// function switchTheme(event){
//     console.log(event);
// }

// // event listenser
// toggleSwitch.addEventListener('change', switchTheme);

const toggleSwitch = document.querySelector('input[type="checkbox"]');


toggleSwitch.addEventListener('change', function () {
    console.log(this.checked); // true if checked, false if not
});