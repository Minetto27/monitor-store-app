import React, { useState } from 'react';
import { AddItem }  from './components/AddItem/AddItem';
import logo from './logo.svg';
import './App.css';
import { Filter } from './components/Filter/Filter';
import { Table } from './components/Table/Table';
import { monitors } from './data/data';

function App() {
  const [openDialogAddItem, setOpenDialogAddItem] = useState(false)


  return (
    <div style={{textAlign: 'center'}}>      
        <p>
         <button className='btn' onClick={() => setOpenDialogAddItem(p => !p)}>Add Item</button>        
        </p>
      
     
     <div style={{display: 'flex', justifyContent: 'center'}}>
     <AddItem open={openDialogAddItem}/>
     <Filter />
     <Table data={monitors}/>
     </div>
      

    </div>
  );
}

export default App;
