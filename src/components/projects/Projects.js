import React from 'react'
import "./Project.modules.css"
import Columns from "react-columns";
import { projects, socialMediaLink } from "../../data/data"
import Button2 from '../button/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AOS from "aos"
const useStyles = makeStyles({
    root: {
        Width: "100%",
        margin: "10px"

    },
    media: {
        height: 140,
    },
    title: {
        color: "gray"
    },
    button: {
        color: "red"
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
function Projects() {
const classes = useStyles();
AOS.init();    
    return (
        <div data-aos="zoom-in-up" data-aos-duration="3000">
        <div className="main" id="projects">
            <h1 className="project-title">Projects</h1>
            <Columns queries={queries}>
                {Object.entries(projects).map(([project, { title, live, githublink, image }]) => (
                    <Card className={classes.root}>
                        <CardActionArea>
                            <img src={image} alt={title} className="image" />
                            <CardContent>
                                <Typography className={classes.title} variant="h5" component="h2">
                                    {title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button href={live} size="small" className={classes.button}>
                                Live                  
                            </Button>
                            <Button href={githublink} size="small" className={classes.button}>
                                Sorce Code
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Columns>
            <div className="button">
                <Button2 text="More Projects" href={socialMediaLink.github} newTab={true}/>
            </div>
        </div>
        </div>
    )
}

export default Projects

