import { FaRegAddressCard } from 'react-icons/fa';
import { LuTable2 } from 'react-icons/lu';
import type { HeaderProps } from '../../../types/header.types';
import { SectionColumn, SectionRow } from '../../atoms/Layout.style';
import { Subtitle, Title } from '../../atoms/Typography.style';
import ToggleButton from '../../molecules/ToggleButton/ToggleButton';

const Header = ({ isCardView, onToggle }: HeaderProps) => {
  return (
    <SectionRow>
      <SectionColumn orientation="column">
        <Title>Olá! Seja bem-vindo(a)!</Title>
        <Subtitle>Verifique se seu nome aparece entre os usuários!</Subtitle>
      </SectionColumn>

      <SectionColumn orientation="row" justify="flex-end">
        <ToggleButton
          label="Exibir como"
          toggled={isCardView}
          onToggle={onToggle}
          renderOn={<LuTable2 className="brand-orange" size={26} />}
          renderOff={<FaRegAddressCard className="brand-orange" size={26} />}
        />
      </SectionColumn>
    </SectionRow>
  );
};

export default Header;
