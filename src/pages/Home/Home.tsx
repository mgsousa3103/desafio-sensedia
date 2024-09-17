import { useState } from 'react'
import {
    StyledContainer,
    StyledSectionWrapper,
    StyledTitle,
    StyledText,
    StyledFormWrapper
} from './styles'
import { Input, Switch, ToggleButton } from 'react-aria-components'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import UserTable from '../../components/UserTable/UserTable'

const fetchUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
}

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [isCardView, setIsCardView] = useState(false)

    const { data, isLoading, error } = useQuery({ queryKey: ['users'], queryFn: fetchUsers })
    if (isLoading) return <p>Carregando...</p>
    if (error) return <p>Erro: {error.message}</p>

    const filteredUsers = data.filter((user: any) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <StyledContainer>
            <StyledSectionWrapper>
                <StyledTitle>Bem-vindo</StyledTitle>
                <StyledText>Verifique se seu nome aparece entre os usuários!</StyledText>
            </StyledSectionWrapper>

            <StyledSectionWrapper>
                <StyledFormWrapper>
                    <Input type='text' placeholder='Pesquisar por nome' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <ToggleButton isSelected={isCardView} onChange={() => setIsCardView(!isCardView)}>
                        {isCardView ? 'Card View' : 'Table View'}
                    </ToggleButton>
                </StyledFormWrapper>
            </StyledSectionWrapper>

            <StyledSectionWrapper>
                <StyledTitle>Lista de usuários</StyledTitle>
                {isCardView ? (
                    <UserTable users={filteredUsers} />
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                        {filteredUsers.map((user: any) => (
                            <div key={user.id} style={{
                                border: '1px solid #ced4da',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                                textAlign: 'center'
                            }}>
                                <h2>{user.name}</h2>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Telefone:</strong> {user.phone}</p>
                            </div>
                        ))}
                    </div>
                )}
            </StyledSectionWrapper>
        </StyledContainer>
    )
}

export default Home