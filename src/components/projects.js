import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import idReader from './img/cardReader.jpg';
import weather from './img/weather.jpg';
import cheps from './img/cheps.jpg';
import angelhack from './img/angelhack.jpg';


class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategoriesI(){
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/*project Simulation*/}
                    <Card shadow={5} style={{minWidth: '500px', margin: 'auto',  borderRadius: "10px"}}>
                        <img src={cheps} height='225px' />
                        <CardText >
                            <h1><strong>Staffing Simulation</strong></h1>
                            <p><strong>C++ | Data Analysis | SQL</strong></p>
                            <p>
                                <li>Worked directly with a local hospital build a staffing simulation tool</li>
                                <li>Analyzed employee and patient data for trends</li>
                            </p>
                        </CardText>

                        <CardActions border>
                            <Button colored ripple style={{textDecoration: 'none'}}
                                href="/cheps">Details</Button>
                        </CardActions>

                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    
                </div>
                
            )
        }
        else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                {/*project OCR*/}
                <Card shadow={5} style={{minWidth: '500px', margin: 'auto',  borderRadius: "10px"}}>
                    <img src={idReader} height='225px' />
                    <CardText >
                        <h1><strong>National ID Card Reader</strong></h1>
                        <p><strong>Python | Pytesseract | Flask</strong></p>
                        <p>
                            <li>Use OCR to detect and extract text from ID cards</li>
                            <li>Implemented OpenCV and Tesseract</li>
                        </p>
                    </CardText>

                    <CardActions border>
                        <Button colored ripple style={{textDecoration: 'none'}}
                            href="https://github.com/dmngo1999/ocrIDs" 
                            rel="noopener noreferrer" target='blank'>
                                GitHub</Button>
                    </CardActions>

                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/*project Weather*/}
                <Card shadow={5} style={{minWidth: '500px', margin: 'auto',  borderRadius: "10px"}}>
                    <img src={weather} height='225px' />
                    <CardText>
                        <h1><strong>Weather Forecast</strong></h1>
                        <p><strong>Keras | Tensorflow</strong></p>
                        <p>
                            <li>RNN-based model for weather prediction</li>
                            <li>Used GRU network and crowd-sourced data</li>
                        </p>
                    </CardText>

                    <CardActions border>
                        <Button colored ripple style={{textDecoration: 'none'}}
                            href="https://github.com/dmngo1999/WeatherForecast" 
                            rel="noopener noreferrer" target='blank'>
                                GitHub</Button>
                    </CardActions>

                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                
            </div>
            )
        }
        else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    {/*project AngelHack*/}
                    <Card shadow={5} style={{minWidth: '500px', margin: 'auto',  borderRadius: "10px"}}>
                        <img src={angelhack} height='225px' />
                        <CardText >
                            <h1><strong>AngelHack Vietnam 2019</strong></h1>
                            <p><strong>NodeJS | HTML/CSS | C++</strong></p>
                            <p>
                                <li>Finalist/Second place in the FE Credit Challenge</li>
                                <li>Created a software customer service solution</li>
                            </p>
                        </CardText>

                        <CardActions border>
                        <Button colored ripple style={{textDecoration: 'none'}}
                            href="https://github.com/dmngo1999/AngelHack2019" 
                            rel="noopener noreferrer" target='blank'>
                                GitHub</Button>
                            <Button colored ripple style={{textDecoration: 'none'}}
                                href="/angelHack">Details</Button>
                        </CardActions>

                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs style ={{background:"white", paddingLeft:"2em"}} activeTab={this.state.activeTab} 
                    onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>C++</Tab>
                    <Tab>Machine Learning - Python</Tab>
                    <Tab>Competitions</Tab>

                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategoriesI()}</div>
                        </Cell>
                    </Grid>

            </div>
        )
    }
}

export default Projects;