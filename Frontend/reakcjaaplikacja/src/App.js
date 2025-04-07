import styled from 'styled-components';
import React from 'react';
import {MainLayout} from './styles/layouts';
import Navigation from './Components/Navigation/navigation';
import Navitop from './Components/Navigation/navitop';


function App() {
  const [active,setActive] = React.useState(1);


  return (
    <AppStyled className="App">
      <MainLayout>
        <Navitop/>
        
        

        <main>
        <Navigation  active = {active} setActive={setActive}/>
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: #F5EBEB;
  main {
    marin-top: 10%;

    width: 100%;
    height: 100%;
    background-color: #F5EBEB;
    overflow-y: auto;
    left: 13%;
  }
`;
export default App;
