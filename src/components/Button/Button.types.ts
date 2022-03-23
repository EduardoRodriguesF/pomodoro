interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'content' | 'small' | 'regular' | 'medium' | 'large';
  disabled?: boolean;
  round?: boolean;
}

export type { IButtonProps };
