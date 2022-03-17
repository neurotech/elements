import React, { Children } from "react";
import flattenChildren from "react-keyed-flatten-children";
import styled from "styled-components";
import { Box } from "./Box";
import { JustifyContent } from "./shared/JustifyContent";

export interface InlineProps {
  children?: React.ReactNode;
  justifyContent?: JustifyContent;
}

const StyledInline = styled.div<InlineProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifyContent};
`;

export const Inline = ({
  children,
  justifyContent = JustifyContent.Unset,
}: InlineProps) => {
  const inlineItems = flattenChildren(children);

  return (
    <StyledInline justifyContent={justifyContent}>
      {Children.map(inlineItems, (child) => (
        <Box>{child}</Box>
      ))}
    </StyledInline>
  );
};
