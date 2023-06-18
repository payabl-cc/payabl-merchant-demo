import * as S from "./styles";

type HeadingProps = {
  size: "h1" | "h2" | "h3" | "h4" | "h5";
  fontWeight?: "bold" | "light" | "heavy";
  fontStyle?: "italic";
  children: any;
  color?: string;
};

const Heading = (props: HeadingProps) => {

  return (
    <S.Heading {...props}>
      {props.children}
    </S.Heading>
  );
};

export default Heading;
