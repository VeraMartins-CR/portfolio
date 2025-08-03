import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  // Separate projects into two categories
  const conservacaoRestauro = dataportfolio.filter(project => 
    project.link !== "/project/embalagens-acondicionamento"
  );
  
  const conservacaoPreventiva = dataportfolio.filter(project => 
    project.link === "/project/embalagens-acondicionamento"
  );

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Gallery | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Gallery </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Conservação e Restauro Section */}
        <Row className="mb-4">
          <Col lg="12">
            <h3 className="color_sec py-4">Conservação e Restauro</h3>
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {conservacaoRestauro.map((data, i) => {
            return (
              <Link to={data.link} style={{ display: 'block' }} key={i}>
                <div className="po_item">
                  <img src={data.img} alt="" style={{ cursor: 'pointer' }} />
                  <div className="content">
                    <p>{data.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Conservação Preventiva Section */}
        <Row className="mb-4">
          <Col lg="12">
            <h3 className="color_sec py-4">Conservação Preventiva</h3>
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {conservacaoPreventiva.map((data, i) => {
            return (
              <Link to={data.link} style={{ display: 'block' }} key={i}>
                <div className="po_item">
                  <img src={data.img} alt="" style={{ cursor: 'pointer' }} />
                  <div className="content">
                    <p>{data.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
