import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  disabled?: boolean;
  emoji?: string;
  fullWidth?: boolean;
  label: string;
  onClick: () => void;
  variant: ButtonVariant;
}

type StyledButtonProps = Pick<ButtonProps, "emoji" | "fullWidth" | "variant">;

type ButtonVariant = "blue" | "green" | "grey" | "red" | "yellow";

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.theme.button[props.variant].background};
  border-color: ${(props) => props.theme.button[props.variant].border};
  border-radius: 6px;
  border-style: solid;
  border-width: 2px;
  color: ${(props) => props.theme.button[props.variant].text};
  cursor: pointer;
  display: flex;
  flex-grow: ${(props) => (props.fullWidth ? "1" : "0")};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1rem;
  font-weight: 500;
  justify-content: ${(props) => (!props.emoji ? "center" : "space-between")};
  align-items: center;
  line-height: 1rem;
  margin: 0;
  min-height: ${(props) => props.theme.minHeight};
  min-width: ${(props) => (props.emoji ? "8.75rem" : "7rem")};
  padding: 0 1rem;
  text-shadow: 1px 1px 0
    ${(props) => props.theme.button[props.variant].textShadow};
  transition: background-color 0.1s ease 0s, color 0.1s ease 0s,
    text-shadow 0.1s ease 0s;

  :hover {
    background-color: ${(props) =>
      props.theme.button[props.variant].hover.background};
    color: ${(props) => props.theme.button[props.variant].hover.text};
    text-shadow: 1px 1px 0 transparent;
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.button.disabled.background};
    border-color: ${(props) => props.theme.button.disabled.border};
    color: ${(props) => props.theme.button.disabled.text};
    text-shadow: 1px 1px 0 transparent;
  }
`;

export const Button = ({
  disabled,
  fullWidth,
  emoji,
  label,
  onClick,
  variant = "blue",
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      emoji={emoji}
      fullWidth={fullWidth}
      onClick={() => onClick}
      variant={variant}
    >
      <div>{label}</div>
      {emoji && <div>{emoji}</div>}
    </StyledButton>
  );
};
