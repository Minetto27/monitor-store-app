interface IData {
  id: number;
  size: number;
  brand: string;
  price: number;
  quantity: number;
}

export const Table = ({ data }: any) => {
  return (
    <div>
      <h1>Current Inventory</h1>
      <table>
        <tr>
          <th>Product Number</th>
          <th>Brand</th>
          <th>Size</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {data.map((item: IData) => 
          <tr style={{ cursor: 'pointer' }}>
            <td>{item.id}</td>
            <td>{item.brand}</td>
            <td>{item.size}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
          </tr>
        )}
      </table>
    </div>
  );
};
