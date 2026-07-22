import styled from 'styled-components';
import Link from 'next/link';

export const FooterContainer = styled.footer`
  background-color: var(--bg-dark);
  color: white;
  position: relative;
`;

export const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  opacity: 0.1;
  background-size: cover;
  background-position: center;
  background-image: url('/img/footer-bg.webp');
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  position: relative;
  z-index: 10;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BrandInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  img {
    height: 4rem;
    width: auto;
    object-fit: contain;
  }
`;

export const ContactList = styled.div`
  color: #d1d5db; /* gray-300 */
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-weight: 300;
`;

export const ContactItem = styled.p`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--primary);
    flex-shrink: 0;
  }

  a {
    transition: color 0.3s;
    &:hover {
      color: var(--primary);
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const SocialLink = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background-color: #1f2937; /* gray-800 */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: currentColor;
  }

  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;

export const FooterSection = styled.div`
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #374151; /* gray-700 */
    padding-bottom: 0.75rem;
    display: inline-block;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MenuListItem = styled.li`
  a {
    color: #d1d5db;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: var(--primary);
    }

    &:hover {
      color: var(--primary);
    }
  }
`;

export const AboutText = styled.p`
  color: #d1d5db;
  font-weight: 300;
  line-height: 1.625;
`;

export const Copyright = styled.div`
  background-color: black;
  padding: 1.5rem 0;
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280; /* gray-500 */
  position: relative;
  z-index: 10;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  strong {
    color: white;
  }
`;
