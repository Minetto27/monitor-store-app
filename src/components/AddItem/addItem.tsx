import { useEffect, useState } from "react";
import "../../css/style.css";
import { brands, sizes } from "../../data/data";

interface Item {
  productNumber: number;
  brand: string;
  screenSize: number;
  price: number;
  quantity: number;
}

interface IAddItem{
  open: boolean
}

export const AddItem = ({ open = false }: IAddItem) => {
  const [value, setValue] = useState();
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(p => !p);
  }, [open])

  return (
    <div className="dialog" style={{ display: state ? '' : 'none'}}>
      <div className="dialog-contet">
        <p className="close-pointer" onClick={() => setState(false)}>X</p>
        <h1 style={{textAlign: 'center'}}>Add to inventory </h1>
        <div className="grid-2">
          <div>
            <p>Product Number:</p>
            <input className="form-input" />
          </div>
          <div>
            <p>Brand:</p>
            <select className="form-input">
              {brands.map(item => <option value={item.id} label={item.label} />
              )}
              
            </select>
          </div>
        </div>
        <div className="grid-3">
        <div>
        <p>Screen Size:</p>
        <select className="form-input">
          {sizes.map(item => <option value={item.id} label={item.size.toString()} />)}
        </select>
        </div>
        <div>
        <p>Price:</p>
        <input className="form-input" style={{textAlign: 'right'}}/>
        </div>
        <div>
        <p>Quantity:</p>
        <input type='number' className="form-input" />
        </div>
        
        </div>
        <div style={{textAlign: 'center'}}>
        <button className="btn btn-success" >Add Monitor</button>
        </div>        
      </div>
    </div>
  );
};
