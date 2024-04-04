import React from "react";
import { useSession } from "next-auth/react";
import { Login, LoginContainer, Logo, Nav } from "./styles";
import SignedInHeader from "./SignedInHeader";

type Props = {};

function Header() {
  const { data: session, status } = useSession();
  const renderHeader = () => {
    //로그인 되면 로그인 헤더 보여주기
    if (session) return <SignedInHeader session={session} />;
    return (
      <LoginContainer>
        <Login>Login</Login>
      </LoginContainer>
    );
  };
  return (
    <Nav>
      <Logo
        src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
        alt="Disney Logo"
      />

      {renderHeader()}
    </Nav>
  );
}

export default Header;
