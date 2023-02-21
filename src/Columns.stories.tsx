import React from "react";
import styled from "styled-components";
import { Column } from "./Column";
import { Columns } from "./Columns";
import { JustifyContent } from "./shared/JustifyContent";

export default {
  title: "Columns",
  component: Columns,
};

const Item = styled.div`
  background-color: lightgray;
  border: 2px solid darkgray;
  border-radius: 4px;
  flex-grow: 1;
  padding: 1rem;
`;

const Template = (args) => (
  <Columns justifyContent={JustifyContent.SpaceBetween} {...args}>
    <Column columnWidth="47%">
      <Item>{"Column 1"}</Item>
    </Column>
    <Column columnWidth="47%">
      <Item>{"Column 2"}</Item>
    </Column>
  </Columns>
);

export const BoundColumns = Template.bind({});

BoundColumns.storyName = "Columns";
