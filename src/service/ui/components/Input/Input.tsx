import { forwardRef } from 'react';

interface Props {
  className: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string | number | readonly string[] | undefined;
  ref: React.LegacyRef<HTMLInputElement> | undefined;
}

export const Input = forwardRef(({ className, type, onChange, value, ref }: Props) => {
  return <input className={className} onChange={onChange} type={type} ref={ref} value={value} />;
});
