import React from 'react';
import Form from 'react-jsonschema-form';

import definitions from './definitions';
import fields from '../fields';
import widgets from '../widgets';

export const uiSchema = {
  settings: {
    defaultFrequency: {
      classNames: 'form-inline'
    },
    frequencies: {
      items: {
        classNames: 'form-inline'
      }
    }
  },
  textCopy: {
    'ui:options': {
      label: false
    },
    tooltip: {
      'ui:options': {
        label: true
      }
    },
    toolTipCopy: {
      'ui:widget': 'textarea'
    },
    upsellModalCopy: {
      'ui:widget': 'textarea'
    }
  },
  styles: {
    global: {
      'ui:title': 'Global font',
      color: {
        'ui:widget': 'color',
        'ui:options': {
          label: true
        }
      },
      classNames: 'form-inline',
      size: {
        unit: {
          'ui:options': {
            label: true
          }
        },
        number: {
          'ui:options': {
            label: true
          }
        }
      }
    },
    tooltip: {
      'ui:title': 'Tooltip font',
      color: {
        'ui:widget': 'color',
        'ui:options': {
          label: true
        }
      },
      classNames: 'form-inline',
      size: {
        unit: {
          'ui:options': {
            label: true
          }
        }
      }
    },
    upsellColor: {
      'ui:title': 'Upsell button',
      'ui:widget': 'color'
    },
    upsell: {
      'ui:title': 'Upsell button font',
      color: {
        'ui:widget': 'color',
        'ui:options': {
          label: true
        }
      },
      classNames: 'form-inline',
      size: {
        unit: {
          'ui:options': {
            label: true
          }
        }
      }
    }
  }
};

export const schema = {
  ...definitions,
  type: 'object',
  properties: {
    settings: {
      title: 'Widget settings',
      $ref: '#/definitions/WidgetSettings'
    },
    textCopy: {
      title: 'Widget copy',
      type: 'object',
      properties: {
        defaultFrequencyCopy: {
          type: 'string',
          default: 'Recommended',
          title: 'Default frequency copy'
        },
        subscribeOptionCopy: {
          type: 'string',
          default: 'Subscribe and get 20% off',
          title: 'Subscribe option copy'
        },
        oneTimeOptionCopy: {
          type: 'string',
          default: 'One-time    ',
          title: 'One-time option copy'
        },
        toolTip: {
          type: 'boolean',
          default: 'Add tool tip',
          title: 'Tool tip'
        },
        toolTipLinkCopy: {
          type: 'string',
          default: 'More info',
          title: 'Tool tip link copy'
        },
        toolTipCopy: {
          type: 'string',
          default:
            'Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Read the FAQ here. Promotion subject to change.',
          title: 'Tool tip copy'
        },
        upsellCopy: {
          type: 'string',
          default: 'Add to upcoming subscription order and receive 20% off',
          title: 'Upsell copy'
        },
        upsellButtonCopy: {
          type: 'string',
          default: 'Add to Next Order',
          title: 'Upsell button copy'
        },
        upsellMessage: {
          type: 'string',
          default: 'Add this item to your next order on [order_date] and get 10% off',
          title: 'Upsell message'
        },
        upsellModalCopy: {
          type: 'string',
          default:
            'Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Read the FAQ here. Promotion subject to change.',
          title: 'Upsell modal copy'
        },
        upsellModalOneTimeOptionCopy: {
          type: 'string',
          default: 'Get one-time',
          title: 'Upsell modal one-time option copy'
        },
        upsellModalSubscribeOptionCopy: {
          type: 'string',
          default: 'Subscribe and get 10% off on every order',
          title: 'Upsell modal subscribe option copy'
        },
        upsellModalAddButton: {
          type: 'string',
          default: 'Add',
          title: 'Upsell modal add button'
        }
      }
    },
    styles: {
      type: 'object',
      title: 'Widget styles',
      properties: {
        global: {
          $ref: '#/definitions/Font',
          default: {
            familly: 'Arial, Helvetica, sans-serif',
            size: '13',
            unit: 'px',
            color: '#333333'
          }
        },
        tooltip: {
          $ref: '#/definitions/Font',
          default: {
            familly: 'Arial, Helvetica, sans-serif',
            size: '13',
            unit: 'px',
            color: '#298266'
          }
        },
        upsellColor: {
          type: 'string',
          default: '#298266'
        },
        upsell: {
          $ref: '#/definitions/Font',
          default: {
            familly: 'Arial, Helvetica, sans-serif',
            size: '13',
            unit: 'px',
            color: '#298266'
          }
        }
      }
    }
  }
};

export const SubscriptionOptinWidgetForm = props => (
  <Form schema={schema} uiSchema={uiSchema} fields={fields} widgets={widgets} {...props}>
    {/* Empty div to disable action buttons  */}
    <div />
  </Form>
);

export default SubscriptionOptinWidgetForm;