import styled from 'styled-components';
import Link from 'next/link';

export const Header = styled.header`
  position: fixed;
  top: 1.5rem;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const NavContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  border-radius: 9999px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 80%;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  img {
    height: 3rem;
    width: auto;
    object-fit: contain;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }

    @media (min-width: 768px) {
      height: 3.5rem;
    }
  }
`;

export const DesktopNav = styled.nav`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  transition: color 0.3s;
  position: relative;

  &:hover {
    color: var(--primary);

    span {
      width: 100%;
    }
  }

  span {
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    width: 0;
    height: 0.125rem;
    background-color: var(--primary);
    transition: width 0.3s;
  }
`;

export const MobileMenuButton = styled.button`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  
  @media (min-width: 768px) {
    display: none;
  }

  svg {
    width: 2.25rem;
    height: 2.25rem;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 110%;
  left: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(24px);
  border: 1px solid ${({ $isOpen }) => ($isOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent')};
  border-radius: 1.5rem;
  transition: all 0.3s;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  max-height: ${({ $isOpen }) => ($isOpen ? '24rem' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  padding: ${({ $isOpen }) => ($isOpen ? '1rem 0' : '0')};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1.5rem;
`;

export const MobileNavLink = styled(Link)`
  color: white;
  font-size: 1.125rem;
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem 0;
  border-bottom: 1px solid #1f2937;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: var(--primary);
  }
`;
