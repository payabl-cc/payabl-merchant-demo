import styled, { css } from "styled-components";

const sizeModifiers = {
  h1: () => css`
    font-size: 4rem;

    @media (max-width: 816px) {
      font-size: 2.75rem;
    }
  `,

  h2: () => css`
    font-size: 2.5rem;

    @media (max-width: 816px) {
      font-size: 1.5rem;
    }
  `,

  h3: () => css`
    font-size: 2.15rem;

    @media (max-width: 816px) {
      font-size: 1.25rem;
    }
  `,

  h4: () => css`
    font-size: 1.25rem;

    @media (max-width: 816px) {
      font-size: 1rem;
    }
  `,

  h5: () => css`
    font-size: 1rem;

    @media (max-width: 816px) {
      font-size: 0.9rem;
    }
  `
};

const fontWeightModifiers = {
  bold: () => css`
    font-weight: bold;
  `,

  light: () => css`
    font-family: "Work Sans Light";
  `,

  heavy: () => css`
    font-family: "Work Sans Bold";
  `
};

export const Heading = styled.p`
  margin: 0;
  font-family: "Work Sans Regular";
  text-align: left;

  ${({ color }) => css`
    color: ${color || "#ffffff"};
  `}

  ${({ size }) => css`
    ${size && sizeModifiers[size]()}
  `}

  ${({ fontWeight }) => css`
    ${fontWeight && fontWeightModifiers[fontWeight]()}
  `}
`;
