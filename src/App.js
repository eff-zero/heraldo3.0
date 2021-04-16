import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbarr';
import Suscribe from './components/suscribe/Suscribe';
import Collapse from './components/collapse/Collapse';
import Text from './components/noticias/Text';
import Text2 from './components/noticias/Text2';
import Contact from './components/contact/Contact';
import Pager from './components/pager/Pager';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">    
      <Header />
      <Navbar />
      <Suscribe>
          <Collapse />
      </Suscribe>

      <Container className="Noticias">
          <Row>
            <Text 
              offset      = '0'
              span        = '4'
              encabezado  = 'TEATRO AMIRA DE LA ROSA'
              titulo      = 'Distrito dice que está listo para recibir y sanear el MAMB'
              complemento = ' - El limbo de los escenarios culturales de Barranquilla'
            />
            <Col sm={{span:4}}>
              <img 
                src="https://corrupcionaldia.com/wp-content/uploads/2019/11/Jose%CC%81-Palacio-Teatro-Amira-De-la-Rosa-1-1024x576.png" 
                class="img-fluid rounded">
              </img>
            </Col>
            <Text2 tamnanio = '4' />           
          </Row>
      </Container>

      <Container className="Noticias">
          <Row>
            <Col sm={{span:5}}>
              <img 
                src="https://pymstatic.com/4874/conversions/tipos-de-trabajadores-social.jpg" 
                class="img-fluid rounded"> 
              </img>
            </Col>
            <Text 
              offset      = '0'
              span        = '6'
              encabezado  = 'SENA'
              titulo      = 'Trabajo sí hay: Sena anuncia 937 vacantes laborales en el Atlántico'
              complemento = ' - Abren convocatorias para trabajar en el exterior. Si usted desea trabajar en epoca de pandemia por favorngrese al enlace y proceda con el respectivo registro.'
            />                 
          </Row>
        </Container>

        <Container className="Noticias">
            <Row>
              <Col>
                <Row>
                  <Col>
                    <img 
                      src="https://e.rpp-noticias.io/normal/2019/11/24/123212_867984.jpg" 
                      class="img-fluid rounded"> 
                    </img>
                  </Col>
                  <Text 
                    offset      = '0'
                    span        = '5'
                    encabezado  = 'ESMAD'
                    titulo      = 'Enfrentamientos entre estudiantes y el Esmad en Bogotá'
                    complemento = ' - Además se registraron marchas de los promotores del Paro Nacional. '
                  />                 
                </Row>
              </Col>
              <Col>
              <Row>
                  <Col>
                    <img 
                      src="https://caracoltv.brightspotcdn.com/dims4/default/a90ba0e/2147483647/strip/true/crop/1280x851+0+0/resize/1200x798!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F41%2Fa2%2F0c13cebf4a2a834062c2e39d54d0%2Fabogado-wilson-ruiz-nuevo-ministro-de-justicia-foto-presidencia.jpeg" 
                      class="img-fluid rounded"> 
                    </img>
                  </Col>
                  <Text 
                    offset      = '0'
                    span        = '6'
                    encabezado  = 'ALIAS LA SILLA'
                    titulo      = 'Minjusticia autoriza extradición de alias la Silla a Estados Unidos'
                    complemento = ' - Caen ‘Chepe‘ y ‘Mono Dago’, pedidos en extradición por Estados Unidos.'
                  />                 
                </Row>
              </Col>
            </Row>
      </Container>

      <Container className="Noticias">
          <Row>
            <Text
              offset      = '0'
              span        = '6'
              encabezado  = 'COVID 19'
              titulo      = 'En Sucre vacunan contra la covid -19 a la primera reincorporada'
              complemento = ' - El departamento de Sucre sigue siendo pionero en la vacunación contra la covid-19.  No solo tuvo en Sincelejo a la primera persona en recibir el biológico en el país, sino que en Sucre – Sucre está más longeva, con 110 años, en haber sido vacunada, y ahora logra la inmunización para el primer reincorporado de las Farc.'
            />
            <Col>
              <img
                src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/09-11-2020-Pfizer-Vaccine-01.jpg/image1170x530cropped.jpg"
                class="img-fluid rounded"> 
              </img>
            </Col>
          </Row>
      </Container>

      <Contact />
      <Pager />
      <Footer />
    </div>
  );
}

export default App;
