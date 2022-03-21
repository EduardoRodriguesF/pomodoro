interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: 'primary' | 'secondary' | 'text';
  disabled?: boolean;
  round?: boolean;
}

export type { IButtonProps };
