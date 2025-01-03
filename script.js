
// side nav
let close = document.getElementById("close").addEventListener('click',()=>{
    document.getElementById("profile").classList.toggle(`active`)
    // document.getElementById("close").style.right = "20px"
})


// Search google
document.getElementById('ser').addEventListener('click',()=>{
    let text = document.getElementById('text').value
    var url='http://www.google.com/search?q='+ text;
    if (text)  window.location.href=url;
})

window.addEventListener('keypress',e=>{
    if (e.key == 'Enter') {
        let text = document.getElementById('text').value
        var url='http://www.google.com/search?q='+ text;
        if (text)  window.location.href=url;
    } else {
        console.log("no")
    }
})





// pointer
window.addEventListener('mousemove',(e)=>{
    document.getElementById("pointer").style.left = `${e.x - 14}px`
    document.getElementById("pointer").style.top = `${e.y -10}px`

    document.getElementById("big_pointer").style.left = `${e.x - 90}px`
    document.getElementById("big_pointer").style.top = `${e.y - 90}px`

    document.getElementById("big_pointer3d").style.left = `${e.x - 500}px`
    document.getElementById("big_pointer3d").style.top = `${e.y - 500}px`

})


// localStorage

let localStor = (pos, dataName, default_) => {
    const element = document.getElementById(pos);
    if (!element) return;

    // Get saved data from localStorage
    const savedData = localStorage.getItem(dataName);
    if (!savedData) {
        // If no saved data, set default value
        localStorage.setItem(dataName, default_);
        element.innerHTML = default_;
    } else {
        // Load saved data
        element.innerHTML = savedData;
    }

    // Update localStorage on input
    element.addEventListener('input', () => {
        const inputValue = element.innerHTML;
        localStorage.setItem(dataName, inputValue);
    });

    // Handle Enter key
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            element.blur();
        }
    });
}

// Default values
const defaults = {
    edit_: "I Love Coding",
    note_: "Note Something Down...",
    status: "Full Stack Developer", 
    name: "SIDEROP"
};

// Initialize all elements
Object.entries(defaults).forEach(([id, defaultValue]) => {
    localStor(id, id, defaultValue);
});


// uploadImg
let importImg = document.querySelector("#edit_pic input")
document.querySelector("#edit_pic input").addEventListener('change', () => {
    const file = importImg.files[0];
    const imgUrl = URL.createObjectURL(file);
    document.querySelector("#profile img").src = imgUrl;
    localStorage.setItem('profileImage', imgUrl);
})

// Load saved image on page load
const savedImage = localStorage.getItem('profileImage');
if (savedImage) {
    document.querySelector("#profile img").src = savedImage;
}













let tool=()=>{

        let linkedin = document.getElementById("social").querySelector(".bxl-linkedin")
        linkedin.addEventListener('mouseleave',()=>{
        document.querySelector(".Linkedin").style.opacity = "0"
        })
        linkedin.addEventListener('mouseover',()=>{
        document.querySelector(".Linkedin").style.opacity = "1"
        })


        let github = document.getElementById("social").querySelector(".bxl-github")
        github.addEventListener('mouseleave',()=>{
        document.querySelector(".Github").style.opacity = "0"
        })
        github.addEventListener('mouseover',()=>{
        document.querySelector(".Github").style.opacity = "1"
        })



        let instagram = document.getElementById("social").querySelector(".bxl-instagram")
        instagram.addEventListener('mouseleave',()=>{
            document.querySelector(".Instagram").style.opacity = "0"
        })
        instagram.addEventListener('mouseover',()=>{
            document.querySelector(".Instagram").style.opacity = "1"
        })
        


        let facebook = document.getElementById("social").querySelector("span .bxl-twitter")
        facebook.addEventListener('mouseleave',()=>{
        document.querySelector(".Twitter").style.opacity = "0"
        })
        facebook.addEventListener('mouseover',()=>{
        document.querySelector(".Twitter").style.opacity = "1"
        })
}

tool()