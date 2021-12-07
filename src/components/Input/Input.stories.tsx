import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';
import { ReactComponent as AccountIcon } from '../Icon/svg/account.svg';
import clsx from 'clsx';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Playground = Template.bind({});
Playground.args = {
};
// Playground.parameters = {
//   options: {
//     showPanel: true,
//   },
// };

// export const Type: ComponentStory<typeof Button> = (args) => (
//   <div className="space-y-2">
//     <div className="space-x-2">
//       <Button>Primary</Button>
//       <Button type="outline">Outline</Button>
//       <Button type="apply">Apply</Button>
//       <Button type="danger">Danger</Button>
//       <Button type="link">Link</Button>
//     </div>
//     <div className="p-4 bg-black">
//       <Button type="invert">Invert</Button>
//     </div>
//   </div>
// )

// export const Size: ComponentStory<typeof Button> = (args) => (
//   <div className="space-x-2">
//     <Button>Button</Button>
//     <Button size="small">Button</Button>
//   </div>
// )

// export const Icon: ComponentStory<typeof Button> = (args) => (
//   <div className="space-x-2">
//     <Button icon={<AccountIcon />}>Button</Button>
//     <Button><AccountIcon /></Button>
//   </div>
// )
