import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./index";
import { Text } from "../Text";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const BlankContainer: Story = {
  render: () => (
    <Container>
      <Text>
        A blank container has no base stylings but can be used for wrapping
      </Text>
    </Container>
  ),
};

export const StyledContainer: Story = {
  render: () => (
    <Container
      curved="md"
      shadow="lg"
      backgroundColor="powderBlue"
      padding="lg"
    >
      A container can accept similar styling props to a Card
    </Container>
  ),
};
