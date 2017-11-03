var header = new Vue({
  el: '#navbarHeader',
  data: {
    name:'Felipe Moctezuma',
    descripcion:'Soy desarrollador de software desde el 2014 con experiencia en desarrollo front-end y back-end, aqui encontraras algunos de mis proyectos.',
    contacto:[
      {
        icon:'fa-envelope-o',
        href:'mailto:luisfe.moctezuma@gmail.com',
        texto:'Correo'

      },
      {
        icon:'fa-github',
        href:'https://github.com/femoru',
        texto:'Github'
      },
      {
        icon:'fa-skype',
        href:'skype:rhadhy?chat',
        texto:'Skype'
      },
    ],

    message: 'Hello Vue!'
  }
});

var links = new Vue({
  el:'#navbarLinks',
  data: {
    tabs:['Lenguajes','Frameworks','Techs'],
  }
});
