// Hero Chart
new Chart(document.getElementById('heroChart').getContext('2d'), {
  type:'bar',
  data:{ labels:['2019','2020','2021','2022','2023'], datasets:[{ label:'Clients', data:[10,25,40,60,85], backgroundColor:'rgba(255,255,255,0.6)'}] },
  options:{ responsive:true, animation:{ duration:3000 }, plugins:{ legend:{ display:false }} }
});

// Featured Project Chart
new Chart(document.getElementById('chart1').getContext('2d'), {
  type:'line',
  data:{ labels:['Jan','Feb','Mar','Apr','May','Jun'], datasets:[{ label:'Revenue ($k)', data:[12,19,10,22,30,24], borderColor:'#17a2b8', tension:0.3 }] },
  options:{ responsive:true }
});

// Accordion
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const c = btn.nextElementSibling;
    c.style.maxHeight = c.style.maxHeight ? null : c.scrollHeight + 'px';
  });
});

// Modal Handling
const modal = document.getElementById('contactModal');
const openModal = () => modal.style.display = 'block';
const closeModal = () => modal.style.display = 'none';
document.querySelector('#contactModal .close').onclick = closeModal;
window.onclick = e => { if (e.target === modal) closeModal(); };
document.getElementById('contactBtn').onclick = openModal;

// Smooth scroll
const scrollToSection = id => document.getElementById(id).scrollIntoView({ behavior:'smooth' });

// Dark Mode
const toggle = document.getElementById('toggleDark');
const dark = localStorage.getItem('darkMode') === 'true';
if (dark) document.body.classList.add('dark');
toggle.onclick = () => {
  const on = document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', on);
};
