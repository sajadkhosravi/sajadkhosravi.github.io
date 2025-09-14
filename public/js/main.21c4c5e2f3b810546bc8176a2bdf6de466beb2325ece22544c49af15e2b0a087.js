(()=>{document.addEventListener("DOMContentLoaded",function(){let c=document.getElementById("nav-toggle"),n=document.getElementById("nav-menu");c&&n&&c.addEventListener("click",function(){n.classList.toggle("active"),c.classList.toggle("active")}),document.querySelectorAll('.nav-link[href^="#"]').forEach(t=>{t.addEventListener("click",function(o){o.preventDefault();let s=this.getAttribute("href"),a=document.querySelector(s);if(a){let e=a.offsetTop-80;window.scrollTo({top:e,behavior:"smooth"}),n&&n.classList.contains("active")&&(n.classList.remove("active"),c.classList.remove("active"))}})});function d(){let t=document.querySelectorAll(".section[id]"),o=document.querySelectorAll('.nav-link[href^="#"]'),s="",a=window.scrollY+150;t.forEach(e=>{let m=e.offsetTop,h=e.offsetHeight,y=m+h;a>=m&&a<y&&(s=e.getAttribute("id"))}),a<200&&(s=t[0]?.getAttribute("id")||""),o.forEach(e=>{e.classList.remove("active"),e.getAttribute("href")===`#${s}`&&e.classList.add("active")})}let r;window.addEventListener("scroll",function(){r&&clearTimeout(r),r=setTimeout(d,10)}),d();let p={threshold:.1,rootMargin:"0px 0px -50px 0px"},g=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&o.target.classList.add("fade-in")})},p);document.querySelectorAll(".section").forEach(t=>{g.observe(t)});let l=document.createElement("style");l.textContent=`
        .section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .section.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-link.active {
            color: var(--text-primary) !important;
        }
        
        .nav-link.active::after {
            width: 100% !important;
        }
        
        .nav-toggle.active .hamburger:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active .hamburger:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active .hamburger:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `,document.head.appendChild(l);let i=document.getElementById("print-button");i&&i.addEventListener("click",function(){window.print()}),document.querySelectorAll(".download-cv").forEach(t=>{t.addEventListener("click",function(o){})});let v=window.matchMedia("print");function f(t){t.matches?i&&(i.style.display="none"):i&&(i.style.display="flex")}v.addListener(f),f(v),document.addEventListener("keydown",function(t){t.key==="Escape"&&n&&n.classList.contains("active")&&(n.classList.remove("active"),c.classList.remove("active")),(t.ctrlKey||t.metaKey)&&t.key==="p"&&(t.preventDefault(),window.print())}),window.addEventListener("load",function(){document.body.classList.add("loaded")});let u=document.createElement("style");u.textContent=`
        body {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
        
        @media (prefers-reduced-motion: reduce) {
            body {
                opacity: 1;
                transition: none;
            }
        }
    `,document.head.appendChild(u)});})();
