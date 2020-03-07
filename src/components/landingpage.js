import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import myAva from "./img/dm.jpg";

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={myAva}
                            alt="avatar"
                            className="avatar-img"
                            />
                        <div className="banner-text">
                            <h1>DucMinh Ngo</h1>

                            <hr/>

                            <p>C++/C | Python | Java | SQL | REACT</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/ducminh-ngo-709169165/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/dmngo1999" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                
                                {/* Twitter */}
                                <a href="https://twitter.com/duckmeatdm" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;