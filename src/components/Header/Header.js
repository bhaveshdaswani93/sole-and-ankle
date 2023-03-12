import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <Wrapper>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <EmptyElement />
      </MainHeader>

    </Wrapper>
  );
};


const Wrapper = styled.header`
  /* display: flex; */
`;

const MainHeader = styled.div`
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  height: 72px;
  align-items: baseline;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  line-height: 72px;
  vertical-align: middle;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const EmptyElement = styled.div`
  margin-left: auto;
`;

const LogoWrapper = styled.div`
margin-right: auto;
/* align-self: center; */
`

export default Header;
