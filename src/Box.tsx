import React from "react";
import styled from "styled-components";
import { BorderRadius } from "./shared/BorderRadius";
import { Space } from "./shared/Space";

interface BoxProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  flexGrow?: number;
  flexShrink?: number;
  space?: Space;
  padding?: number;
  borderRadius?: BorderRadius;
}

const StyledBox = styled.div<BoxProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  display: flex;
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  padding: ${(props) => props.padding}rem;
  padding-bottom: ${(props) =>
    props.space === Space.None ? props.padding + "rem" : props.space};
`;

// TODO:
// Refactor padding logic to support setting padding top/right/bottom/left

const Box = (props: BoxProps) => {
  return (
    <StyledBox
      backgroundColor={props.backgroundColor}
      flexGrow={props.flexGrow}
      flexShrink={props.flexShrink}
      padding={props.padding}
      borderRadius={props.borderRadius}
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
