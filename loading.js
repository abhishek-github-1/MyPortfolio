
window.addEventListener('scroll', function(){
    var offsety = window.scrollY;
    if(offsety > 50){
        document.getElementById('header').classList.add('scrolled');
    }else{
        document.getElementById('header').classList.remove('scrolled');
    }
    console.log()
    if(offsety > 450){
       document.querySelector(".profile-img img").classList.add("scroll-img1");
       if(offsety > 800){
        console.log(offsety);
        document.querySelector(".profile-img img").classList.add("scroll-img2");
        if(offsety > 1400){
            document.querySelector(".profile-img img").classList.add("scroll-img3");
        }else{
            document.querySelector(".profile-img img").classList.remove("scroll-img3");
        }
       }else{
        document.querySelector(".profile-img img").classList.remove("scroll-img2");
       }
    }else{
        document.querySelector(".profile-img img").classList.remove("scroll-img1");
        
    }
})