
function app() {
    // Profile toggle
    const toggleBtn = document.querySelector('#profile-btn');
    const profileList = document.querySelector('#profile-dropdown');
    
    toggleBtn.addEventListener('click', () => {
        if (profileList.style.display === 'block') {
            profileList.style.display = 'none';
        } else {
            profileList.style.display = 'block';
        }
    });

    // Duration Dropdown
    const durationBtn = document.querySelector('.duration-btn');
    const durationList = document.querySelector('#duration-dropdown');
    
    durationBtn.addEventListener('click', () => {
        if (durationList.style.display === 'block') {
            durationList.style.display = 'none';
        } else {
            durationList.style.display = 'block';
        }
    });


    // Dark Mode

    const sideBarDark = document.querySelector('#sidebar');
    const mainBodyDark = document.querySelector('#main-container');
    const chartDark = document.querySelector('#chart');
    const signalDark = document.querySelectorAll('.card-details');
    const chartTwoDark = document.querySelector('#chart-2');
    const cardsDark = document.querySelector('#cards-2');

    // Buttons
    const lightModeButton = document.querySelector('#light-mode');
    const darkModeButton = document.querySelector('#dark-mode');


    darkModeButton.addEventListener('click', () => {
        applyDarkMode();
    });
    
    lightModeButton.addEventListener('click', () => {
        applyLightMode();
    });
    
    function applyDarkMode() {
        sideBarDark.style.background = '#504C4C';
        mainBodyDark.style.background = '#383636';
        chartDark.style.background = '#504C4C';
        chartTwoDark.style.background = '#504C4C';
        signalDark.forEach(cardDetails => {
            cardDetails.style.background = '#504C4C';
        });
        cardsDark.style.background = '#504C4C';
    }
    
    function applyLightMode() {
        sideBarDark.style.background = '#F7F8FA';
        mainBodyDark.style.background = '#FAFAFA';
        chartDark.style.background = '#FFF';
        chartTwoDark.style.background = '#FFF';
        signalDark.forEach(cardDetails => {
            cardDetails.style.background = '#FFF';
        });
        cardsDark.style.background = '#FFF';
    }
    
}

app();