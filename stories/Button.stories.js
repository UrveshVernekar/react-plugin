import { ButtonNew } from "../components/ButtonNew";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: ButtonNew,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    disabled: false,
    small: false,
    fullWidth: false,
  }
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    disabled: false,
    small: false,
    fullWidth: false,
  }
}

export const Disabled = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
    small: false,
    fullWidth: false,
  }
}

export const Small = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    disabled: false,
    small: true,
    fullWidth: false,
  }
}

export const FullWidth = {
  args: {
    label: 'Full Width Button',
    variant: 'primary',
    disabled: false,
    small: false,
    fullWidth: true,
  }
}
