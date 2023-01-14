import React from 'react';

interface Props {
  className: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string | number | readonly string[] | undefined;
}

export const Form = ({ className, type, onChange, value }: Props) => {
  return <input className={className} onChange={onChange} type={type} value={value} />;
};
