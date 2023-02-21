import React, { createContext } from "react";
import styled from "styled-components";
import { JustifyContent } from "./shared/JustifyContent";
import { Space } from "./shared/Space";

export interface ColumnsProps {
  alignItems?: string;
  children?: React.ReactNode;
  flexWrap?: string;
  flow?: string;
  justifyContent?: JustifyContent;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  reverse?: boolean;
  space?: Space;
}

const resolveReverseToValue = (prefix: string, reverse: boolean) => {
  return reverse ? `${prefix}-reverse` : prefix;
};

const StyledColumns = styled.div<ColumnsProps>`
  align-items: ${(props) => props.alignItems};
  display: flex;
  flex: 1;
  flex-direction: ${(props) => resolveReverseToValue("row", props.reverse)};
  flex-flow: ${(props) => props.flow};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  margin-left: -${(props) => props.space};
  overflow-wrap: break-word;
`;

export const ColumnsContext = createContext({
  space: Space.Small,
});

export const Columns = (props: ColumnsProps) => {
  return (
    <StyledColumns
      alignItems={props.alignItems}
      flexWrap={props.flexWrap}
      flow={props.flow}
      justifyContent={props.justifyContent}
      onClick={props.onClick}
      reverse={props.reverse}
      space={props.space}
    >
      <ColumnsContext.Provider value={{ space: props.space }}>
        {props.children}
      </ColumnsContext.Provider>
    </StyledColumns>
  );
};

Columns.defaultProps = {
  flexWrap: "wrap",
  justifyContent: JustifyContent.Unset,
  reverse: false,
  space: Space.Small,
};
