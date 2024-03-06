// import type { Meta, StoryFn } from '@storybook/react';
// import type { ButtonProps } from './Button.types';
// import { Button } from './Button';
//
// export default {
//   title: 'Components/Button',
//   component: Button,
//   argTypes: {
//     children: { control: 'text' },
//     variant: {
//       control: {
//         type: 'select',
//         options: ['primary', 'secondary', 'tertiary'],
//       },
//     },
//     size: {
//       control: { type: 'select', options: ['default', 'small', 'large'] },
//     },
//     accented: { control: 'boolean' },
//     disabled: { control: 'boolean' },
//     inverted: { control: 'boolean' },
//     isLoading: { control: 'boolean' },
//     isLink: { control: 'boolean' },
//   },
// } as Meta;
//
// const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {
//   children: 'Primary Button',
//   variant: 'primary',
// };
