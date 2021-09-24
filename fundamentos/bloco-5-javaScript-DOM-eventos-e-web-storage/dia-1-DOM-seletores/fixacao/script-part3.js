let headerText = document.getElementById('header-container');

headerText.style.backgroundColor = '#00B069';

let sectionUrgencyTasks = document.getElementsByClassName('emergency-tasks');

sectionUrgencyTasks[0].style.backgroundColor = '#FF9F84';

let h3SectionUrgencyTasks = document.querySelectorAll('.emergency-tasks h3');

for (const iterator of h3SectionUrgencyTasks) {
    iterator.style.backgroundColor = '#A500F3'
}

let sectionNoUrgencyTasks = document.getElementsByClassName('no-emergency-tasks');

sectionNoUrgencyTasks[0].style.backgroundColor = '#f9db5e';

let h3SectionNoUrgencyTasks = document.querySelectorAll('.no-emergency-tasks h3');

for (const iterator of h3SectionNoUrgencyTasks) {
    iterator.style.backgroundColor = '#232525';
}

let footerContainer = document.querySelector('#footer-container');

footerContainer.style.backgroundColor = '#003533';