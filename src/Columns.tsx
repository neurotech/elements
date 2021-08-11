import React, { createContext } from "react";
import { JustifyContent, Space } from "./definitions";
import styled from "styled-components";

interface ColumnsProps {
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
  display: flex;
  flex-direction: ${(props) => resolveReverseToValue("row", props.reverse)};
  flex-flow: ${(props) => props.flow};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) => props.alignItems};
  margin-left: -${(props) => props.space};
  flex-wrap: ${(props) => props.flexWrap};
  overflow-wrap: break-word;
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
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
