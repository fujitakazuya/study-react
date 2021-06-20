import { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react'
import { TooltipContainer } from './ToolTipContainer'
import { TooltipText } from './ToolTipText'

type Props = {
  Container: ComponentProps<typeof TooltipContainer>
  Text: ComponentProps<typeof TooltipText>
}

export default {
  title: 'DesignSystem/Atoms/ToolTip',
  component: TooltipContainer,
  subcomponents: { TooltipText },
} as Meta

const Template: Story<Props> = (args) => (
  <TooltipContainer>
    <TooltipText {...args.Text}>{args.Text.children}</TooltipText>
    {args.Container.children}
  </TooltipContainer>
)

export const Default = Template.bind({})
Default.args = { Container: { children: 'ToolTip' }, Text: { children: 'ToolTip' } }

export const Top = Template.bind({})
Top.args = {
  Container: Default.args.Container,
  Text: { children: 'ToolTip Top', position: 'top' },
}
