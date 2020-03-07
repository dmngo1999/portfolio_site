import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header transparent className="header-color" 
              title={<Link style={{textDecoration:'none', color:"white", fontSize:"18px"}} 
                      to=""><strong>DucMinh Ngo</strong></Link>} scroll>

            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Header>
        <Drawer title="DucMinh Ngo">
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
        <div className="page-content" />
        <Main/>

        <Footer className="footer" size="mega" style={{margin:"auto", position:"relative"}}>
        <FooterSection type="middle">
          <FooterLinkList>
            <div style={{textAlign:'center'}}>
              <p><strong>Find Me Here</strong></p>
              <h4><strong>dmngo@umich.edu</strong></h4>
            </div>
            <div style={{textAlign:'center'}} className="footer-social-links">
                  {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ducminh-ngo-709169165/" 
                rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
              </a>
              {/* Github */}
              <a href="https://github.com/dmngo1999" 
                rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true"/>
              </a>
            </div>
          </FooterLinkList>
        </FooterSection>
      </Footer>

        </Content>
    </Layout>
  </div>
  );
}

export default App;
