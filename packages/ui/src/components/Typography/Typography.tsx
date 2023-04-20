import { FC, PropsWithChildren } from 'react';

export const Typography: FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className="text-crimson-11 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
      {children}
    </p>
  );
};
