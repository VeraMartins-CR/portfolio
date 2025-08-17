import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

export const Services = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Serviços | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Serviços</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
              <h3 className="color_sec py-4">Conservação Preventiva</h3>
              <ul className="service-list">
                <li>Elaboração de condition reports e documentação fotográfica de obras de arte, para registo em base de dados, processos de incorporação, empréstimos, exposições e outros fins museológicos.</li>
                <li>Acompanhamento como courier em todas as fases de movimentação de obras: embalamento, transporte, montagem e desmontagem de exposições.</li>
                <li>Desenvolvimento de soluções de acondicionamento para obras em reserva museológica ou para transporte, e reorganização e otimização de espaços de reserva museológicos.</li>
                <li>Gestão de inventário e atualização da documentação das peças, prevenindo a dissociação de informações.</li>
              </ul>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
              <h3 className="color_sec py-4">Conservação e Restauro</h3>
              <ul className="service-list">
                <li>Intervenções de conservação e restauro em esculturas realizadas com diferentes técnicas,
                suportes e períodos históricos (do século XVI à arte contemporânea).</li>
                <li>Disponibilidade de uma rede de contactos especializada em áreas de conservação e restauro
                fora da minha especialização.</li>
              </ul>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
              <h3 className="color_sec py-4">Consultoria</h3>
              <ul className="service-list">
                <li>Orientação para colecionadores sobre as melhores práticas de preservação das suas coleções.</li>
                <li>Apoio a artistas em atividade, oferecendo aconselhamento sobre materiais e técnicas, avaliando a compatibilidade dos elementos utilizados, o seu comportamento ao longo do tempo e propondo soluções técnicas para desafios específicos.</li>
              </ul>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
}; 