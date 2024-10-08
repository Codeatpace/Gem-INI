import express from "express";
import bodyParser from "body-parser";
import Search from './routes/Search.js'

const app = express();

const port = 5000;
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(bodyParser.json());
app.use('/api', Search);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})








// import './App.css';

// function App() {
//   const myfunc = async () => {
//     const response = await fetch('http://localhost:5000/api/Search',  {
//       method: "POST",
//       headers:{
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({name: "singh"})
//     })
//     const json = await response.json();
//     console.log(json)
//     console.log("Func called")
//   }
//   return (
//    <>
//       <div className="body">
//         <br/><br/>
//         <h2>🙂 Welcome to GEM - INI 🙂</h2>
//         <div className="quesSide">
//           <label>Enter Question: </label><input type="text" /><br/>
//           <input type='Submit' placeholder='Submit' onClick={() => myfunc()}/>
//         </div>
//       </div>
//    </>
//   );
// }

// export default App;
