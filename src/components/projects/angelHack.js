import React, { Component } from 'react';
import { Grid, Cell, Button } from "react-mdl";
import angelhack from '../img/angelhack.jpg';
import ah1 from '../img/ahack1.jpg';
import ah2 from '../img/ahack2.jpg';

class AngelHack extends Component {
    render(){
        return(
        <div>
        <div className="projects" style={{width: '80%', margin: 'auto'}}>
            <Grid>
                <Cell col={12} style={{textAlign:'center', margin: 'auto'}}>
                    <h1><strong>AngelHack 2019</strong></h1>
                    <h3>2nd Place - NodeJS | HTML/CSS | C++</h3>
                    <div>
                        <img className="projects-img" style ={{alignItems:"center"}} src={angelhack} height='500px' />
                    </div>
                </Cell>
            </Grid>
            <Grid>
                <Cell col={12} style={{textAlign:'left', margin: 'auto'}}>
                    <img src={ah1} height="190px" 
                        style={{float: 'right', margin: '0px 0px 15px 15px'}}/>
                    <p>
                        During the summer of 2019, three friends and I came together to participate in the 
                        AngelHack Hackathon hosted at Fulbright University with over 50 teams. There were various challenges 
                        hosted by local companies as well as IBM and Amazon. Our team participated in the FE Credit challenge 
                        (lending company), where we were asked to improve their customers' interactions on their website and social media. We were given access 
                        to their customer interactions database.
                    </p>

                    <h3><strong> Challenges</strong></h3>
                    <figure style={{float: 'right',
                            margin: 'auto',
                            fontStyle:'italic',
                            textAlign:'center'}}>
                        <img className="projects-img1" src={ah2} height="450px"
                            style={{float: 'right', marginVertical: '0px 0px 0px 0px'}}/>
                        <figcaption margin-top='auto' >(Our functionality on their website)</figcaption>
                    </figure>


                    <p>
                        After analyzing the database that was given to us as well as the comments on their social media pages, 
                        we identified the main problem to be poor personal service on their website. Customers are forced to either 
                        contact them through physical channels or ask through comments on social media about rates and products. 
                    </p>
                    <h3><strong> Solutions</strong></h3>

                    <p>
                        To improve their customers' experience, we decided to add extra 
                        functionalities to their website. We created an algorithm that takes in
                        their customers' income, family status, and desired product as inputs, and suggests multiple different product options 
                        along with a payment plan. As we observed a direct correlation between the number of clicks and customer drop off, adding this 
                        functionality to their website keeps their customers on their website as opposed to them doing their own 
                        research.
                    </p>


                </Cell>
                <Button colored ripple style={{fontSize: '20px', margin: 'auto', textDecoration: 'none'}}
                            href="/projects" >BACK</Button>
                <Button colored ripple style={{fontSize: '20px', margin: 'auto', textDecoration: 'none'}}
                            href="https://github.com/dmngo1999/AngelHack2019" 
                            rel="noopener noreferrer" target='blank'>
                                GitHub</Button>
            </Grid>
        </div>

        </div>
        )
    }
}

export default AngelHack;