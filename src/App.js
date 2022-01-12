import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// TODO LIST
// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (e) => setToDo(e.target.value);
//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (toDo === "") {
//       return;
//     }
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setToDo("");
//   };
//   console.log(toDos);
//   return (
//     <div>
//       <h1>My To Do ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           value={toDo}
//           onChange={onChange}
//           type="text"
//           placeholder="Write your to do..."
//         />
//         <button>Add Event</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// COIN TRACKER
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [money, setMoney] = useState();

//   const onChange = (e) => setMoney(e.target.value);

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       <h1>Coin {loading ? "" : `(${coins.length})`} </h1>
//       {loading ? (
//         <strong>Loading</strong>
//       ) : (
//         <div>
//           <input
//             value={money}
//             onChange={onChange}
//             type="number"
//             placeholder="Enter your money ($)"
//           />
//           <br />
//           <select>
//             {coins.map((coin) =>
//               coin.quotes.USD.price <= money ? (
//                 <option>
//                   {coin.name} : {coin.quotes.USD.price}
//                 </option>
//               ) : null
//             )}
//           </select>
//         </div>
//       )}
//     </div>
// );
// }
