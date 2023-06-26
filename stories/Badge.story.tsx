import { Icon, Badge } from '#components';

const base = storyFactory({
  component: Badge,
  title: 'Badge: default',
  args: {
    content: 'hi',
    color: 'red',
  },
  slotArgs: {
    default: () => <div>some slot content</div>,
  },
});

export default base.component;

export const blue = base.extendArgs({
  color: 'blue',
});

export const green = base.extend({
  args: {
    color: 'green',
    icon: 'mdi:globe',
    iconSide: 'left',
  },
  controls: {
    icon: {
      required: true,
      type: {
        controlType: 'string',
        type: 'string',
      },
    },
    iconSide: {
      required: true,
      type: {
        controlType: 'string',
        type: 'union',
        elements: ['left', 'right'],
      },
    },
  },
  render: (args) => () =>
    (
      <Badge {...args.props}>
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          {args.props.iconSide === 'left' && <Icon name={args.props.icon} />}
          <span>Earth</span>
          {args.props.iconSide === 'right' && <Icon name={args.props.icon} />}
        </div>
      </Badge>
    ),
});
