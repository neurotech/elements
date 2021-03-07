import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Box } from "../lib";

describe("Box", () => {
  test("when passed prop: flexGrow 0", () => {
    render(<Box flexGrow={0}>{`baba`}</Box>);
    expect(screen.getByText("baba")).toHaveStyle({ flexGrow: "0" });
  });

  test("when passed prop: flexGrow 1", () => {
    render(<Box flexGrow={1}>{`baba`}</Box>);
    expect(screen.getByText("baba")).toHaveStyle({ flexGrow: "1" });
  });
});
