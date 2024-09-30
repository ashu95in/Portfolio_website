function togglemenu(){
    const menu = document.querySelector('.menu_link');
    const icon = document.querySelector('.hambruger_icon');
    console.log(icon)
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}