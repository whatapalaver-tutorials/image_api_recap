import React from 'react';
import { Link } from 'react-router-dom';

const App = (props) => {
  
  return ( 
    <Link to={`${props.match.url}Photos`}>Photos</Link> 
   );
}
 
export default App;