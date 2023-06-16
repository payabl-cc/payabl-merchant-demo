import styled, { css } from "styled-components";

const sizeModifiers = {
  default: () => css`
    font-size: 1.35rem;

    @media (max-width: 816px) {
      font-size: 1.15rem;
    }
  `,

  small: () => css`
    font-size: 0.875rem;

    @media (max-width: 816px) {
      font-size: 0.7rem;
    }
  `,

  tiny: () => css`
    font-size: 0.625rem;
  `
};

const fontStyleModifiers = {
  italic: () => css`
    font-style: italic;
  `,

  light: () => css`
    font-family: "Work Sans Light";
  `,

  heavy: () => css`
    font-family: "Work Sans SemiBold";
  `
};

export const BodyText = styled.p`
  margin: 0;

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
  font-family: Work Sans Regular;
  color: #ffffff;

  ${({ centerText }) => css`
    ${centerText &&
      css`
        text-align: center;
      `}
  `}

  ${({ fontStyle }) => css`
    ${fontStyle && fontStyleModifiers[fontStyle]}
  `}

  ${({ color }) => css`
    color: ${color || `#ffffff`};
  `}

  ${({ size }) => css`
    ${size && sizeModifiers[size]}
  `}
`;
