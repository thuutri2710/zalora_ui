import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, buttonSize, buttonType } from "./Button";
import { ReactComponent as AccountIcon } from "../Icon/svg/account.svg";
import clsx from "clsx";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: buttonType,
      control: { type: "select" },
    },
    size: {
      options: buttonSize,
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className={clsx("p-4", args.type === "invert" && "bg-black")}>
    <Button {...args}>Button</Button>
  </div>
);

export const Playground = Template.bind({});
Playground.args = {
  type: "primary",
  size: "medium",
};
Playground.parameters = {
  options: {
    showPanel: true,
  },
};

export const Type: ComponentStory<typeof Button> = (args) => (
  <div className="space-y-2">
    <div className="space-x-2">
      <Button>Primary</Button>
      <Button type="outline">Outline</Button>
      <Button type="apply">Apply</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
    </div>
    <div className="p-4 bg-black">
      <Button type="invert">Invert</Button>
    </div>
  </div>
);

export const Size: ComponentStory<typeof Button> = (args) => (
  <div className="space-x-2">
    <Button>Button</Button>
    <Button size="small">Button</Button>
  </div>
);

export const Icon: ComponentStory<typeof Button> = (args) => (
  <div className="space-x-2">
    <Button icon={<AccountIcon />}>Button</Button>
    <Button>
      <AccountIcon />
    </Button>
  </div>
);

export const Disabled: ComponentStory<typeof Button> = (args) => (
  <div className="space-y-2">
    <div className="space-x-2">
      <Button>Button</Button>
      <Button isDisabled>Button</Button>
    </div>
    <div className="space-x-2">
      <Button type="outline">Button</Button>
      <Button type="outline" isDisabled>
        Button
      </Button>
    </div>
  </div>
);
