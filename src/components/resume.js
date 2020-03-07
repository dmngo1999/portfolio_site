import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div className="resume">
                <Grid align='center'>
                    <Cell align='center'>
                    <iframe align='center' src="https://docs.google.com/document/d/1Z8uDRfI6nNR7ksgMjlLNSkdJwaZ29gJcrjnAc-nYs9k/preview" width="960" height="600"></iframe>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;