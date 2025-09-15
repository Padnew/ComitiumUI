import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./index";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const DefaultTextInput: Story = {
  render: () => <TextInput label="Default Input" />,
};
export const LabelTextInput: Story = {
  render: () => <TextInput label="XL Username:" fs="xl" />,
};

export const SensitiveTextInput: Story = {
  render: () => (
    <TextInput variant="sensitive" fs="lg" label="Large Password:" />
  ),
};
