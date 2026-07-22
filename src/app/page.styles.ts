import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
`;

export const MainContainer = styled.main`
  min-height: 100vh;
`;

// --- HERO SECTION ---
export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  
  img {
    object-fit: cover;
    filter: brightness(0.6);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 1rem;
  max-width: 56rem;
  margin: 0 auto;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  animation: ${fadeInUp} 1s ease-out;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }

  span {
    color: var(--primary);
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #e5e7eb; /* gray-200 */
  margin-bottom: 2.5rem;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const HeroButton = styled(Link)`
  background-color: var(--primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 1.125rem;
  display: inline-block;
  transition: all 0.3s;
  box-shadow: 0 10px 15px -3px rgba(245, 158, 11, 0.3);

  &:hover {
    background-color: var(--primary-hover);
    transform: scale(1.05);
  }
`;

export const HeroScrollDown = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 1s infinite;

  a {
    color: white;
    opacity: 0.7;
    transition: all 0.3s;

    &:hover {
      opacity: 1;
      color: var(--primary);
    }
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

// --- NOSOTROS SECTION ---
export const Section = styled.section<{ $bg?: string }>`
  padding: 6rem 0;
  background-color: ${({ $bg }) => $bg || 'white'};
  scroll-margin-top: 8rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 10;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const FlexTwoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const FlexCol = styled.div`
  width: 100%;
  
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  img {
    object-fit: cover;
  }
`;

export const ImageBackdrop = styled.div`
  position: absolute;
  top: -1rem;
  right: -1rem;
  bottom: -1rem;
  left: -1rem;
  background-color: rgba(245, 158, 11, 0.2);
  border-radius: 1.5rem;
  transform: rotate(-3deg);
`;

export const Badge = styled.div`
  display: inline-block;
  background-color: #fef3c7; /* amber-100 */
  color: #d97706; /* amber-600 */
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SectionTitleCenter = styled(SectionTitle)`
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 1.5rem;
`;

export const Quote = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: #1f2937; /* gray-800 */
  border-left: 4px solid var(--primary);
  padding-left: 1.5rem;
  font-style: italic;
  margin: 2rem 0;
`;

// --- SERVICIOS SECTION ---
export const SectionSubtitle = styled(Text)`
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 4rem auto;
`;

export const Grid3Col = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceCard = styled.div`
  background-color: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6; /* gray-100 */
  text-align: center;
  transition: box-shadow 0.3s;
  
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

    div {
      background-color: var(--primary);
      color: white;
      transform: translateY(-0.5rem);
    }
  }
`;

export const ServiceIconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0 auto 1.5rem auto;
  background-color: #fffbeb; /* amber-50 */
  color: var(--primary);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
`;

// --- PRODUCTOS SECTION ---
export const CategoryLink = styled(Link)`
  position: relative;
  height: 20rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: block;

  img {
    object-fit: cover;
    transition: transform 0.7s;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    div:last-child {
      transform: translateY(0);

      div {
        width: 100%;
      }
    }
  }
`;

export const CategoryGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent);
`;

export const CategoryContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  transform: translateY(0.5rem);
  transition: transform 0.3s;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
`;

export const CategoryUnderline = styled.div`
  width: 3rem;
  height: 0.25rem;
  background-color: var(--primary);
  border-radius: 0.125rem;
  transition: width 0.3s;
`;

// --- CONTACTO SECTION ---
export const ContactSection = styled(Section)`
  background-color: var(--bg-dark);
  color: white;

  h2 {
    color: white;
  }
  
  p {
    color: #9ca3af; /* gray-400 */
  }
`;

export const Grid2Col = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: stretch;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MapWrapper = styled.div`
  height: 500px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    filter: grayscale(100%);
    transition: filter 0.5s;

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

export const FormWrapper = styled.div`
  background-color: white;
  color: #1f2937;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151; /* gray-700 */
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  transition: all 0.3s;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  transition: all 0.3s;
  resize: none;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--primary);
  color: white;
  font-weight: 700;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  transition: background-color 0.3s;
  box-shadow: 0 10px 15px -3px rgba(245, 158, 11, 0.3);

  &:hover {
    background-color: var(--primary-hover);
  }
`;
