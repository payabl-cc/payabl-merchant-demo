import * as S from "./styles";
import { useState, useEffect } from "react";

type BodyTextProps = {
  children: any;
  color?: string;
  fontStyle?: "italic" | "light" | "heavy";
  centerText?: boolean;
  size?: "default" | "small" | "tiny";
  margin?: string;
};

const BodyText = (props: BodyTextProps) => {
  const { fontStyle, color, centerText, size, margin } = props;

  return (
    <S.BodyText
      color={color}
      fontStyle={fontStyle}
      centerText={centerText}
      size={size}
      margin={margin}
    >
      {props.children}
    </S.BodyText>
  );
};

export default BodyText;
