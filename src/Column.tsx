import React, { useContext } from "react";
import { ColumnsContext } from "./Columns";
import { Space } from "./definitions";
import styled from "styled-components";

type ColumnProps = {
  children?: React.ReactNode;
  flexGrow?: number;
  flexShrink?: number;
  space?: Space;
  columnWidth?: string;
};

const StyledColumn = styled.div<ColumnProps>`
  min-width: 0;
  width: ${(props) => props.columnWidth};
  flex-shrink: ${(props) => props.flexShrink};
  flex-grow: ${(props) => props.flexGrow};
  flex-basis: auto;
  padding-left: ${(props) => props.space};
`;

export const Column = (props: ColumnProps) => {
  const { space } = useContext(ColumnsContext);

  return (
    <StyledColumn
      flexGrow={props.flexGrow}
      flexShrink={props.flexShrink}
      space={space}
      columnWidth={props.columnWidth}
    >
      {props.children}
    </StyledColumn>
  );
};

Column.defaultProps = {
  space: Space.Small,
};
