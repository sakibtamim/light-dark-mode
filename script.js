const toggleSwitch = document.querySelector('input[type="checkbox"]');

// switch theme dynamically
function switchTheme(event){
    console.log(event.target.checked);
}

// event listenser
toggleSwitch.addEventListener('change', switchTheme);
