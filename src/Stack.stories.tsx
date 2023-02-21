import React from "react";
import { Stack } from "./Stack";

export default {
  title: "Stack",
  component: Stack,
};

const items = [1, 2, 3, 4, 5];

const Template = (args) => (
  <Stack {...args}>
    {"This is a Stack."}
    {items.map((item) => (
      <div>Item: {item}</div>
    ))}
  </Stack>
);

export const BoundStack = Template.bind({});

BoundStack.storyName = "Stack";
