import React, { useState } from 'react';
import { FaRegAddressCard } from 'react-icons/fa';
import { LuTable2 } from 'react-icons/lu';

import useUsers from '../../hooks/useUsers';
import { filterUsers } from '../../utils/utils';

import {
    CardsGrid,
    Container,
    SectionColumn,
    SectionRow,
} from '../../components/atoms/Layout.style';
import { Subtitle, Title } from '../../components/atoms/Typography.style';

import Search from '../../components/Search/Search';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import UserCard from '../../components/UserCard/UserCard';
import UserNotFound from '../../components/UserNotFound/UserNotFound';
import UserTable from '../../components/UserTable/UserTable';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isCardView, setIsCardView] = useState(false);
    const { users, isLoading, error } = useUsers();

    if (isLoading) return <Loading />;
    if (error) return <Error />;

    const filteredUsers = filterUsers(users, searchTerm);

    return (
        <Container>
            {/* Title, Subtitle e Toggle */}
            <SectionRow>
                <SectionColumn orientation="column">
                    <Title>Olá! Seja bem-vindo(a)!</Title>
                    <Subtitle>Verifique se seu nome aparece entre os usuários!</Subtitle>
                </SectionColumn>

                <SectionColumn orientation="row" justify="flex-end">
                    <ToggleButton
                        label="Exibir como"
                        toggled={isCardView}
                        onToggle={() => setIsCardView(!isCardView)}
                        renderOn={<LuTable2 className="brand-orange" size={26} />}
                        renderOff={<FaRegAddressCard className="brand-orange" size={26} />}
                    />
                </SectionColumn>
            </SectionRow>

            {/* Search Input */}
            <SectionRow>
                <SectionColumn>
                    <Search
                        ariaLabel='Pesquisa usuários por nome'
                        text='Pesquisar por nome'
                        term={searchTerm}
                        onSearch={(e) => setSearchTerm(e.target.value)}
                    />
                </SectionColumn>
            </SectionRow>

            {/* Table or Cards View and User Not Found */}
            {!filteredUsers.length ? (
                <SectionRow>
                    <SectionColumn>
                        <UserNotFound />
                    </SectionColumn>
                </SectionRow>
            ) : (
                <SectionRow>
                    <SectionColumn>
                        {!isCardView ? (
                            <UserTable users={filteredUsers} />
                        ) : (
                            <CardsGrid>
                                {filteredUsers.map((user) => (
                                    <UserCard key={user.id} user={user} />
                                ))}
                            </CardsGrid>
                        )}
                    </SectionColumn>
                </SectionRow>
            )}
        </Container>
    );
};

export default Home;
