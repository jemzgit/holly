import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const TableExampleSimple = () => (
  <Table >
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Contact</TableHeaderColumn>
        <TableHeaderColumn>Info</TableHeaderColumn>
      </TableRow>
    </TableHeader>

    <TableBody displayRowCheckbox={false}>
      <TableRow>
        <TableRowColumn>Holly's Main Phone</TableRowColumn>
        <TableRowColumn>000000000</TableRowColumn>
        
      </TableRow>
      <TableRow>
        <TableRowColumn>Kukkik's Phone:</TableRowColumn>
        <TableRowColumn>0824874351</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>James' Phone Number</TableRowColumn>
        <TableRowColumn>0991498242</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Email address</TableRowColumn>
        <TableRowColumn>hollyshouse.bkk@gmail.com</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Kukkik's Line</TableRowColumn>
        <TableRowColumn>kanokporn.bm</TableRowColumn>
      </TableRow>
        <TableRow>
        <TableRowColumn>James' Line</TableRowColumn>
        <TableRowColumn>boomandbewm</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>James' Whatsapp</TableRowColumn>
        <TableRowColumn>+66991498242</TableRowColumn>
      </TableRow>

    </TableBody>
  </Table>
);

export default TableExampleSimple;