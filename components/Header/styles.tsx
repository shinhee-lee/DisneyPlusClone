import styled from "styled-components";

export const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  overflow: hidden;
  z-index: 3;
  color: ${(props) => props.theme.white};
`;

export const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

export const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export const LoginContainer = styled.div`
  //shift to end
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
