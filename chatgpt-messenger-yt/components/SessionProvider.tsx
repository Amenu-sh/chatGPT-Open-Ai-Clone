"use client";
import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

type props = {
  children: React.ReactNode;
  session: Session | null;
};

export function SessionProvider({ children, session }: props) {
  return <Provider>{children}</Provider>;
}
