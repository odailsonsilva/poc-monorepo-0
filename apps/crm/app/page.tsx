"use client";

import { AuthProvider, useAuth } from "@helius/contexts";
import { Button } from "@helius/ui";

const Page = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Usuario: {user.name}</h1>
      <Button appName="helius">teste</Button>
    </div>
  );
};

export default function Home() {
  return (
    <AuthProvider>
      <Page />
    </AuthProvider>
  );
}
