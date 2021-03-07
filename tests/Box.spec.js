import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Box } from "../lib/Box";

describe("Box", () => {
  test("when passed prop: flexGrow 0", () => {
    render(<Box flexGrow={0}>{`Box with flexGrow 0`}</Box>);
    expect(screen.getByText("Box with flexGrow 0")).toHaveStyle({
      flexGrow: "0",
    });
  });

  test("when passed prop: flexGrow 1", () => {
    render(<Box flexGrow={1}>{`Box with flexGrow 1`}</Box>);
    expect(screen.getByText("Box with flexGrow 1")).toHaveStyle({
      flexGrow: "1",
    });
  });
});
