
document.addEventListener('DOMContentLoaded',()=>{
  if(localStorage.getItem('loggedIn')!=='true'){window.location='login.html';return;}
  const params=new URLSearchParams(window.location.search);
  const course=params.get('course');
  const titleEl=document.getElementById('courseTitle');
  const list=document.getElementById('materialsList');
  const courses={
    english:{name:'Business English Coaching',files:[
      {name:'Guía de vocabulario corporativo (PDF)',url:'#'},
      {name:'Ejercicios de listening - Semana 1',url:'#'},
      {name:'Material de clase - Presentaciones efectivas (PDF)',url:'#'}
    ]},
    comunicacion:{name:'Comunicación Estratégica Profesional',files:[
      {name:'Manual de estilo comunicativo (PDF)',url:'#'},
      {name:'Checklist de presentaciones',url:'#'},
      {name:'Plantilla para speech profesional',url:'#'}
    ]},
    redaccion:{name:'Redacción Avanzada en Inglés',files:[
      {name:'Guía de estructuras académicas (PDF)',url:'#'},
      {name:'Ejercicios de coherencia y cohesión',url:'#'},
      {name:'Ejemplo de redacción de informes',url:'#'}
    ]}
  };
  const data=courses[course]||{name:'Curso',files:[]};
  titleEl.textContent=data.name;
  data.files.forEach(f=>{
    const a=document.createElement('a');
    a.href=f.url;a.textContent=f.name;a.className='file-link';list.appendChild(a);
  });
});
