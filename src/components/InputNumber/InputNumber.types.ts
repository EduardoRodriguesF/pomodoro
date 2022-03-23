interface IInputNumberProps {
  defaultValue?: number;
  min?: number;
  max?: number;
  allowNegatives?: boolean;
  onChange?: (value: number) => void;
}

export type { IInputNumberProps };
