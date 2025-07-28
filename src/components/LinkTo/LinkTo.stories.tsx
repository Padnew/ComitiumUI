import type { Meta, StoryObj } from "@storybook/react";
import { LinkTo } from "./index";

const meta: Meta<typeof LinkTo> = {
  title: "Components/LinkTo",
  component: LinkTo,
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof LinkTo>;

export const ExternalLink: Story = {
  render: () => (
    <LinkTo href="www.google.com" newTab>
      A link to google in a new tab
    </LinkTo>
  ),
};
export const InternalLink: Story = {
  render: () => (
    <LinkTo href="about" newTab>
      A link to the imaginary 'about' page
    </LinkTo>
  ),
};
