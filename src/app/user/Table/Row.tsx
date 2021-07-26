import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({}));

interface RowProps {
  row: User;
}

export default function Row({ row }): FunctionComponent<RowProps> {
  return (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell align="right">{row.name}</TableCell>
      <TableCell align="right">{row.hireDate}</TableCell>
      <TableCell align="right">{row.department}</TableCell>
      <TableCell align="right">{row.status}</TableCell>
      <TableCell />
    </TableRow>
  );
}
