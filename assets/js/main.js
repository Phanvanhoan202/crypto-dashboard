const chart = document.querySelector('canvas#chart').getContext('2d');
const themeBtn = document.querySelector('#theme-btn');



// CHART
new Chart(chart,{
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Step', 'Oct', 'Nov' ],

        datasets: [
            {
                label :'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWith: 2
            },
            {
                label :'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
                borderColor: 'blue',
                borderWith: 2
            }
        ]
    },
    options: {
        reponsive: true
    }
})

// Theme dark/light
themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})


// SHOW/HIDDEN MENU
const menuBtn = document.querySelector('#menu-btn');
const aside = document.querySelector('main aside');
const closeMenu = document.querySelector('#close-btn');

menuBtn.addEventListener('click', () => {
    aside.style.left = '0';
})
closeMenu.addEventListener('click', () => {
    aside.style.left = '-100%';
})