document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.main-nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
  document.querySelectorAll('.nav-group>button').forEach(button=>button.addEventListener('click',()=>{if(window.innerWidth<=900)button.parentElement.classList.toggle('open');}));
  const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
  function setupForm(id,statusId,type){const form=document.getElementById(id),status=document.getElementById(statusId); if(!form||!status)return; form.addEventListener('submit',e=>{e.preventDefault(); if(!form.checkValidity()){form.reportValidity();return;} const data=Object.fromEntries(new FormData(form).entries()); try{localStorage.setItem('surgiciss_'+type+'_draft',JSON.stringify(data));}catch(_){} status.className='notice success'; status.textContent='Your request has been prepared in this browser. Because this is a static HTML deployment, it is not sent to a server. Please contact SURGICISS LTD using the approved contact details to submit the request.'; form.reset(); status.scrollIntoView({behavior:'smooth',block:'center'});});}
  setupForm('quote-form','quote-status','quote');
  setupForm('trial-form','trial-status','trial');
});