
document.addEventListener('DOMContentLoaded',()=>{
  if(localStorage.getItem('loggedIn')!=='true'){window.location='login.html';return;}
  const grid=document.querySelector('.grid');
  const courses=[
    {title:'Business English Coaching',desc:'Potencia tu inglés profesional con sesiones online.',page:'materials.html?course=english'},
    {title:'Comunicación Estratégica Profesional',desc:'Desarrolla habilidades comunicativas de alto impacto.',page:'materials.html?course=comunicacion'},
    {title:'Redacción Avanzada en Inglés',desc:'Perfecciona tu escritura para entornos académicos y corporativos.',page:'materials.html?course=redaccion'}
  ];
  courses.forEach(c=>{
    const div=document.createElement('div');
    div.className='card';
    div.innerHTML=`<h3>${c.title}</h3><p>${c.desc}</p><button class='btn gold' onclick="window.location='${c.page}'">Ver materiales</button>`;
    grid.appendChild(div);
  });
});
