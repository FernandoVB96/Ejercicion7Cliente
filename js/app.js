const AllBtn = document.getElementById("all-btn");
const JavaBtn = document.getElementById("java");
const PythonBtn = document.getElementById("python");
const HtmlBtn = document.getElementById("html");
const CssBtn = document.getElementById("css");
const cards = document.querySelectorAll('.card');

function filter(category) {
    cards.forEach(card => {
        card.classList.remove('block', 'hide1');

        if (category === 'all-btn') {
            card.classList.add('block');
        } else if (card.classList.contains(category)) {
            card.classList.add('block');
        } else {
            card.classList.add('hide1');
        }
    });
}

AllBtn.addEventListener('click', () => filter('all-btn'));
JavaBtn.addEventListener('click', () => filter('java'));
PythonBtn.addEventListener('click', () => filter('python'));
HtmlBtn.addEventListener('click', () => filter('html'));
CssBtn.addEventListener('click', () => filter('css'));
