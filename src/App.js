import React from 'react'; 

import Header from './componets/Header';

function App () {
    return (
        <>
            <Header title="Aripage">
              <ol>
                 <li>Homepage</li>
                 <li>Projects</li>    
              </ol>
            </Header>
            <Header title="Project Ari">
              <ul>
                 <li>Homepage</li>
                 <li>Projects</li> 
                 <li>Login</li>    
              </ul>
            </Header>
        </>
    );      
}

export default App;