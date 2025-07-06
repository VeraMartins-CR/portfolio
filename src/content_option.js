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
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
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
        img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        description: "Restauro do tríptico de pintura mural 'Partida de Emigrantes' de Almada Negreiros, Gare Marítima do Conde d'Óbidos",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        description: "Restauro das pinturas maneiristas da Sé Catedral de Portalegre (séc. XVI-XVII)",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        description: "Conservação e gestão de acervo na Culturgest - Fundação Caixa Geral de Depósitos",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        description: "Restauro da tapeçaria 'Pórus ferido diante de Alexandre' do Palácio Nacional da Ajuda",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        description: "Conservação de objetos de iluminação no Palácio Nacional de Queluz",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        description: "Estudo material e técnico da policromia de ataúdes egípcios de coleções portuguesas",
        link: "#",
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