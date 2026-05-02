function togglemenu(){
    const menu = document.querySelector('.menu_link');
    const icon = document.querySelector('.hambruger_icon');
    // console.log(icon)
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const music = document.getElementById("bgMusic");

function startMusic() {
    music.play();
    document.removeEventListener("click", startMusic);
}

// play when user clicks anywhere
document.addEventListener("click", startMusic);


// let current = 1;

// function changeBackground(imageUrl) {
//     const bg1 = document.getElementById('bg1');
//     const bg2 = document.getElementById('bg2');

//     const active = current === 1 ? bg1 : bg2;
//     const next = current === 1 ? bg2 : bg1;

//     // Set new image on hidden layer
//     next.style.backgroundImage = `url(${imageUrl})`;

//     // Fade transition
//     next.classList.remove('hidden');
//     active.classList.add('hidden');

//     // Swap layers
//     current = current === 1 ? 2 : 1;
// }


// // changeBackground('https://imgs.search.brave.com/OnlEg3TMJDC-hnWFpCBaeRTA0IH-BAL1jFFIqcgUXog/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC9DZUF5RGtY/LmpwZw');

// setTimeout(() => {
//     changeBackground('https://imgs.search.brave.com/OnlEg3TMJDC-hnWFpCBaeRTA0IH-BAL1jFFIqcgUXog/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC9DZUF5RGtY/LmpwZw');
// }, 500);


const images = [
    // 'https://wallpapercave.com/wp/mVcZwOP.jpg',
    // 'https://wallpapercave.com/wp/wp2931897.jpg',
    'https://wallpapercave.com/wp/wp2752789.jpg',
'https://wallpapercave.com/wp/wp1902093.jpg',
'https://wallpapercave.com/wp/wp4080969.jpg',
'https://imgs.search.brave.com/kmB6m2kFX08of0B8w9Mfm_vdmoC4pnv4cpzIjgBoVPM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYmVh/dXRpZnVsLWZ1bmVy/YWwtY2xvdWRzLXY5/N2NkcW1qYzlnMTh6/ZW8uanBn',
    'https://imgs.search.brave.com/Co_Nx4-yCsZwwU25blbeKoYeFikD40Juty3RZdYVRUs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM4LmFscGhhY29k/ZXJzLmNvbS8xMDQv/dGh1bWJiaWctMTA0/NjYxOC53ZWJw'
];

let current = 0;
let activeLayer = 1;

function changeBackground() {
    const bg1 = document.getElementById('bg1');
    const bg2 = document.getElementById('bg2');

    const active = activeLayer === 1 ? bg1 : bg2;
    const next = activeLayer === 1 ? bg2 : bg1;

    // Move to next image
    current = (current + 1) % images.length;

    // Set next image
    next.style.backgroundImage = `url(${images[current]})`;

    // Fade effect
    next.classList.remove('hidden');
    active.classList.add('hidden');

    // Swap layers
    activeLayer = activeLayer === 1 ? 2 : 1;
}

// Initial background
document.getElementById('bg1').style.backgroundImage = `url(${images[0]})`;

// Change every 3 seconds
setInterval(changeBackground, 5000);