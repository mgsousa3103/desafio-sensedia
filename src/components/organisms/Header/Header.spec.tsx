import { fireEvent, render, screen } from '@testing-library/react';
import type { HeaderProps } from '../../../types/header.types';
import Header from './Header';

vi.mock('../../molecules/ToggleButton/ToggleButton', () => ({
  default: ({
    onToggle,
    toggled,
    label,
    renderOn,
    renderOff,
  }: {
    onToggle: () => void;
    toggled: boolean;
    label: string;
    renderOn: string;
    renderOff: string;
  }) => (
    <button
      type="button"
      data-testid="toggle-button"
      aria-label="toggle-view"
      onClick={onToggle}
    >
      {label}: {toggled ? renderOn : renderOff}
    </button>
  ),
}));

describe('Header Component', () => {
  const defaultProps: HeaderProps = {
    isCardView: false,
    onToggle: vi.fn(),
  };

  it('should render the Title and Subtitle components', () => {
    render(<Header {...defaultProps} />);

    const title = screen.getByText('Olá! Seja bem-vindo(a)!');
    const subtitle = screen.getByText(
      'Verifique se seu nome aparece entre os usuários!',
    );

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it('should render the correct icon when isCardView is false', () => {
    render(<Header {...defaultProps} />);

    const toggleButton = screen.getByTestId('toggle-button');
    expect(toggleButton).toHaveTextContent('Exibir como');
    expect(screen.getByLabelText('toggle-view')).toHaveAttribute(
      'aria-label',
      'toggle-view',
    );
  });

  it('should render the correct icon when isCardView is true', () => {
    const props: HeaderProps = { ...defaultProps, isCardView: true };
    render(<Header {...props} />);

    const toggleButton = screen.getByTestId('toggle-button');
    expect(toggleButton).toHaveTextContent('Exibir como');
    expect(screen.getByLabelText('toggle-view')).toHaveAttribute(
      'aria-label',
      'toggle-view',
    );
  });

  it('should call the onToggle function when the toggle button is clicked', () => {
    render(<Header {...defaultProps} />);

    const toggleButton = screen.getByTestId('toggle-button');
    fireEvent.click(toggleButton);

    expect(defaultProps.onToggle).toHaveBeenCalledTimes(1);
  });
});
