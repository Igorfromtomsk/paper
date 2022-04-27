import _ from 'lodash';
import React from 'react';
import { TableCell } from '../../helpers/types';
import Cell from '../Cell/Cell';
import styles from './MainTable.module.css';

interface MainTableProps {
  tableData: TableCell[][];
}

const MainTable: React.FC<MainTableProps> = ({ tableData }) => {
  const renderTableRows = (tableData: TableCell[][]) => {
    return _.map(tableData, (row, rowIndex) => (
      <div key={rowIndex} className={styles.tableRow}>{_.map(row, cell => renderTableCell(cell))}</div>
    ));
  };

  const renderTableCell = (cell: TableCell) => {
    return (
      <Cell key={cell.data} cell={cell} />
    );
  }

  return (
    <div className={styles.mainTable}>
      {renderTableRows(tableData)}
    </div>
  );
};

export default MainTable;
