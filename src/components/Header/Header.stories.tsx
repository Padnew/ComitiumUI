import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./index";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LargeHeader: Story = {
  render: () => (
    <Header heading="Big heading" size="3rem" subHeading="Smaller heading" />
  ),
};
export const DefaultHeader: Story = {
  render: () => (
    <Header heading="Default heading" subHeading="Default Subheading" />
  ),
};
