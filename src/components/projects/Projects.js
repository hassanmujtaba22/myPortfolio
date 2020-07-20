import React from 'react'
import "./Project.modules.css"
import Columns from "react-columns";
import { projects } from "../../data/data"
// import Button from '../button/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    return (
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
                            <Button href={live} size="small" color="primary">
                                Live                  
                            </Button>
                            <Button href={githublink} size="small" color="primary">
                                Sorce Code
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Columns>
        </div>
    )
}

export default Projects

