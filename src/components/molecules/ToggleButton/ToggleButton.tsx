import type { ToggleButtonProps } from '../../../types/toggle-button.types';
import { Toggled } from '../../atoms/Buttons.style';
import { Paragraph } from '../../atoms/Typography.style';

const ToggleButton = ({
  label,
  toggled,
  onToggle,
  renderOn,
  renderOff,
}: ToggleButtonProps) => {
  return (
    <>
      <Paragraph>{label}</Paragraph>
      <Toggled
        data-testid="toggle-button"
        aria-label="Alterna exibição entre tabela e card"
        isSelected={toggled}
        onChange={() => onToggle(!toggled)}
      >
        {toggled ? renderOn : renderOff}
      </Toggled>
    </>
  );
};

export default ToggleButton;
