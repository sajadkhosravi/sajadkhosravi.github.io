(()=>{document.addEventListener("DOMContentLoaded",function(){let s=document.getElementById("nav-toggle"),o=document.getElementById("nav-menu");s&&o&&s.addEventListener("click",function(){o.classList.toggle("active"),s.classList.toggle("active")}),document.querySelectorAll('.nav-link[href^="#"]').forEach(t=>{t.addEventListener("click",function(e){e.preventDefault();let i=this.getAttribute("href"),a=document.querySelector(i);if(a){let n=a.offsetTop-80;window.scrollTo({top:n,behavior:"smooth"}),o&&o.classList.contains("active")&&(o.classList.remove("active"),s.classList.remove("active"))}})});function l(){let t=document.querySelectorAll(".section[id]"),e=document.querySelectorAll('.nav-link[href^="#"]'),i="",a=window.scrollY+150;t.forEach(n=>{let p=n.offsetTop,g=n.offsetHeight,L=p+g;a>=p&&a<L&&(i=n.getAttribute("id"))}),a<200&&(i=t[0]?.getAttribute("id")||""),e.forEach(n=>{n.classList.remove("active"),n.getAttribute("href")===`#${i}`&&n.classList.add("active")})}let d;window.addEventListener("scroll",function(){d&&clearTimeout(d),d=setTimeout(l,10)}),l();let r=document.querySelector(".name");if(r){let t=r.textContent;r.textContent="";let e=0,i=()=>{e<t.length&&(r.textContent+=t.charAt(e),e++,setTimeout(i,100))};setTimeout(i,500)}let h={threshold:.1,rootMargin:"0px 0px -50px 0px"},y=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add("fade-in")})},h);document.querySelectorAll(".section").forEach(t=>{y.observe(t)});let u=document.createElement("style");u.textContent=`
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
    `,document.head.appendChild(u);let c=document.getElementById("print-button");c&&c.addEventListener("click",function(){window.print()}),document.querySelectorAll(".download-cv").forEach(t=>{t.addEventListener("click",function(e){})});let f=window.matchMedia("print");function m(t){t.matches?c&&(c.style.display="none"):c&&(c.style.display="flex")}f.addListener(m),m(f),document.addEventListener("keydown",function(t){t.key==="Escape"&&o&&o.classList.contains("active")&&(o.classList.remove("active"),s.classList.remove("active")),(t.ctrlKey||t.metaKey)&&t.key==="p"&&(t.preventDefault(),window.print())}),window.addEventListener("load",function(){document.body.classList.add("loaded")});let v=document.createElement("style");v.textContent=`
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
    `,document.head.appendChild(v)});})();
