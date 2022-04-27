import React, { useState } from 'react';
import MainTable from './components/MainTable/MainTable';
import defaultTableData from './helpers/defaultTableData';
import { TableCell } from './helpers/types';
import styles from './MainGame.module.css';

interface MainGameProps {}

const MainGame: React.FC<MainGameProps> = () => {
  const [ tableData, setTableData ] = useState<TableCell[][]>(defaultTableData);

  return (
    <div className={styles.mainGame}>
      <MainTable tableData={tableData} />
    </div>
  )
};

export default MainGame;
