document.addEventListener("DOMContentLoaded",()=> {
  const scrollEls = document.querySelectorAll(".scroll-effect");
  const inView = el => el.getBoundingClientRect().top <= window.innerHeight - 100;
  const showEl = el => el.classList.add("visible");
  const onScroll = ()=>{
    scrollEls.forEach(el=>{ if(inView(el)) showEl(el); });
  };
  window.addEventListener("scroll", onScroll);
});

function showPage(pageId, btn) {
  document.querySelectorAll(".tab-content").forEach(el=>el.style.display='none');
  document.querySelectorAll(".tablink").forEach(b=>b.classList.remove('active'));
  document.getElementById(pageId).style.display = 'block';
  btn.classList.add('active');
}

document.getElementById('subForm').addEventListener('submit', e=>{
  e.preventDefault();
  document.getElementById('subMessage').textContent = "Thanks for subscribing!";
});
