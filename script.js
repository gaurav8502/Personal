try {
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:.12});
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }
  const counters = document.querySelectorAll('[data-count]');
  let counted = false;
  function runCounters(){ if(counted) return; counted = true; counters.forEach(el => { const target = +el.dataset.count; let n = 0; const step = Math.max(1, Math.ceil(target/70)); const tick = () => { n += step; if(n >= target){ el.textContent = target; return;} el.textContent = n; requestAnimationFrame(tick);}; tick();});}
  const metrics = document.querySelector('.metrics');
  if (metrics && 'IntersectionObserver' in window) new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) runCounters(); }), {threshold:.3}).observe(metrics);
  else runCounters();
} catch (e) {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}
