
import * as React from "react-admin"
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Posting from './postTest'

export default () => (
  <Card>
      <CardHeader title="Welcome To Device Managger" />
      <CardContent>Lorem Ipsum random szöveg...</CardContent>
      <Posting></Posting>
  </Card>
);