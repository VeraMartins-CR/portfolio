const logotext = "VERA";
const meta = {
    title: "Vera Martins",
    description: "Sou Vera Martins, Conservadora e Restauradora especializada em conservação de pintura, atualmente a trabalhar na Culturgest em Lisboa",
};

const introdata = {
    title: "Sou a Vera Martins",
    animated: {
        first: "Conservo património cultural",
        second: "Restauro pinturas e obras de arte",
        third: "Preservo o nosso legado cultural",
    },
    description: "Licenciada e mestre em Conservação e Restauro pela Faculdade de Ciências e Tecnologia – Universidade Nova de Lisboa (FCT UNL), com especialização em pintura. Desde o início da minha formação académica, desenvolvi estágios e colaborei como freelancer, adquirindo uma sólida experiência em conservação preventiva.",
    your_img_url: require("./assets/images/vera-martins.png"),
};

const dataabout = {
    title: "Sobre a minha jornada profissional",
    aboutme: "Tenho participado em intervenções de restauro de grande relevância, destacando-se as pinturas maneiristas da Sé Catedral de Portalegre (séc. XVI-XVII) e as pinturas murais de Almada Negreiros na Gare Marítima do Conde d'Óbidos (séc. XX). Paralelamente, colaborei em projetos de conservação e gestão de acervos em instituições de referência, como a Parques de Sintra – Monte da Lua (PSML) e a Culturgest – Fundação da Caixa Geral de Depósitos (CGD).",
};

const worktimeline = [{
        jobtitle: "Conservadora Restauradora",
        where: "Culturgest – Fundação Caixa Geral de Depósitos (CGD), Lisboa",
        date: "02/09/2024 – presente",
    },
    {
        jobtitle: "Conservadora Restauradora",
        where: "NOVA CONSERVAÇÃO S.A., Lisboa",
        date: "15/01/2024 – 24/01/2025",
    },
    {
        jobtitle: "Conservadora Restauradora",
        where: "RESTART – Conservação e Restauro, Quinta do Anjo",
        date: "06/10/2021 – 12/01/2024",
    },
    {
        jobtitle: "Conservadora Restauradora",
        where: "MADALENA SERRO & MANUEL COSTA, LDA, Lisboa",
        date: "30/10/2019 – 08/01/2021",
    },
    {
        jobtitle: "Estagiária",
        where: "Parques de Sintra - Monte da Lua (PSML), Sintra",
        date: "19/08/2019 – 30/08/2019",
    },
];

const skills = [{
        name: "Conservação Preventiva",
        value: 95,
    },
    {
        name: "Restauro de Pinturas",
        value: 90,
    },
    {
        name: "Gestão de Acervos",
        value: 85,
    },
    {
        name: "Documentação Técnica",
        value: 80,
    },
    {
        name: "Análise Material",
        value: 85,
    },
    {
        name: "Photoshop e Inkscape",
        value: 75,
    },
];

const services = [{
        title: "Conservação Preventiva",
        description: "Desenvolvimento de embalagens adequadas para o acondicionamento de obras em reserva e reorganização de espaços de reserva museológicos.",
    },
    {
        title: "Restauro de Pinturas",
        description: "Intervenções de conservação e restauro em pinturas realizadas com diferentes técnicas, suportes e períodos históricos.",
    },
    {
        title: "Documentação Técnica",
        description: "Elaboração de condition reports e documentação fotográfica, conforme exigido em processos de incorporação, empréstimo e exposição de obras de arte.",
    },
];

const dataportfolio = [{
        img: require("./assets/images/Apresentação de Jesus no Templo/10 (editada).jpg"),
        description: "Apresentação de Jesus no Templo",
        link: "/project/apresentacao-jesus-templo",
        title: "Apresentação de Jesus no Templo",
    },
    {
        img: require("./assets/images/São João Batista e o Cordeiro/9 (editada).jpg"),
        description: "São João Batista e o Cordeiro",
        link: "/project/sao-joao-batista-cordeiro",
        title: "São João Batista e o Cordeiro",
    },
    {
        img: require("./assets/images/Nossa Senhora com o menino e S. João Batista/14.jpg"),
        description: "Nossa Senhora com o menino e S. João Batista",
        link: "/project/nossa-senhora-menino-joao-batista",
        title: "Nossa Senhora com o menino e S. João Batista",
    },
    {
        img: require("./assets/images/Pedestal com figura de peixe estilizado/1 (editada - preto).jpg"),
        description: "Pedestal com figura de peixe estilizado",
        link: "/project/pedestal-peixe-estilizado",
        title: "Pedestal com figura de peixe estilizado",
    },
    {
        img: require("./assets/images/Jesus Crucificado/1 (editada).jpg"),
        description: "Jesus Cristo Crucificado",
        link: "/project/jesus-cristo-crucificado",
        title: "Jesus Cristo Crucificado",
    },
    {
        img: require("./assets/images/Embalagens de Acondicionamento/0_Preview.JPG"),
        description: "Embalagens de Acondicionamento",
        link: "/project/embalagens-acondicionamento",
        title: "Embalagens de Acondicionamento",
    },
    {
        img: require("./assets/images/Romy Castro, Culturgest/9.JPG"),
        description: "Romy Castro, Culturgest",
        link: "/project/romy-castro-culturgest",
        title: "Romy Castro, Culturgest",
    },
];

const contactConfig = {
    YOUR_EMAIL: "cr.veramartins@gmail.com",
    YOUR_FONE: "(+351) 963 401 072",
    description: "Especialista em conservação e restauro com experiência em pinturas, tapeçarias e gestão de acervos. Licenciada e mestre pela FCT UNL com especialização em pintura.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/vera-martins-138977207/",
    twitter: "https://twitter.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};