import React from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './components/Description.js';
import Image from './components/Image.js';
import Price from './components/Price.js';
import Name from './components/Name.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css';

  const prenom = "Coder"; 
  const App = () => {
    return (
      <div className="app-container">
      <div className='contenainer'>
      {/* <Description/> 
      <Image/>
      <Price/> 
      <Name/> */}

    <Card style={{ width: '18rem' }} className='centered-card'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Checkpoint_jsxreact</Card.Title>
        <Card.Text>
        
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <div className="message">
          {prenom ? (
            <>
              <p>Bonjour, {prenom} !</p>
              <img src="/images/cool.jpg" alt="Votre image"  className='img'/>
            </>
          ) : (
            <p>Bonjour, là ! (Vous pouvez fournir votre nom en tant que variable au-dessus du composant racine)</p>
          )}
        </div>
  </div>
  </div>
 

    );
  }

 export default App;










  
  



