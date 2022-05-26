import React from "react";
import styled from "styled-components";
import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
};

const StoryContainer = styled.div`
  display: flex;
`;

const Template = (args) => (
  <StoryContainer>
    <Input {...args} />
  </StoryContainer>
);

export const BoundInput = Template.bind({});

BoundInput.storyName = "Input";
