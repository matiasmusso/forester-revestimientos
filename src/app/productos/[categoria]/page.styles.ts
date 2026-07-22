"use client";

import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: var(--bg-light);
  min-height: 100vh;
`;

export const Main = styled.main`
  padding-bottom: 5rem;
`;

export const CategoryHero = styled.section`
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8rem;
  padding-bottom: 5rem;

  @media (min-width: 1024px) {
    min-height: 50vh;
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    object-fit: cover;
    filter: brightness(0.4);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 1rem;
  max-width: 56rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`;

export const HeroDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  color: #e5e7eb; /* gray-200 */
  font-weight: 300;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 5rem 0;

  h3 {
    font-size: 1.5rem;
    color: #6b7280; /* gray-500 */
  }
`;

export const BackLinkWrapper = styled.div`
  margin-bottom: 2rem;
`;

import Link from 'next/link';

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #4b5563; /* gray-600 */
  font-weight: 500;
  transition: color 0.3s, transform 0.3s;
  padding: 0.5rem 0;

  &:hover {
    color: var(--primary);
    transform: translateX(-4px);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
