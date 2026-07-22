import styled from 'styled-components';

export const FloatButton = styled.a`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 90;
  background-color: #25d366;
  color: white;
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 25px -5px rgba(37, 211, 102, 0.5);
  }

  svg {
    width: 2.25rem;
    height: 2.25rem;
    fill: currentColor;
  }
`;
