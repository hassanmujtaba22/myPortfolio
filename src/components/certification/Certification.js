import React from 'react';
import "./Certification.modules.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Columns from "react-columns"
import { certificates, achievementSection } from '../../data/data';
import AOS from "aos"
const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        margin: "10px",
    },
    title: {
        textAlign: "center",
        fontSize: "15px",
        color: "gray"
    }
});

var queries = [{
    columns: 1,
    query: 'min-width: 500px'
}, {
    columns: 4,
    query: 'min-width: 1000px'
},
];
var dimensions = [
    { width: 800, height: 1200 },
    { width: 800, height: 600 },
    { width: 800, height: 800 },
    { width: 800, height: 600 },
    { width: 800, height: 1200 },
    { width: 800, height: 600 },
    { width: 800, height: 400 },
    { width: 800, height: 400 },
    { width: 800, height: 400 },
    { width: 800, height: 800 },
];

function Certifications() {
    const classes = useStyles();
    AOS.init();
    return (
        <div data-aos="zoom-in-up" data-aos-duration="3000">
            <div className="main" id="achievements" >
                <div className="achievement-main-div">
                    <div className="achievement-header">
                        <h1 className="heading achievement-heading">{achievementSection.title}</h1>
                    </div>
                    <div className="achievement-cards-div">
                        <Columns queries={queries} dimensions={dimensions}>
                            {Object.entries(certificates).map(([cert, { title, image }]) => (
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <img src={image} alt={title} style={{ height: "100%", width: "100%" }} />
                                        <CardContent>
                                            <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                                                {title}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))}
                        </Columns>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Certifications