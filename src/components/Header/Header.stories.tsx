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
export const ColouredHeader: Story = {
  render: () => (
    <Header
      heading="I'm a big red header"
      size="2rem"
      subHeading="I'm grey... for now"
      color="red"
    />
  ),
};

export const NoSubHeadingHeader: Story = {
  render: () => (
    <Header heading="A header with no subheading!" size="xl" color="red" />
  ),
};
