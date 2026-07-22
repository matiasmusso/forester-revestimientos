import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #f3f4f6; /* gray-100 */

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 16rem;
  width: 100%;
  overflow: hidden;
  background-color: #f3f4f6; /* gray-100 */
  cursor: pointer;

  img {
    object-fit: cover;
    transition: transform 0.5s;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
  }

  &:hover button {
    transform: translateY(0);
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewIconButton = styled.button`
  background-color: var(--primary);
  color: white;
  padding: 0.75rem;
  border-radius: 9999px;
  transform: translateY(1rem);
  transition: all 0.3s;
  pointer-events: none;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProductTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937; /* gray-800 */
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: var(--primary);
  }
`;

export const ProductDescription = styled.div`
  color: #4b5563; /* gray-600 */
  font-size: 0.875rem;
  margin-bottom: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ViewDetailsButton = styled.button`
  margin-top: auto;
  width: 100%;
  padding: 0.625rem 0;
  border: 1px solid var(--primary);
  color: var(--primary-hover);
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;

/* MODAL STYLES */
export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 1rem;
  max-width: 64rem;
  width: 100%;
  height: 75vh;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 50vh;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 20;
  background-color: white;
  color: #1f2937;
  border-radius: 9999px;
  padding: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #f3f4f6;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ModalImageSection = styled.div`
  background-color: #f3f4f6;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-bottom: 1px solid #e5e7eb;

  @media (min-width: 768px) {
    padding: 1.5rem;
    border-bottom: none;
  }
`;

export const MobileImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 25vh;

  @media (min-width: 768px) {
    display: none;
  }

  img {
    object-fit: cover;
  }
`;

export const DesktopImage = styled.img`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
    max-width: 100%;
    width: auto;
    height: auto;
    max-height: 42vh;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

export const NoImage = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const ModalTextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

export const ModalScrollableArea = styled.div`
  padding: 1.5rem;
  flex: 1;
  overflow-y: auto;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  padding-right: 2rem;

  @media (min-width: 768px) {
    font-size: 1.875rem;
    margin-bottom: 1.5rem;
  }
`;

export const ModalDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.875rem;
  color: #374151;
  line-height: 1.625;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const ModalActionArea = styled.div`
  padding: 1rem;
  border-top: 1px solid #f3f4f6;
  background-color: white;
  flex-shrink: 0;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const WhatsAppModalButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  background-color: #25d366;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 700;
  transition: background-color 0.3s;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  font-size: 1rem;

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1.125rem;
  }

  &:hover {
    background-color: #128c7e;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: currentColor;
  }
`;
