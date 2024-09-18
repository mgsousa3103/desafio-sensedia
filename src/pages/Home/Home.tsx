import { useState } from 'react';
import {
    Container,
    SectionRow,
    SectionColumn,
    Title,
    Subtitle,
    Paragraph,
    Toggled,
    SearchInput,
    CardsWrapper,
} from './styles';
import { LuTable2 } from 'react-icons/lu';
import { FaRegAddressCard } from 'react-icons/fa';

import useUsers from '../../hooks/useUsers';
import { filteredUsers } from '../../utils/utils';

import UserTable from '../../components/UserTable/UserTable';
import UserCard from '../../components/UserCard/UserCard';
import UserNotFound from '../../components/UserNotFound/UserNotFound';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isCardView, setIsCardView] = useState(false);
    const { users, isLoading, error } = useUsers();

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error.message}</p>;

    const filtered = filteredUsers(users, searchTerm);

    return (
        <Container>
            {/* Title, Subtitle e Toggle */}
            <SectionRow>
                <SectionColumn orientation="column">
                    <Title>Olá! Seja bem-vindo(a)!</Title>
                    <Subtitle>Verifique se seu nome aparece entre os usuários!</Subtitle>
                </SectionColumn>

                <SectionColumn orientation="row" justify="flex-end">
                    <Paragraph>Exibir como</Paragraph>
                    <Toggled
                        aria-label="Alterna exibição entre tabela e card"
                        isSelected={isCardView}
                        onChange={() => setIsCardView(!isCardView)}
                    >
                        {isCardView ? (
                            <LuTable2 className="brand-orange" size={26} />
                        ) : (
                            <FaRegAddressCard className="brand-orange" size={26} />
                        )}
                    </Toggled>
                </SectionColumn>
            </SectionRow>

            {/* Search Input */}
            <SectionRow>
                <SectionColumn>
                    <SearchInput
                        aria-label="Pesquisa usuários por nome"
                        type="text"
                        placeholder="Pesquisar por nome"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </SectionColumn>
            </SectionRow>

            {!filtered.length ? (
                <SectionRow>
                    <SectionColumn>
                        <UserNotFound />
                    </SectionColumn>
                </SectionRow>
            ) : (
                <SectionRow>
                    <SectionColumn>
                        {isCardView ? (
                            <UserTable users={filtered} />
                        ) : (
                            <CardsWrapper>
                                {filtered.map((user) => (
                                    <UserCard key={user.id} user={user} />
                                ))}
                            </CardsWrapper>
                        )}
                    </SectionColumn>
                </SectionRow>
            )}
        </Container>
    );
};

export default Home;
