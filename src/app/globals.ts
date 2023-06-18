import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;

export const Column = styled.div`
  display: flex;

  ${({ fitContent }) =>
    !fitContent &&
    css`
      flex: 1;
    `}

  flex-direction: column;

  ${({ enableBrightnessHover }) =>
    enableBrightnessHover &&
    css`
      &:hover {
        background-color: #282a2e;
      }
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;
