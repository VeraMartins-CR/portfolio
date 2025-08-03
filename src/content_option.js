const logotext = "VERA";
const meta = {
    title: "Vera Martins",
    description: "I'm Vera Martins, a Conservator and Restorer specializing in painting conservation, currently working at Culturgest in Lisbon",
};

const introdata = {
    title: "I'm Vera Martins",
    animated: {
        first: "I conserve cultural heritage",
        second: "I restore paintings and artworks",
        third: "I preserve our cultural legacy",
    },
    description: "Licenciada e mestre em Conservação e Restauro pela Faculdade de Ciências e Tecnologia – Universidade Nova de Lisboa (FCT UNL), com especialização em pintura. Desde o início da minha formação académica, desenvolvi estágios e colaborei como freelancer, adquirindo uma sólida experiência em conservação preventiva.",
    your_img_url: require("./assets/images/vera-martins.png"),
};

const dataabout = {
    title: "About my professional journey",
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
        description: "Desenvolvimento de estratégias e implementação de medidas para prevenir a deterioração de obras de arte e objetos culturais.",
    },
    {
        title: "Restauro de Pinturas",
        description: "Intervenções de restauro em pinturas a óleo sobre tela e madeira, desde obras do século XVI até arte contemporânea.",
    },
    {
        title: "Gestão de Acervos",
        description: "Organização, catalogação e gestão de coleções museológicas, incluindo embalagens de acondicionamento e reorganização de reservas.",
    },
    {
        title: "Documentação Técnica",
        description: "Elaboração de condition reports, documentação fotográfica e pareceres técnicos para incorporação de obras em acervos.",
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
        description: "Sem título",
        link: "/project/romy-castro-culturgest",
        title: "Sem título",
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