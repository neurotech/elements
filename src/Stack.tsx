import React, { Children } from "react";
import flattenChildren from "react-keyed-flatten-children";
import styled from "styled-components";
import { Box } from "./Box";
import { JustifyContent, Space } from "./definitions";

type StackProps = {
  children?: React.ReactNode;
  flexGrow: number;
  flexShrink: number;
  justifyContent: JustifyContent;
  padLastChild: boolean;
  space: Space;
  stackHeight?: string;
};

const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  height: ${(props) => props.stackHeight};
  justify-content: ${(props) => props.justifyContent};
  > :last-child {
    padding-bottom: ${(props) => (props.padLastChild ? props.space : 0)};
  }
`;

const Stack = (props: StackProps) => {
  const stackItems = flattenChildren(props.children);

  return (
    <StyledStack
      space={props.space}
      padLastChild={props.padLastChild}
      flexGrow={props.flexGrow}
      flexShrink={props.flexShrink}
      stackHeight={props.stackHeight}
      justifyContent={props.justifyContent}
    >
      {Children.map(stackItems, (child) => {
        return (
          <Box
            flexGrow={props.flexGrow}
            flexShrink={props.flexShrink}
            space={props.space}
          >
            {child}
          </Box>
        );
      })}
    </StyledStack>
  );
};

Stack.defaultProps = {
  flexGrow: 0,
  flexShrink: 0,
  justifyContent: JustifyContent.Unset,
  padLastChild: false,
  space: Space.Small,
};

export { Stack, StackProps };
