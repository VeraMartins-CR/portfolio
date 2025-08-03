import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Sobre Mim | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Sobre Mim </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <p>
              Sou licenciada (2015-2028) e mestre (2019-2021) em Conservação e Restauro pela Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa (FCT-UNL), com especialização em pintura.<br/><br/>
              Desde o início da minha formação académica, tenho desenvolvido atividade profissional na área, através de estágios e trabalhos como freelancer, com especial enfoque em conservação preventiva.<br/><br/>
              Após término da minha formação académica, integrei equipas em projetos de restauro de grande relevância, como as pinturas maneiristas da Sé Catedral de Portalegre (séculos XVI-XVII) e as pinturas murais de Almada Negreiros na Gare Marítima do Conde d’Óbidos (século XX).<br/><br/>
              Paralelamente, tenho colaborado em projetos de conservação preventiva e gestão de acervos em instituições de referência, nomeadamente a Parques de Sintra – Monte da Lua (PSML) e a Culturgest – Fundação da Caixa Geral de Depósitos (CGD).
            </p>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Código de Ética</h3>
            <p>
              Todas as intervenções de Conservação e Restauro são realizadas com rigor técnico e metodológico, em conformidade com o Código de Ética da ECCO (European Confederation of Conservator-Restorers’ Organizations). A atuação pauta-se pelos princípios da intervenção mínima, da reversibilidade e da prioridade na mitigação dos processos de degradação dos materiais, assegurando a integridade física, histórica e artística das obras.<br/><br/>
              A seleção de materiais e técnicas obedece a critérios de estabilidade, compatibilidade química e física, e retratabilidade, garantindo que as intervenções respeitem os materiais originais e se mantenham estáveis a longo prazo.<br/><br/>
              Cada tratamento é antecedido por uma análise detalhada da obra e dos seus processos de deterioração, sistematizada num Condition Report. As intervenções de restauro são realizadas em condições técnicas apropriadas, com a utilização de equipamentos especializados, monitorização constante e assegurando o mais elevado padrão de exigência profissional em todas as etapas do processo.
            </p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
