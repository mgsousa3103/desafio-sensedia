export type ToggleButtonProps = {
    label: string;
    toggled: boolean;
    onToggle: (toggle: boolean) => void;
    renderOn: React.ReactElement;
    renderOff: React.ReactElement;
};