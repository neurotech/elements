import React from "react";
import { Box } from "./Box";
import { Inline } from "./Inline";

export default {
  title: "Inline",
  component: Inline,
};

const Template = (args) => (
  <Inline {...args}>
    <Box backgroundColor={"#efefef"}>{"Item 1"}</Box>
    <Box backgroundColor={"#efefef"}>{"Item 2"}</Box>
    <Box backgroundColor={"#efefef"}>{"Item 3"}</Box>
  </Inline>
);

export const BoundInline = Template.bind({});

BoundInline.storyName = "Inline";
