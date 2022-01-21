import { AmplifyProvider, SelectField, Card, useTheme } from '@aws-amplify/ui-react';
import { useState } from 'react';

import { theme } from './theme';

import React from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator, TextField} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <SelectField
            label="Fruit"
            labelHidden={true}
            placeholder="Please select a food"
            //onChange={(e) => setValue(e.target.value)}
          >
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
          </SelectField>;
          <TextField
              label="Calories"
              placeholder="resulting calories"
            />;
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
