import React, { Component } from 'react';
import { Grid, Cell, Button } from "react-mdl";
import chepsPeep from '../img/chepsPpl.jpg';
import cheps from '../img/cheps.jpg';
import cheps1 from '../img/cheps1.jpg';

class CHEPS extends Component {
    render(){
        return(
        <div>
        <div className="projects" style={{width: '80%', margin: 'auto'}}>
            <Grid>
                <Cell col={12} style={{textAlign:'center', margin: 'auto'}}>
                    <h1><strong>Center for Healthcare Engineering & Patient Safety</strong></h1>
                    <h3>Staffing Simulation - C++ | Data Analysis | SQL</h3>
                    <div>
                        <img className="projects-img" style ={{alignItems:"center"}} src={chepsPeep} height='500px' />
                    </div>
                </Cell>
            </Grid>
            <Grid>
                <Cell col={12} style={{textAlign:'left', margin: 'auto'}}>
                    <img src={cheps} height="200px" 
                        style={{float: 'right', margin: '0px 0px 15px 15px'}}/>
                    <p>
                        Since January of 2020, I've worked part-time at CHEPS (Center for Healthcare Engineering & Patient Safety) 
                        in Ann Arbor, Michigan. I was assigned to the Caro Hospital project, in which my tasks included analyzing 
                        hospital staffing data, designing the data structures, and creating a simulation of their staffing needs 
                        using C++.
                    </p>

                    <p>
                        My team consisted of Computer Science, Chemistry, Industrial Engineering, and 
                        Public Health students. We worked closely with doctors and staffs at the Caro hospital as well as the 
                        administrators of the Michigan Department of Health & Human Services (DHHS) to gain insight knowledge 
                        of their issues.
                    </p>

                    <h3><strong> What is CHEPS</strong></h3>

                    <p>
                        CHEPS, started through the Engineering Department at the University of Michigan, looks to bring 
                        engineering solutions to healthcare in Michigan. Our organization consists of University of Michigan professors 
                        and students in both engineering and medical fields to address operational issues outsourced by hospitals 
                        around the state.
                    </p>

                    <h3><strong> Challenges</strong></h3>
                    <img src={cheps1} height="200px" 
                        style={{float: 'right', margin: '0px 0px 15px 15px'}}/>

                    <p>
                        After numerous meetings and visits to the Caro Hospital as well as similar psychiatric hospitals in Michigan, 
                        we discovered that Caro's recent failures in accepting more patients stemmed from them not having the tools 
                        needed to accurately analyze their staffing needs, leading to increasing absenteeism from their staffs.
                    </p>
                    <h3><strong> Solutions</strong></h3>

                    <p>
                        We have decided to create a flexible simulation tool that Caro (and other hospitals) can use to improve 
                        their workflow. Using statistical analysis from past data, we created a model that measures how 
                        different variables and scenarios can affect their staffs' absenteeism.
                    </p>

                </Cell>
                <Button colored ripple style={{fontSize: '20px', margin: 'auto', textDecoration: 'none'}}
                            href="/projects" >BACK</Button>
            </Grid>
        </div>

        </div>
        )
    }
}

export default CHEPS;