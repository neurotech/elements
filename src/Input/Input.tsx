import React from "react";
import styled from "styled-components";
import { Space } from "../shared/Space";
import { Stack } from "../Stack";

export interface InputProps {
  disabled?: boolean;
  fullWidth?: boolean;
  invalid?: boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
}

type StyledLabelProps = Pick<InputProps, "invalid">;

type StyledInputProps = Pick<InputProps, "fullWidth" | "invalid">;

const StyledLabel = styled.label<StyledLabelProps>`
  font-weight: 500;
  color: ${(props) =>
    props.invalid
      ? props.theme.input.label.invalid.text
      : props.theme.input.label.text};
`;

const StyledInput = styled.input<StyledInputProps>`
  background-color: ${(props) =>
    props.invalid
      ? props.theme.input.invalid.background
      : props.theme.input.background};
  border-radius: 2px;
  border: 2px solid
    ${(props) =>
      props.invalid
        ? props.theme.input.invalid.border
        : props.theme.input.border};
  box-sizing: border-box;
  color: ${(props) =>
    props.invalid ? props.theme.input.invalid.text : props.theme.input.text};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1rem;
  line-height: 1rem;
  min-height: ${(props) => props.theme.minHeight};
  min-width: 10rem;
  padding: 0.75rem;
  transition: background-color 0.1s ease 0s, box-shadow 0.1s ease 0s,
    border-color 0.1s ease 0s;

  width: ${(props) => (props.fullWidth ? "100%" : "unset")};

  ::placeholder {
    color: ${(props) => props.theme.input.placeholder};
  }

  :focus-within,
  :focus {
    background-color: ${(props) =>
      props.invalid
        ? props.theme.input.focused.invalid.background
        : props.theme.input.focused.background};
    border-color: ${(props) =>
      props.invalid
        ? props.theme.input.focused.invalid.border
        : props.theme.input.focused.border};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.invalid
          ? props.theme.input.focused.invalid.shadow
          : props.theme.input.focused.shadow};
    color: ${(props) => props.theme.input.text};
    outline: none;

    ::placeholder {
      color: ${(props) => props.theme.input.focused.placeholder};
    }
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.input.disabled.background};
    border-color: ${(props) => props.theme.input.disabled.border};
    color: ${(props) => props.theme.input.disabled.text};
  }

  ::selection {
    background: ${(props) => props.theme.selection.background};
    color: ${(props) => props.theme.selection.text};
  }
`;

export const Input = ({
  disabled,
  fullWidth,
  invalid,
  label,
  onChange,
  onKeyUp,
  placeholder,
  value,
}: InputProps) => (
  <Stack flexGrow={1} space={Space.XSmall}>
    {label && <StyledLabel invalid={invalid}>{label}</StyledLabel>}
    <StyledInput
      disabled={disabled}
      fullWidth={fullWidth}
      invalid={invalid}
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
      type={"text"}
      value={value}
    />
  </Stack>
);
