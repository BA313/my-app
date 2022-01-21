import { AmplifyProvider, SelectField, Card, useTheme } from '@aws-amplify/ui-react';

import { theme } from './theme';

import React, {useState}  from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator, TextField} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {

  const [defCal, cal2] = useState({num: 0});

  var cals
  const setValue = (e) => {
    console.log(e);
    switch(e){
      case "item1":
        cal2({num: 530});
        console.log("BIG MAC");
        break;
      case "item2":
        cal2({num: 190});
        console.log("Chicken McNuggets® (4 piece)");
        break;
      case "item3":
        cal2({num: 510});
        console.log("Large French Fries");
        break;
      default:
        cal2({num: 0});
        console.log("DEFAULT");
        break;
    }
  }

  return (
    <Card>
          <SelectField
            label="McFood"
            placeholder="Please select a food"
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="item1">Big Mac</option>
            <option value="item2">Chicken McNuggets® (4 piece)</option>
            <option value="item3">Large French Fries</option>
          </SelectField>
          <TextField
              label="McCalories"
              placeholder="resulting calories"
              value={defCal.num}
              onChange={(e) => cal2({num: e.target.value})}
            />
      </Card>
  );
}
