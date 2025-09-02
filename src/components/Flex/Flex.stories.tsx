import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./index";

const meta: Meta<typeof Flex> = {
  title: "Components/Flex",
  component: Flex,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const RowOfComponentsWithSpacing: Story = {
  render: () => (
    <Flex direction="row" spacing="xl">
      <div style={{ background: "#f11", padding: "1rem" }}>Child one</div>
      <div style={{ background: "#a11f87", padding: "1rem" }}>Child two</div>
    </Flex>
  ),
};

export const VerticalFlexedComponents: Story = {
  render: () => (
    <Flex direction="column" spacing={5}>
      <div style={{ background: "#f11", padding: "1rem" }}>Child one</div>
      <div style={{ background: "#a11f87", padding: "1rem" }}>Child two</div>
    </Flex>
  ),
};
