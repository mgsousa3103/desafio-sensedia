import React from 'react'
import { Container, Title, WrapperTitle } from './styles'

const Home = () => {
    return (
        <Container>
            <WrapperTitle>
                <Title>Bem-vindo</Title>
                <p>Verifique se seu nome aparece entre os usuários!</p>
            </WrapperTitle>

            <input type="text" />
            <button>Verificar</button>

            <input type="checkbox" name="check" id="check" />
        </Container>
    )
}

export default Home