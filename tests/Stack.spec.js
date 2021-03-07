import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Stack } from "../lib/Stack";

describe("Stack", () => {
  test("when passed prop: flexGrow 0", () => {
    render(<Stack flexGrow={0}>{`Stack with flexGrow 0`}</Stack>);
    expect(screen.getByText("Stack with flexGrow 0")).toHaveStyle({
      flexGrow: "0",
    });
  });

  test("when passed prop: flexGrow 1", () => {
    render(<Stack flexGrow={1}>{`Stack with flexGrow 1`}</Stack>);
    expect(screen.getByText("Stack with flexGrow 1")).toHaveStyle({
      flexGrow: "1",
    });
  });
});
