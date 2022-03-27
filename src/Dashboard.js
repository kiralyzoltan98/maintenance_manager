
import * as React from "react-admin"
import { Card, CardContent, CardHeader } from '@material-ui/core';

export default () => (
  <Card>
      <CardHeader title="Welcome To Device Manager" />
      <CardContent>With the help of a modern maintenance and asset management system, we can <strong>save significant time and resources</strong> and make our company <strong>more efficient.</strong></CardContent>
      <ul>
        <li>
          We can receive <strong>error tickets and reports</strong> 
        </li>
        <li>
          You can schedule device <strong>maintenance</strong> 
        </li>
        <li>
          We can see the operated devices
        </li>
      </ul>
  </Card>
);