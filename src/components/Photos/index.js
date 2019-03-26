import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      characters: []
    }
  }

  componentDidMount() {
    let URL = 'https://rickandmortyapi.com/api/character/'

    fetch(URL)

      .then(response => response.json())
      .then((responseText) => {
        console.log((responseText.results))
        return responseText.results;
      })
      .then(characters => {
        this.setState({characters})
      })
      .catch(error => error);
  }

  render() { 
    const {classes} = this.props
    return ( 
      <div>
        <h1>Hello from PhotoList</h1>
        {this.state.characters.map(character =>
          <Card className={classes.card} key={character.id}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                R&M
              </Avatar>
            }
            title={character.name}
            subheader={character.species}
          />
          <CardMedia className={classes.media} style={{height: 0, paddingTop: '56.25%'}}
            image={character.image}
            alt={character.name}
            title={character.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {character.type}
            </Typography>
            <Typography component="p">
              {character.gender}
            </Typography>
          </CardContent>
          <Link key={character.id} to={`${this.props.match.url}/${character.id}`}>
            <p>see more</p>
          </Link>
        </Card>
        )}
      </div>
     );
  }
}
 
export default withStyles(styles)(PhotoList);
