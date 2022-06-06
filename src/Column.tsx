import React, { useContext } from "react";
import { ColumnsContext } from "./Columns";
import { Space } from "./shared/Space";
import styled from "styled-components";

type ColumnProps = {
  children?: React.ReactNode;
  flexGrow?: number;
  flexShrink?: number;
  space?: Space;
  columnWidth?: string;
};

const StyledColumn = styled.div<ColumnProps>`
  display: flex;
  flex-basis: auto;
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  min-width: 0;
  padding-left: ${(props) => props.space};
  width: ${(props) => props.columnWidth};
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
