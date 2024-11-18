document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById('themeToggle');
    const titleImg = document.getElementById('titleImg');
    const iframe = document.getElementById('iframe');
    let activeFrame = localStorage.getItem("activeFrame") || iframe.src;

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add("dark-mode");
            toggle.src = "sun.png";
            titleImg.src = "title.png";
        } else {
            document.body.classList.remove("dark-mode");
            toggle.src = "moon.png";
            titleImg.src = "title2.png";
        }
    }
    const savedTheme = localStorage.getItem("theme") || 'light';
    applyTheme(savedTheme);
    iframe.src =activeFrame;
    toggle.onclick = function() {
        const newTheme = document.body.classList.toggle("dark-mode") ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        activeFrame = localStorage.getItem("activeFrame");
        iframe.src = activeFrame;     
    };

});

function save(){localStorage.setItem('activeFrame','anime_lists.html');a()}
function home(){localStorage.setItem('activeFrame','home.html');a()}
function all_anime(){localStorage.setItem('activeFrame','all_anime.html');a()}
function season_anime(){localStorage.setItem('activeFrame','season_anime.html');a()}
function episodes_date(){localStorage.setItem('activeFrame','episodes_date.html');a()}

function a(event){
    const suggestionsBox=document.getElementById('suggestions');
    const search_container=document.getElementById('search-container');
    const buttonSearch=document.getElementById('button-search');
    if (event){
    if(event.target.classList.contains("search")){
        event.stopPropagation();
        return;
    }}
    suggestionsBox.style.display="none";
    search_container.style.display='none';
    search_container.style.top='90px';
    buttonSearch.classList.replace("fa-times","fa-search");
    v=true;
}

function show_lists_list(){
    const play_lists_container=document.getElementById('play-lists-container');
    play_lists_container.style.display='flex';
}

function b(event){
    const play_lists_container = document.getElementById('play-lists-container');
    if (event){
        if(event.target.classList.contains("lists")){
            event.stopPropagation();
            return;
        }}
    play_lists_container.style.display='none';
}


function openSidebar() {
    document.getElementById("nav").classList.add('open'); 
    document.getElementById("sideBarContainer").style.display='block';
}

function closeSidebar() {
    document.getElementById("nav").classList.remove('open'); 
    document.getElementById("sideBarContainer").style.display='none';
}

function handleBackButton(event) {
    const sidebar = document.getElementById("nav");
    if (sidebar.style.width !== "0") {
        closeSidebar();
        event.preventDefault();
    }
}
