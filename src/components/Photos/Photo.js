import React, {Component} from 'react';
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      character: {}
    }
  }

  componentDidMount() {
    console.log(this.props)
    const photoId = this.props.match.params.id
    let URL = `https://rickandmortyapi.com/api/character/${photoId}`

    fetch(URL)

      .then(response => response.json())
      .then(character => {
        console.log(character)
        this.setState({character})
      })
      .catch(error => error);
  }

  render() { 
    const {classes} = this.props
    return ( 
      <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                R&M
              </Avatar>
            }
            title={this.state.character.name}
            subheader={this.state.character.species}
          />
          <CardMedia className={classes.media} style={{height: 0, paddingTop: '56.25%'}}
            image={this.state.character.image}
            // alt={this.state.character.name}
            // title={this.state.character.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.character.type}
            </Typography>
            <Typography component="p">
              {this.state.character.gender}
            </Typography>
          </CardContent>
        </Card>
     );
  }
}
 
export default withStyles(styles)(Photo);

