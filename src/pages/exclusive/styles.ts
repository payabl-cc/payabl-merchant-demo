import styled, { css } from "styled-components";
import { keyframes } from "styled-components";

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
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ExclusiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background-color: #f7f7f7;
  padding: 0 1rem 0 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-self: left;
  padding: 0.5rem 1.5rem 0.5rem 0rem;
  border-bottom: 1px solid #a2a4a8;
  margin-bottom: 1rem;
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`;

export const ColoredLink = styled.span`
  color: #63da9e;
`;

export const ExternalLinks = styled.ul`
  color: #212329;
  margin-top: 1rem;
  margin-left: 1rem;
`;

export const Skeleton = styled.div`
  background: linear-gradient(
    90deg,
    rgba(214, 217, 222, 0.8) 0%,
    rgba(246, 249, 252, 0.8) 50%,
    rgba(214, 217, 222, 0.8) 100%
  );
  background-size: 200% 100%;
  margin-bottom: 1rem;

  ${({ height }) => css`
    min-height: ${height};
  `}
  ${({ width }) => css`
    width: ${width};
  `};

  animation: ${shimmerAnimation} 1.5s infinite linear;
`;

export const Link = styled.a`
  &:hover,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }
`;
