import React from "react";
import styled from "styled-components";
import { Space } from "./definitions";

interface BoxProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  flexGrow?: number;
  flexShrink?: number;
  space?: Space;
  padding?: number;
}

const StyledBox = styled.div<BoxProps>`
  background-color: ${(props) => props.backgroundColor};
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  padding: ${(props) => props.padding}rem;
  padding-bottom: ${(props) =>
    props.space === Space.None ? props.padding + "rem" : props.space};
`;

const Box = (props: BoxProps) => {
  return (
    <StyledBox
      backgroundColor={props.backgroundColor}
      flexGrow={props.flexGrow}
      flexShrink={props.flexShrink}
      padding={props.padding}
      space={props.space}
    >
      {props.children}
    </StyledBox>
  );
};

Box.defaultProps = {
  flexGrow: 0,
  flexShrink: 0,
  space: Space.Small,
  padding: 0,
};

export { Box, BoxProps };
