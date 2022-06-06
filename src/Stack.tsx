import React, { Children } from "react";
import flattenChildren from "react-keyed-flatten-children";
import styled from "styled-components";
import { JustifyContent } from "./shared/JustifyContent";
import { Space } from "./shared/Space";

interface StackProps {
  children?: React.ReactNode;
  flexGrow?: number;
  flexShrink?: number;
  justifyContent?: JustifyContent;
  padLastChild?: boolean;
  space?: Space;
  stackHeight?: string;
}

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

const StackChild = styled.div<StackProps>`
  padding-bottom: ${(props) => props.space};
`;

const Stack = (props: StackProps) => {
  const stackItems = flattenChildren(props.children);

  return (
    <StyledStack
      flexGrow={props.flexGrow}
      flexShrink={props.flexShrink}
      justifyContent={props.justifyContent}
      padLastChild={props.padLastChild}
      space={props.space}
      stackHeight={props.stackHeight}
    >
      {Children.map(stackItems, (child) => (
        <StackChild space={props.space}>{child}</StackChild>
      ))}
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
