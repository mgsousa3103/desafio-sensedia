import { FaRegAddressCard } from 'react-icons/fa';
import { LuTable2 } from 'react-icons/lu';
import ToggleButton from '../ToggleButton/ToggleButton';
import { SectionColumn, SectionRow } from '../atoms/Layout.style';
import { Subtitle, Title } from '../atoms/Typography.style';

const Header = ({
  isCardView,
  onToggle,
}: { isCardView: boolean; onToggle: () => void }) => {
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
