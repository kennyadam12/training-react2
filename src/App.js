import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [smallData, setSmallData] = useState({});
  const [smallData2, setSmallData2] = useState();
  let array=[];
  // const test = {cur:"USD",exc:1};

  // async function getAPI(){
  //   await fetch(`https://api.currencyfreaks.com/latest?apikey=f27812a89205458db35ec17785b6f215`)
  //   .then(response => response.json())
  //   .then(data => setSmallData({data})); 
  // }

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://api.currencyfreaks.com/latest?apikey=f27812a89205458db35ec17785b6f215&symbols=CAD,IDR,JPY,CHF,EUR,GBP')
        .then(response => response.json())
        .then(data => setSmallData(data.rates));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
},[]);

console.log(smallData);
for (var key in smallData) {
  if (smallData.hasOwnProperty(key)) {
    let cur=key;
    let exc=Math.round(smallData[key]*100)/100;
    let buy = Math.round((exc*1.05) * 100) / 100;
    let sell = Math.round((exc*0.95) * 100) / 100;
    // setSmallData2({currency:cur,exchange:exc});
    array.push({cur,exc,buy,sell});
  }
}
// for (let index = 0; index < array.length; index++) {
//   setSmallData(array[index]);
// }

// console.log(array);

  // console.log(`${key}: ${smallData[key]}`);
  // console.log(key);
  // console.log(smallData[key]);
 
  
return(
    <>
      <table>
        <thead>
          <tr>
            <td>Currency</td>
            <td>We Buy</td>
            <td>Exchange</td>
            <td>We Sell</td>
          </tr>
        </thead>
        <tbody>
        {array.map(({ cur,exc,buy,sell }) => (
            <tr key={cur}>
              <td>{cur}</td>
              <td>{buy}</td>
              <td>{exc}</td>
              <td>{sell}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}
export default App;