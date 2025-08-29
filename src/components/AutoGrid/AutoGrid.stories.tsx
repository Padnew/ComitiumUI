import type { Meta, StoryObj } from "@storybook/react";
import { AutoGrid } from "./index";
import { Card } from "../Card";
import { Container } from "../Container";
import { Text } from "../Text";

const meta: Meta<typeof AutoGrid> = {
  title: "Components/AutoGrid",
  component: AutoGrid,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AutoGrid>;

const items = [
  { label: "Item 1", value: 1 },
  { label: "Item 2", value: 2 },
  { label: "Item 3", value: 3 },
  { label: "Item 4", value: 4 },
  { label: "Item 5", value: 5 },
];

export const SimpleGrid: Story = {
  render: () => (
    <Container>
      <Text>
        The items below in the auto grid are contained to their cards:
      </Text>
      <AutoGrid>
        {items.map((a) => (
          <Card backgroundColor="orange" key={a.value}>
            {a.label}
          </Card>
        ))}
      </AutoGrid>
    </Container>
  ),
};
export const ResizedGrid: Story = {
  render: () => (
    <Container>
      <Text>Now with a smaller spacing</Text>
      <AutoGrid spacing="sm">
        {items.map((a) => (
          <Card backgroundColor="powderblue" key={a.value}>
            {a.label}
          </Card>
        ))}
      </AutoGrid>
    </Container>
  ),
};
