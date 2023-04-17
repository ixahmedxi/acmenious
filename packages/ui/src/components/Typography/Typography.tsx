import { FC, PropsWithChildren } from 'react';

export const Typography: FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-crimson-11">{children}</p>;
};
