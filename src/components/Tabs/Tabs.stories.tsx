import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./index";
import { Button } from "../Button";
import { Card } from "../Card";
import { Text } from "../Text";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const SimpleTabs: Story = {
  render: () => (
    <Tabs
      tabs={[
        {
          label: "Button Tab",
          content: (
            <Button
              variant="outline"
              onClick={() => window.alert("Star comitium UI on GitHub")}
            >
              Click Me!
            </Button>
          ),
        },
        {
          label: "Card Tab",
          content: <Card>The details are very simple</Card>,
        },
        {
          label: "Text Tab",
          content: <Text fontWeight="bold">Star this project!</Text>,
        },
      ]}
      defaultTab={0}
    />
  ),
};
export const ColouredTabs: Story = {
  render: () => (
    <Tabs
      color="green"
      tabs={[
        {
          label: "Primary Tab",
          content: (
            <Text>
              Notice the colours at the top changed to green? Default is orange
            </Text>
          ),
        },
        {
          label: "Secondary Tab",
          content: (
            <Text>
              This is because orange is my favourite colour, shame it's not
              universally loved
            </Text>
          ),
        },
      ]}
      defaultTab={0}
    />
  ),
};
