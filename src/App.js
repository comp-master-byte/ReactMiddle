import React from 'react'
import { Navigation } from './components/Navigation';
import styled from 'styled-components'
import './styles/main.scss'
import { Landing } from './pages/Landing';
import { Token } from './pages/Token';

const Section = styled.section`
  background-color: #05030E;
`

function App() {
  return (
    <Section>
        <Navigation/>
        <Landing/>
        <Token/>
    </Section>
  );
}

export default App;
