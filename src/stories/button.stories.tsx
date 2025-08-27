import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Button from "../components/button/button";
import { ButtonProps } from "../components/types";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "large",
  },
};

export const WithClassName: Story = {
  args: {
    children: "Button",
    className: "custom-class",
  },
};

