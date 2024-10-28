"use client";

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const NextAuthProvider: FC<Props> = (props) => {
  const { children } = props;
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
