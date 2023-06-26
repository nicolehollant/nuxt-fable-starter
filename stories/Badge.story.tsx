import { Icon, Badge } from '#components';

// Create a base story to extend with variants
const base = storyFactory({
  component: Badge,
  title: 'Badge: default',
  args: {
    // args are a superset of your component's props, you can provide additional args that are not present on your component as well
    content: 'Hello Stories 👋',
    color: 'red',
  },
});

// export your base component
export default base.component;

// create a simple variant that overrides args from your base story
export const simpleVariant = base.extendArgs({
  color: 'blue',
});

// create a variant that overrides args from your base story
export const customSlot = base.extend({
  // arg overrides
  args: {
    color: 'blue',
  },
  // slot overrides
  slotArgs: {
    default: () => <div>some slot content</div>,
  },
});

// create a variant with custom args and a custom render function
export const customArgs = base.extend({
  args: {
    color: 'green',
    // custom args (that aren't props on the component)
    icon: 'mdi:globe',
    iconSide: 'left',
    showHint: true,
    hint: 'This is a hint',
  },
  controls: {
    // string control
    icon: {
      required: true,
      type: {
        controlType: 'string',
        type: 'string',
      },
    },
    // select control
    iconSide: {
      required: true,
      type: {
        controlType: 'string',
        type: 'union',
        elements: ['left', 'right'],
      },
    },
    // boolean control
    showHint: {
      required: false,
      type: {
        controlType: 'boolean',
        type: 'boolean',
      },
    },
    // controls are not added for custom args, to see a control for the `hint` arg, uncomment the following code:
    // hint: {
    //   required: true,
    //   type: {
    //     controlType: 'string',
    //     type: 'string',
    //   },
    // },
  },
  render: (args) => () =>
    (
      <div>
        <Badge {...args.props}>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            {args.props.iconSide === 'left' && <Icon name={args.props.icon} />}
            <span>Earth</span>
            {args.props.iconSide === 'right' && <Icon name={args.props.icon} />}
          </div>
        </Badge>
        {args.props.showHint && <small>{args.props.hint}</small>}
      </div>
    ),
});
