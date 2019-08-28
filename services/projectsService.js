
var getProjects = function() {
    var projects = [
      {
        id: 1,
        name: 'Project 1',
        image: 'post1.jpg',
        subject: 'Meu primeiro post',
        description: 'Meu primeiro post bla blaa sdfa sdfas df asdf asdf asdf asdf'
      },
      {
        id: 2,
        name: 'Project 2',
        image: 'post2.jpg',
        subject: 'Meu segundo post',
        description: 'Meu segundo post bla bla asd f 2'
      },
      {
        id: 3,
        name: 'Sistema automatico de projects',
        image: 'post2.jpg',
        subject: 'Server Side',
        description: 'Esse é o novo sistema do blog da Católica de SC'
      }
    ];
  
    return projects;
  }
  
  module.exports = {
    getProjects: getProjects
  }