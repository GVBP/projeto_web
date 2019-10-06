var fs = require('fs');

var projectsFilePath = "db/projects.json";

var loadFileProjects = function () {
  var fileProjects = fs.readFileSync(projectsFilePath, "UTF-8");
  var projects = JSON.parse(fileProjects);
  return projects;
}

var saveFileProjects = function (projects) {
  var data = JSON.stringify(projects);
  fs.writeFileSync(projectsFilePath, data, 'utf8');
}

var getProjects = function () {
  var projects = loadFileProjects();
  return projects;
}

var saveProject = function (newProject) {
  var projects = loadFileProjects();
  projects.push(newProject);
  saveFileProjects(projects);
}

module.exports = {
  getProjects: getProjects,
  saveProject: saveProject
}