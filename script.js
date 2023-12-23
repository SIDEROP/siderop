
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

})



// localStorage

let localStor = (pos,dataName,default_)=>{

    document.getElementById(pos).addEventListener('input',()=>{
        let noteData = document.getElementById(pos).innerHTML
        localStorage.setItem(dataName,noteData ?? default_)
    })
    document.getElementById(pos).innerHTML = localStorage.getItem(dataName)
}

localStor('edit_','text',"I Love Coding")
localStor('note_',"noteData","Note Something Down...")
localStor('status','status',"Full Stack Developer")
localStor("name","name","SIDEROP")



// uplodeImg
let importImg = document.querySelector("#edit_pic input")
document.querySelector("#edit_pic input").addEventListener('change',()=>{
    document.querySelector("#profile img").src = URL.createObjectURL(importImg.files[0])
})
















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