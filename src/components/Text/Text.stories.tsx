import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./index";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const PlainText: Story = {
  render: () => <Text>This is plain text</Text>,
};

export const BoldText: Story = {
  render: () => (
    <Text fontWeight="bold" size="xl" color="orange">
      Extra Large bold text
    </Text>
  ),
};
export const FontChange: Story = {
  render: () => (
    <Text fontFamily="mono" size="lg">
      Mono large text
    </Text>
  ),
};
