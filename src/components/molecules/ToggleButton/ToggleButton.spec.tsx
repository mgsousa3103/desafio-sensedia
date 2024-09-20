import { act, render, screen } from '@testing-library/react';
import ToggleButton from './ToggleButton';

describe('ToggleButton', () => {
  it('should render the ToggleButton component ', () => {
    render(
      <ToggleButton
        label="Exibir como"
        toggled={false}
        onToggle={vitest.fn()}
        renderOn={<div>Tabela</div>}
        renderOff={<div>Card</div>}
      />,
    );
    expect(screen.getByText('Exibir como')).toBeInTheDocument();
  });

  it('should render renderOff prop', () => {
    render(
      <ToggleButton
        label="Exibir como"
        toggled={false}
        onToggle={vitest.fn()}
        renderOn={<div>Tabela</div>}
        renderOff={<div>Card</div>}
      />,
    );

    expect(screen.queryByText('Card')).toBeInTheDocument();
    expect(screen.queryByText('Tabela')).not.toBeInTheDocument();
  });

  it('should render renderOn prop', async () => {
    render(
      <ToggleButton
        label="Exibir como"
        toggled={true}
        onToggle={vitest.fn()}
        renderOn={<div>Tabela</div>}
        renderOff={<div>Card</div>}
      />,
    );
    expect(screen.queryByText('Tabela')).toBeInTheDocument();
    expect(screen.queryByText('Card')).not.toBeInTheDocument();
  });

  it('should change from renderOff to renderOn on click', async () => {
    let toggled = false;

    const change = () => {
      toggled = !toggled;
    };

    const button = render(
      <ToggleButton
        label="Exibir como"
        toggled={toggled}
        onToggle={change}
        renderOn={<div>Tabela</div>}
        renderOff={<div>Card</div>}
      />,
    );

    expect(button.queryByText('Card')).toBeInTheDocument();
    expect(button.queryByText('Tabela')).not.toBeInTheDocument();

    act(() => {
      button.getByTestId('toggle-button').click();
      button.rerender(
        <ToggleButton
          label="Exibir como"
          toggled={toggled}
          onToggle={change}
          renderOn={<div>Tabela</div>}
          renderOff={<div>Card</div>}
        />,
      );
    });

    expect(button.queryByText('Tabela')).toBeInTheDocument();
    expect(button.queryByText('Card')).not.toBeInTheDocument();
  });

  it('should change from renderOn to renderOff on click', async () => {
    let toggled = true;

    const change = () => {
      toggled = !toggled;
    };

    const button = render(
      <ToggleButton
        label="Exibir como"
        toggled={toggled}
        onToggle={change}
        renderOn={<div>Tabela</div>}
        renderOff={<div>Card</div>}
      />,
    );

    // Garante que renderizou o renderOff
    expect(button.queryByText('Tabela')).toBeInTheDocument();
    expect(button.queryByText('Card')).not.toBeInTheDocument();

    act(() => {
      button.getByTestId('toggle-button').click();
      button.rerender(
        <ToggleButton
          label="Exibir como"
          toggled={toggled}
          onToggle={change}
          renderOn={<div>Tabela</div>}
          renderOff={<div>Card</div>}
        />,
      );
    });

    expect(button.queryByText('Card')).toBeInTheDocument();
    expect(button.queryByText('Tabela')).not.toBeInTheDocument();
  });
});
