import styled, { css } from "styled-components";

type TextProps = {
  size: "h1" | "h2" | "h3";
};

const sizeModifiers = {
  h1: css`
    font-size: 5rem;
  `,
  h2: css`
    font-size: 3rem;
  `,
  h3: css`
    font-size: 2rem;
  `
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  &:hover,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }
`;