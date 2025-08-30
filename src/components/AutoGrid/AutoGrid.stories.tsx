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
        Each card will grow to fill the space between the parent and the spacing
      </Text>
      <AutoGrid>
        {items.map((a) => (
          <Card
            backgroundColor="orange"
            style={{ alignContent: "center", textAlign: "center" }}
            key={a.value}
          >
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
          <Card
            backgroundColor="powderblue"
            style={{ alignContent: "center", textAlign: "center" }}
            key={a.value}
          >
            {a.label}
          </Card>
        ))}
      </AutoGrid>
    </Container>
  ),
};
export const ColumnSpecificGri: Story = {
  render: () => (
    <Container>
      <Text>Specifying the column size will still autofill the space</Text>
      <AutoGrid spacing={20} columns={2}>
        {items.map((a) => (
          <Card
            backgroundColor="darkgreen"
            style={{ height: 50, alignContent: "center", textAlign: "center" }}
            key={a.value}
          >
            {a.label}
          </Card>
        ))}
      </AutoGrid>
    </Container>
  ),
};
