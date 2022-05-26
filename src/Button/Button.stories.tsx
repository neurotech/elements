import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

const StoryContainer = styled.div`
  display: flex;
`;

const Template = (args) => (
  <StoryContainer>
    <Button {...args} />
  </StoryContainer>
);

export const BoundButton = Template.bind({});

BoundButton.storyName = "Button";
