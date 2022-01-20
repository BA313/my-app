import { AmplifyProvider, Theme } from '@aws-amplify/ui-react';

// Step 1: Create a new Theme with your custom values
export const theme = {
  name: 'my-theme',
  tokens: {
    colors: {
      font: {
        primary: { value: '#008080' },
        // ...
      },
    },
  },
};