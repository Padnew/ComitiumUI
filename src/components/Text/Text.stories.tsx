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
export const ExternalLink: Story = {
  render: () => (
    <Text linkTo="www.google.com" newTab>
      A link to google in a new tab
    </Text>
  ),
};
export const InternalLink: Story = {
  render: () => (
    <Text linkTo="about" newTab>
      A link to the imaginary 'about' page
    </Text>
  ),
};
export const BoldText: Story = {
  render: () => (
    <Text weight="bold" size="xl" color="orange">
      Extra Large bold text
    </Text>
  ),
};
export const FontChange: Story = {
  render: () => (
    <Text font="mono" size="lg">
      Mono large text
    </Text>
  ),
};
