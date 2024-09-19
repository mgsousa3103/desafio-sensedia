export type SearchBarProps = {
  term: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface SearchProps extends SearchBarProps {
  ariaLabel: string;
  text: string;
}
