import React from "react";
import { Box } from "./Box";

export default {
  title: "Box",
  component: Box,
};

const Template = (args) => <Box {...args}>{"This is a box."}</Box>;

export const BoundBox = Template.bind({});

BoundBox.storyName = "Box";
