import React, { FunctionComponent, ReactNode } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Stack, Typography, IconButton,  } from '@mui/material';
import {
   
    ContentCopy as ContentCopyIcon,
  } from '@mui/icons-material';

export interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
}

interface AppTableProps {
  columns: Column[];
  rows: Record<string, ReactNode>[];
  tableHeight?: string | number;
}

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log(`Copied to clipboard: ${text}`);
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      }
    );
  };
  

const AppTable: FunctionComponent<AppTableProps> = ({ columns, rows, tableHeight }) => {
  return (
    // <TableContainer component={Paper} style={{ maxHeight: tableHeight }}>
    //   <Table stickyHeader aria-label="customized table">
    //     <TableHead>
    //       <TableRow>
    //         {columns.map((column) => (
    //           <TableCell
    //             key={column.id}
    //             align={column.align || 'left'}
    //             style={{ minWidth: column.minWidth }}
    //           >
    //             {column.label}
    //           </TableCell>
    //         ))}
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row, rowIndex) => (
    //         <TableRow key={rowIndex}>
    //           {columns.map((column) => (
    //             <TableCell key={column.id} align={column.align || 'left'}>
    //               {row[column.id]}
    //             </TableCell>
    //           ))}
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    
    //---------------------------------------with the checkboxes and copy ------------------------------------------------------------------------

    <TableContainer component={Paper} style={{ maxHeight: tableHeight }}>
  <Table stickyHeader aria-label="customized table">
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox />
        </TableCell>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align || 'left'}
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row, rowIndex) => (
        <TableRow key={rowIndex} hover>
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
          {columns.map((column) => (
            <TableCell key={column.id} align={column.align || 'left'}>
              {column.id === 'ipAddress' ? (
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography>{row[column.id]}</Typography>
                  <IconButton
                    size="small"
                    // onClick={() => copyToClipboard(row[column.id])}
                  >
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </Stack>
              ) : (
                row[column.id]
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

  );
};

export default AppTable;
