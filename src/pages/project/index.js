import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { dataportfolio, meta } from "../../content_option";

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Find the project data based on the URL parameter
  const project = dataportfolio.find(p => {
    const projectSlug = p.link.split('/').pop();
    return projectSlug === projectId;
  });

  if (!project) {
    return (
      <Container className="About-header">
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Project Not Found</h1>
            <Button onClick={() => navigate('/portfolio')} variant="outline-primary">
              Back to Gallery
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  // Define project images based on project ID
  const getProjectImages = (projectId) => {
    const imageMap = {
      'apresentacao-jesus-templo': [
        require("../../assets/images/Apresentação de Jesus no Templo/1 (editada).jpg"),
        require("../../assets/images/Apresentação de Jesus no Templo/3 (editada).jpg"),
        require("../../assets/images/Apresentação de Jesus no Templo/4 (editada).jpg"),
        require("../../assets/images/Apresentação de Jesus no Templo/5 (editada).jpg"),
        require("../../assets/images/Apresentação de Jesus no Templo/7 (editada).jpg"),
        require("../../assets/images/Apresentação de Jesus no Templo/8.JPG"),
        require("../../assets/images/Apresentação de Jesus no Templo/9.jpg"),
        require("../../assets/images/Apresentação de Jesus no Templo/10 (editada).jpg"),
      ],
      'sao-joao-batista-cordeiro': [
        require("../../assets/images/São João Batista e o Cordeiro/1 (editada).jpg"),
        require("../../assets/images/São João Batista e o Cordeiro/2 (editada).jpg"),
        require("../../assets/images/São João Batista e o Cordeiro/3 (editada).jpg"),
        require("../../assets/images/São João Batista e o Cordeiro/4 (editada).jpg"),
        require("../../assets/images/São João Batista e o Cordeiro/5.jpg"),
        require("../../assets/images/São João Batista e o Cordeiro/6.jpg"),
        require("../../assets/images/São João Batista e o Cordeiro/7.JPG"),
        require("../../assets/images/São João Batista e o Cordeiro/8 (editada).jpg"),
        require("../../assets/images/São João Batista e o Cordeiro/9 (editada).jpg"),
      ],
      'nossa-senhora-menino-joao-batista': [
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/1 (editada).jpg"),
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/2 (editada).jpg"),
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/3 (editada).jpg"),
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/4 (editada).jpg"),
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/5 (editada).jpg"),
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/6 (editada).jpg"),
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/7.jpg"),
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/8.jpg"),
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/9 (editada).jpg"),
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/10 (editada).jpg"),
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/11.jpg"),
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/12.jpg"),
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/13.jpg"),
        require("../../assets/images/Nossa Senhora com o menino e S. João Batista/14.jpg"),
      ],
      'pedestal-peixe-estilizado': [
        require("../../assets/images/Pedestal com figura de peixe estilizado/1 (editada - preto).jpg"),
        require("../../assets/images/Pedestal com figura de peixe estilizado/2 (editada - preto).jpg"),
        require("../../assets/images/Pedestal com figura de peixe estilizado/3 (editada - preto).jpg"),
        require("../../assets/images/Pedestal com figura de peixe estilizado/4 (editada - preto).jpg"),
        require("../../assets/images/Pedestal com figura de peixe estilizado/5 (editada - preto).jpg"),
        require("../../assets/images/Pedestal com figura de peixe estilizado/6 (editada - preto).jpg"),
        require("../../assets/images/Pedestal com figura de peixe estilizado/7 (editada - preto).jpg"),
        require("../../assets/images/Pedestal com figura de peixe estilizado/8 (editada - preto).jpg"),
      ],
      'jesus-cristo-crucificado': [
        require("../../assets/images/Jesus Crucificado/1 (editada).jpg"),
        require("../../assets/images/Jesus Crucificado/2 (editada).jpg"),
        require("../../assets/images/Jesus Crucificado/3 (editada).jpg"),
        require("../../assets/images/Jesus Crucificado/4.jpg"),
        require("../../assets/images/Jesus Crucificado/5.jpg"),
        require("../../assets/images/Jesus Crucificado/6 - Cópia.jpg"),
      ],
      'embalagens-acondicionamento': [
        require("../../assets/images/Embalagens de Acondicionamento/1.jpg"),
        require("../../assets/images/Embalagens de Acondicionamento/2.jpg"),
        require("../../assets/images/Embalagens de Acondicionamento/3.jpg"),
        require("../../assets/images/Embalagens de Acondicionamento/4.jpg"),
        require("../../assets/images/Embalagens de Acondicionamento/5.jpg"),
        require("../../assets/images/Embalagens de Acondicionamento/7.jpg"),
        require("../../assets/images/Embalagens de Acondicionamento/10.jpg"),
        require("../../assets/images/Embalagens de Acondicionamento/11.jpg"),
        require("../../assets/images/Embalagens de Acondicionamento/12.jpg"),
        require("../../assets/images/Embalagens de Acondicionamento/13.jpg"),
        require("../../assets/images/Embalagens de Acondicionamento/14.jpg"),
        require("../../assets/images/Embalagens de Acondicionamento/15.jpg"),
      ],
      'romy-castro-culturgest': [
        require("../../assets/images/Romy Castro, Culturgest/1.JPG"),
        require("../../assets/images/Romy Castro, Culturgest/2.JPG"),
        require("../../assets/images/Romy Castro, Culturgest/3.JPG"),
        require("../../assets/images/Romy Castro, Culturgest/4.JPG"),
        require("../../assets/images/Romy Castro, Culturgest/5.JPG"),
        require("../../assets/images/Romy Castro, Culturgest/6.JPG"),
        require("../../assets/images/Romy Castro, Culturgest/7.JPG"),
        require("../../assets/images/Romy Castro, Culturgest/8.JPG"),
        require("../../assets/images/Romy Castro, Culturgest/9.JPG"),
      ],
    };

    return imageMap[projectId] || [];
  };

  const projectImages = getProjectImages(projectId);

  const handleImageClick = (image, index) => {
    setSelectedImage({ src: image, index });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    if (selectedImage && selectedImage.index > 0) {
      setSelectedImage({
        src: projectImages[selectedImage.index - 1],
        index: selectedImage.index - 1
      });
    }
  };

  const handleNext = () => {
    if (selectedImage && selectedImage.index < projectImages.length - 1) {
      setSelectedImage({
        src: projectImages[selectedImage.index + 1],
        index: selectedImage.index + 1
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  // Add global keyboard event listener when modal is open
  useEffect(() => {
    if (showModal) {
      const handleGlobalKeyPress = (e) => {
        handleKeyPress(e);
      };

      document.addEventListener('keydown', handleGlobalKeyPress);
      
      return () => {
        document.removeEventListener('keydown', handleGlobalKeyPress);
      };
    }
  }, [showModal, selectedImage]);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{project.title} | {meta.title}</title>
          <meta name="description" content={`${project.title} - ${meta.description}`} />
        </Helmet>
        
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <Button 
              onClick={() => navigate('/portfolio')} 
              variant="outline-primary" 
              className="mb-3"
            >
              ← Voltar à Galeria
            </Button>
            <h1 className="display-4 mb-4">{project.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Galeria do Projeto</h3>
            <div className="project-gallery">
              {projectImages.map((image, index) => (
                <div key={index} className="gallery-item mb-4">
                  <img 
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`} 
                    className="img-fluid rounded shadow gallery-image"
                    style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                    onClick={() => handleImageClick(image, index)}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <div className="project-details">
              <h3 className="color_sec py-4">Detalhes do Projeto</h3>
              <div className="row">
                <div className="col-md-6">
                  <h5>Informação Técnica</h5>
                  <ul className="technical-info-list">
                    {projectId === 'apresentacao-jesus-templo' ? (
                      <>
                        <li><strong>Data:</strong> século XVII</li>
                        <li><strong>Técnica:</strong> pintura a óleo sobre madeira</li>
                        <li><strong>Dimensões:</strong> A.: 90,00 x L.: 78,00 x P.: 5,50 (cm)</li>
                        <li><strong>Proprietário:</strong> Sé Catedral de Portalegre</li>
                        <li><strong>Colaboração:</strong> Trabalho em colaboração com Ana Rita Oliveira – Conservação e Restauro</li>
                      </>
                    ) : projectId === 'sao-joao-batista-cordeiro' ? (
                      <>
                        <li><strong>Data:</strong> século XVIII</li>
                        <li><strong>Técnica:</strong> pintura a óleo sobre tela</li>
                        <li><strong>Dimensões:</strong> A.: 80,50 x L.: 61,00 (cm)</li>
                        <li><strong>Proprietário:</strong> Sé Catedral de Portalegre</li>
                        <li><strong>Colaboração:</strong> Trabalho em colaboração com Ana Rita Oliveira – Conservação e Restauro</li>
                      </>
                    ) : projectId === 'nossa-senhora-menino-joao-batista' ? (
                      <>
                        <li><strong>Técnica:</strong> pintura a óleo sobre tela</li>
                        <li><strong>Dimensões:</strong> A.: 83,00 x L.: 69,50 x P.: 6,00 (cm)</li>
                        <li><strong>Proprietário:</strong> Padre Daniel, Sabugal</li>
                        <li><strong>Colaboração:</strong> Trabalho em colaboração com Ana Rita Oliveira – Conservação e Restauro</li>
                      </>
                    ) : projectId === 'pedestal-peixe-estilizado' ? (
                      <>
                        <li><strong>Data:</strong> séculos XX-XXI</li>
                        <li><strong>Técnica:</strong> gesso policromado</li>
                        <li><strong>Proprietário:</strong> privado.</li>
                      </>
                    ) : projectId === 'jesus-cristo-crucificado' ? (
                      <>
                        <li><strong>Data:</strong> Século XVIII</li>
                        <li><strong>Técnica:</strong> Escultura em madeira policromada</li>
                        <li><strong>Autoria:</strong> José de Almeida</li>
                        <li><strong>Proprietário:</strong> Igreja da Venerável Ordem Terceira do Carmo</li>
                      </>
                    ) : projectId === 'embalagens-acondicionamento' ? (
                      <>
                        <li><strong>Título das obras:</strong> Dentes, Antenas e Raízes. O Sol; Noite de Chumbo; The order of today is the disorder of tomorrow; Elemental.</li>
                        <li><strong>Data:</strong> segunda metade do século XX – atualidade</li>
                        <li><strong>Técnica:</strong> diversas</li>
                        <li><strong>Dimensões:</strong> variadas</li>
                        <li><strong>Artistas:</strong> Maria Paz Aires, Sara Graça, Pedro Valdez Cardoso, Alice dos Reis.</li>
                        <li><strong>Proprietário:</strong> Culturgest – Fundação Caixa Geral de Depósitos (CGD).</li>
                      </>
                    ) : projectId === 'romy-castro-culturgest' ? (
                      <>
                        <li><strong>Data:</strong> 1985</li>
                        <li><strong>Técnica:</strong> painel de azulejos sobre placa de acrílico</li>
                        <li><strong>Dimensões:</strong> A.: 120,40 x L.: 75,20 x P.: 1,50 (cm)</li>
                        <li><strong>Artista:</strong> Romy Castro</li>
                        <li><strong>Proprietário:</strong> Culturgest – Fundação Caixa Geral de Depósitos (CGD).</li>
                      </>
                    ) : (
                      <>
                        <li><strong>Nome:</strong> [Nome do Projeto]</li>
                        <li><strong>Data:</strong> [Data do Projeto]</li>
                        <li><strong>Dimensões:</strong> [Dimensões do Projeto]</li>
                        <li><strong>Autor:</strong> [Autor do Projeto]</li>
                      </>
                    )}
                  </ul>
                </div>
                <div className="col-md-6">
                  {projectId !== 'embalagens-acondicionamento' && (
                    <>
                      <h5>Relatório de Estado</h5>
                      <div className="condition-report mb-4">
                        {projectId === 'apresentacao-jesus-templo' ? (
                          <p>Bom estado de conservação. Apresentava uma camada de verniz muito oxidada, sujidade superficial, excrementos de inseto e orifícios de ataque xilófago, assim como algumas lacunas de reduzida dimensão e repintes nas áreas de junção de tábuas.</p>
                        ) : projectId === 'sao-joao-batista-cordeiro' ? (
                          <p>Regular estado de conservação. Existiam falta de tensão e deformações na tela, a presença de sujidade depositada, várias áreas em destacamentos e manchas nos estratos pictóricos, assim como uma camada de verniz oxidada.</p>
                        ) : projectId === 'nossa-senhora-menino-joao-batista' ? (
                          <p>Regular estado de conservação. A tela apresentava falta de tensão e deformações originadas por remendos disfuncionais, os estratos pictóricos possuíam sujidade depositada, lacunas pontuais e rede de microfissuras, a camada de verniz encontrava-se oxidada e existiam várias zonas de repintes.</p>
                        ) : projectId === 'pedestal-peixe-estilizado' ? (
                          <p>Regular estado de conservação. Presença de uma lacuna que perturbava a leitura da peça.</p>
                        ) : projectId === 'jesus-cristo-crucificado' ? (
                          <p>Regular estado de conservação. A policromia apresentava sujidade depositada, zonas pontuais de destacamento e lacunas, uma camada de verniz oxidada e algumas zonas com repintes disfuncionais.</p>
                        ) : projectId === 'embalagens-acondicionamento' ? (
                          <p></p>
                        ) : projectId === 'romy-castro-culturgest' ? (
                          <p>Regular estado de conservação. Azulejo descolado do painel.</p>
                        ) : (
                          <p>[Detalhes do relatório de estado aqui]</p>
                        )}
                      </div>
                    </>
                  )}
                  <h5>Relatório de Intervenção</h5>
                  <div className="conservation-process">
                    {projectId === 'apresentacao-jesus-templo' ? (
                      <p>Foi realizada aspiração superficial, desinfestação, limpeza química da camada de verniz oxidado e repintes disfuncionais, tratamento dos elementos metálicos, colmatação e nivelamento de lacunas de estratos pictóricos e douramento, reintegração cromática e aplicação de uma nova camada de verniz.</p>
                    ) : projectId === 'sao-joao-batista-cordeiro' ? (
                      <p>Foi realizada a desmontagem de elementos, aspiração da sujidade superficial, desinfestação, fixação dos estratos pictóricos, limpeza química, planificação da tela, reengradamento, colmatação e nivelamento de lacunas de estratos pictóricos, reintegração cromática e aplicação de nova camada de verniz, recolocação da moldura previamente higienizada.</p>
                    ) : projectId === 'nossa-senhora-menino-joao-batista' ? (
                      <p>Foi realizada a desmontagem dos elementos, limpeza por via mecânica, fixação de estratos pictóricos e correção de deformações, seguida da limpeza por via química, colmatação de lacunas de suporte (tela), reengradamento da pintura, colmatação e nivelamento de lacunas de estratos pictóricos, reintegração cromática e aplicação de camada de verniz.</p>
                    ) : projectId === 'pedestal-peixe-estilizado' ? (
                      <p>Colmatação e nivelamento da lacuna, reintegração cromática e aplicação pontual de verniz.</p>
                    ) : projectId === 'jesus-cristo-crucificado' ? (
                      <p>Foi realizada a fixação das zonas de policromia em destacamento, a limpeza química geral da peça, colmatação e nivelamento de lacunas de policromia, reintegração cromática e aplicação de nova camada de verniz.</p>
                    ) : projectId === 'embalagens-acondicionamento' ? (
                      <p>Foram realizadas mais de 17 embalagens de acondicionamento para obras de arte contemporânea, com o objetivo de garantir a sua integridade, segurança e preservação a longo prazo. Estas embalagens asseguram proteção contra danos físicos, instabilidades ambientais e agentes biológicos ou químicos, além de facilitarem a organização, catalogação e movimentação segura das obras em espaço de reserva.</p>
                    ) : projectId === 'romy-castro-culturgest' ? (
                      <p>Remoção dos resíduos de adesivo do painel e do tardoz do azulejo, limpeza química, adesão do azulejo ao painel.</p>
                    ) : (
                      <p>[Detalhes do processo de conservação aqui]</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Image Modal */}
        <Modal 
          show={showModal} 
          onHide={handleCloseModal}
          size="xl"
          centered
          backdrop={true}
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {project.title} - Image {selectedImage ? selectedImage.index + 1 : ''} of {projectImages.length}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center p-0">
            {selectedImage && (
              <div className="modal-image-container">
                <img 
                  src={selectedImage.src} 
                  alt={`${project.title} - Image ${selectedImage.index + 1}`}
                  className="modal-image"
                />
                
                {/* Navigation Arrows */}
                {selectedImage.index > 0 && (
                  <button 
                    className="nav-arrow nav-arrow-left"
                    onClick={handlePrevious}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                )}
                
                {selectedImage.index < projectImages.length - 1 && (
                  <button 
                    className="nav-arrow nav-arrow-right"
                    onClick={handleNext}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                )}
              </div>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </HelmetProvider>
  );
}; 