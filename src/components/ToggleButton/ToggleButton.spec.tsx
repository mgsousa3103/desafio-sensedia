{
  /* 
    Split em outro componente e verificar se:
    1. Renderizou o texto "Exibir como"

    2. Renderizou com toggled false e exibiu o icone correto
    3. Renderizou com isCardView true e exibiu o icone correto

    4. IsCardView eh false e clicou no botao de toggle e exibiu o icone correto
    5. IsCardView eh true e clicou no botao de toggle e exibiu o icone correto
*/
}
import { act, render, screen } from '@testing-library/react';
import ToggleButton from './ToggleButton';

describe('ToggleButton', () => {
  it('should render default', () => {
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

  it('should render renderOff', () => {
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

  it('should render renderOn', async () => {
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

    const xulambs = () => {
      toggled = !toggled;
    };

    const x = render(
      <ToggleButton
        label="Exibir como"
        toggled={toggled}
        onToggle={xulambs}
        renderOn={<div>Tabela</div>}
        renderOff={<div>Card</div>}
      />,
    );

    // Garante que renderizou o renderOff
    expect(x.queryByText('Card')).toBeInTheDocument();
    expect(x.queryByText('Tabela')).not.toBeInTheDocument();

    act(() => {
      x.getByTestId('toggle-button').click();
      x.rerender(
        <ToggleButton
          label="Exibir como"
          toggled={toggled}
          onToggle={xulambs}
          renderOn={<div>Tabela</div>}
          renderOff={<div>Card</div>}
        />,
      );
    });

    expect(x.queryByText('Tabela')).toBeInTheDocument();
    expect(x.queryByText('Card')).not.toBeInTheDocument();
  });

  it('should change from renderOn to renderOff on click', async () => {
    let toggled = true;

    const xulambs = () => {
      toggled = !toggled;
    };

    const x = render(
      <ToggleButton
        label="Exibir como"
        toggled={toggled}
        onToggle={xulambs}
        renderOn={<div>Tabela</div>}
        renderOff={<div>Card</div>}
      />,
    );

    // Garante que renderizou o renderOff
    expect(x.queryByText('Tabela')).toBeInTheDocument();
    expect(x.queryByText('Card')).not.toBeInTheDocument();

    act(() => {
      x.getByTestId('toggle-button').click();
      x.rerender(
        <ToggleButton
          label="Exibir como"
          toggled={toggled}
          onToggle={xulambs}
          renderOn={<div>Tabela</div>}
          renderOff={<div>Card</div>}
        />,
      );
    });

    expect(x.queryByText('Card')).toBeInTheDocument();
    expect(x.queryByText('Tabela')).not.toBeInTheDocument();
  });
});
