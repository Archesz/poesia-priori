import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ThemeToggle } from '../components/ThemeToggle';
import { frases } from '../data/frases';
import '../styles/global.scss';
import logo from '../assets/icon.png'

const HomeContainer = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: -10px;
  margin-bottom: 2rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.875rem;
  color: ${props => props.theme.textMuted};
`;

function Home({ toggleTheme }) {
    const [frase, setFrase] = useState({ texto: "", autor: "" });
    const [usedIndexes, setUsedIndexes] = useState([]);

    const gerarFrase = () => {
        let availableIndexes = frases.map((_, index) => index).filter(index => !usedIndexes.includes(index));

        if (availableIndexes.length === 0) {
            setUsedIndexes([]);
            availableIndexes = frases.map((_, index) => index);
        }

        const randomIndex = Math.floor(Math.random() * availableIndexes.length);
        const selectedIndex = availableIndexes[randomIndex];

        setFrase(frases[selectedIndex]);
        setUsedIndexes([...usedIndexes, selectedIndex]);
    };

    useEffect(() => {
        gerarFrase();
    }, []);

    return (
        <HomeContainer>
            
            <img src={logo} className='logo' alt="" srcset="" />

            <Title>Amor a Priori</Title>

            <span className='subtitle'>Mergulhe em um universo de sentimentos e palavras que tocam a alma.</span>

            <span className='descript'>Siga <a href="https://www.instagram.com/poesiaapriori/" className='link'>@Poesiaapriori</a> e descubra um novo mundo.</span>

            <ContentContainer>
                <Button onClick={gerarFrase} className='btn'>Me dê uma citação</Button>
                {frase.texto && (
                    <Card>
                        <p>{frase.texto}</p>
                        <p>- {frase.autor}</p>
                    </Card>
                )}
            </ContentContainer>
            <Footer>
                © 2024 Amor a Priori. Todos os direitos reservados. Desenvolvido por @Archs.
            </Footer>
        </HomeContainer>
    );
}

export default Home;