const p = window.PROFILE || {};
const $ = (id) => document.getElementById(id);
function setText(id, value){ if($(id) && value) $(id).textContent = value; }
function setHref(id, href){ if($(id) && href) $(id).href = href; }

const parts = (p.name || 'Gaurav Prakash').split(' ');
setText('firstName', parts[0]);
setText('lastName', parts.slice(1).join(' ') || 'Prakash');
setText('headline', p.headline);
setText('summary', p.summary);
setText('cardName', p.name);
setText('cardRole', p.role);
setText('footerName', p.name);
setText('footerHeadline', p.headline);
setHref('linkedInBtn', p.linkedin);
setHref('navLinkedIn', p.linkedin);
setHref('footerLinkedIn', p.linkedin);
if($('footerEmail') && p.email){ $('footerEmail').href = `mailto:${p.email}`; }

function renderImpact(){
  const grid = $('impactGrid'); if(!grid) return;
  grid.innerHTML = (p.impact || []).map(item => `<article class="metric"><strong>${item.value}</strong><p>${item.label}</p></article>`).join('');
}
function renderExpertise(){
  const grid = $('expertiseGrid'); if(grid) grid.innerHTML = (p.expertise || []).map(x => `<div class="chip">${x}</div>`).join('');
  const platforms = $('platformGrid'); if(platforms) platforms.innerHTML = (p.platforms || []).map(x => `<span>${x}</span>`).join('');
}
function renderProjects(){
  const grid = $('projectGrid'); if(!grid) return;
  grid.innerHTML = (p.projects || []).map((x,i) => `<article class="project"><h4>${String(i+1).padStart(2,'0')} · ${x.title}</h4><p>${x.text}</p></article>`).join('');
}
function renderJourney(){
  const grid = $('journeyGrid'); if(!grid) return;
  grid.innerHTML = (p.journey || []).map(x => `<article class="timeline-item"><span>${x.period}</span><h4>${x.title}</h4><p>${x.detail}</p></article>`).join('');
}
function renderLearning(){
  const grid = $('learningGrid'); if(!grid) return;
  grid.innerHTML = (p.learning || []).map(x => `<span class="learn">${x}</span>`).join('');
}
renderImpact(); renderExpertise(); renderProjects(); renderJourney(); renderLearning();

const io = new IntersectionObserver((entries)=>entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); }),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
