import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ab1 from './img/about1.jpg';
import web1 from './img/website1.jpg';

class About extends Component {
    render() {
        return(
            <div className="projects" style={{width: '80%', margin: 'auto'}}>
                <Grid>
                    <Cell col={12} style={{textAlign:'center', margin: 'auto'}}>
                    <figure style={{float: 'center',
                            margin: 'auto',
                            fontStyle:'italic',
                            textAlign:'center'}}>
                        <img className="about-img" src={ab1} height="375px"
                            style={{float: 'center', margin: '0px 0px 15px 0px'}}/>
                        <figcaption margin-top='auto' >(I'm the middle one)</figcaption>
                    </figure>
                    </Cell>
                </Grid>
                <Grid>
                <Cell col={12} style={{textAlign:'left', margin: 'auto'}}>
                    <h1 textAlign='center' ><strong>Hi! I'm DucMinh Ngo.</strong></h1>

                    <p>
                        I'm from Ho Chi Minh City, Vietnam, and I'm currently a sophomore at the
                        <a className="link-alt" href="https://www.engin.umich.edu/" rel="noopener noreferrer" target='blank'> University of Michigan </a>
                         studying Computer Science through the College of Engineering. I attended 
                         <a className="link-alt" href="https://www.thehill.org/" rel="noopener noreferrer" target='blank'> The Hill School </a> 
                         in Pottstown, PA for highschool.
                    </p>
                    <p>
                        I'm interested in machine learning, data analysis, and software development. Outside of school, 
                        I play
                        <a className="link-alt" href="https://csasquash.com/2019/11/13/weekend-recap-big-ten-champs-crowned/" rel="noopener noreferrer" target='blank'> Club Squash </a>                         
                        for the University of Michigan and work for 
                        <a className="link-alt" href="https://cheps.engin.umich.edu/" rel="noopener noreferrer" target='blank'> CHEPS</a>. I also enjoy 
                        reading Technology and Business news, as well as watching sports.
                    </p>

                    <h3><strong> This Website</strong></h3>

                    <p>
                        This website was built using React, with react-mdl library for the interface and react-router-dom for routing. 
                        I developed this on Visual Studio Code.
                    </p>
                    <img className="about-img" src={web1} height="375px"
                            style={{float: 'center', margin: '0px 0px 15px 0px'}}/>

                </Cell>
            </Grid>
            </div>
        )
    }
}

export default About;