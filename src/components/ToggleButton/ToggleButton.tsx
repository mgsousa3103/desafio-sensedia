import type React from 'react';
import { Paragraph } from '../atoms/Typography.style';
import { Toggled } from './ToggleButton.style';

type ToggleButtonProps = {
  label: string;
  toggled: boolean;
  onToggle: (toggle: boolean) => void;
  renderOn: React.ReactElement;
  renderOff: React.ReactElement;
};

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
