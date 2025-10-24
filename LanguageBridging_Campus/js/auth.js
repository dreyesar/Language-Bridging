
document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('loginForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const email=document.getElementById('email').value;
      const pass=document.getElementById('password').value;
      if(email==='alumno@demo.com' && pass==='1234'){
        localStorage.setItem('loggedIn','true');
        window.location='dashboard.html';
      } else { alert('Credenciales inválidas. Usa alumno@demo.com / 1234'); }
    });
  }
  const logoutBtn=document.querySelector('.logout');
  if(logoutBtn){
    logoutBtn.addEventListener('click',()=>{
      localStorage.removeItem('loggedIn');
      window.location='login.html';
    });
  }
});
