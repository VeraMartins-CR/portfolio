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
              <h3 className="color_sec py-4">Documentação Técnica</h3>
              <p>
                Elaboração de condition reports e documentação fotográfica, conforme exigido em processos
                de incorporação, empréstimo e exposição de obras de arte.
              </p>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
              <h3 className="color_sec py-4">Conservação Preventiva</h3>
              <ul className="service-list">
                <li>Desenvolvimento de embalagens adequadas para o acondicionamento de obras em reserva e
                reorganização de espaços de reserva museológicos.</li>
                <li>Acompanhamento como courier durante o embalamento, transporte, montagem e
                desmontagem de exposições.</li>
                <li>Gestão de inventário e manutenção de documentação de peças,
                prevenindo a dissociação de informações.</li>
              </ul>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
              <h3 className="color_sec py-4">Restauro</h3>
              <ul className="service-list">
                <li>Intervenções de conservação e restauro em pinturas realizadas com diferentes técnicas,
                suportes e períodos históricos (do século XVI à arte contemporânea).</li>
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
              <p>
                Consultoria para artistas em atividade, com orientação sobre materiais e técnicas, visando
                compreender a compatibilidade entre os materiais, o seu comportamento ao longo do tempo
                e a procura por soluções técnicas para os seus desafios atuais.
              </p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
}; 