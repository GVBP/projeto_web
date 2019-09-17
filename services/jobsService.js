
var getJobs = function () {
    var jobs = [
        {
            id: 1,
            name: "Desenvolvedor de Software - Front-End",
            desc: "Formação acadêmica ou cursando na área de Tecnologia da Informação. Experiência em desenvolvimento web com AngularJs. Experiência com os padrões JSON e REST. Inglês avançado",
            min_exp_time: "Desenvolvendo com no mínimo 2 anos de carreira",
            salary_amount: 3000
        },
        {
            id: 2,
            name: "Desenvolvedor de Software - Full Stack",
            desc: "Formação acadêmica na área de Tecnologia da Informação. Experiência em desenvolvimento web com AngularJs + Java. Experiência com os padrões JSON e REST",
            min_exp_time: "Desenvolvendo com no mínimo 3 anos de carreira",
            salary_amount: 5000
        },
        {
            id: 3,
            name: "Analista de Desenvolvimento de Software",
            desc: "Formação acadêmica na área de Tecnologia da Informação. Experiência em desenvolvimento e análise, testes e documentação",
            min_exp_time: "Desenvolvendo com no mínimo 2 anos de carreira",
            salary_amount: 3000
        },
        {
            id: 4,
            name: "Analista de Desenvolvimento de Software",
            desc: "Formação acadêmica na área de Tecnologia da Informação. Experiência em desenvolvimento web com AngularJs + Java. Experiência com os padrões JSON e REST",
            min_exp_time: "Desenvolvendo com no mínimo 3 anos de carreira",
            salary_amount: 4000
        },
        {
            id: 5,
            name: "Desenvolvedor Java júnior",
            desc: "Irá atuar com banco de dados, GIT, Java, APIs WEB e APIs backend",
            min_exp_time: "Sem especificar",
            salary_amount: 1800
        }
    ];

    return jobs;
}

module.exports = {
    getJobs: getJobs
}
