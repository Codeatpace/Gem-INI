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
// import {useState} from 'react'

// function App() {
//   const [prevVal, setVal] = useState("")
//   const [ans, setAns] = useState("")
//   const myfunc = async () => {
//     const response = await fetch('http://localhost:5000/api/Search',  {
//       method: "POST",
//       headers:{
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({name: prevVal})
//     })
//     const json = await response.json();
//     console.log(json)
//     setAns(json)
//   }
//   const valFetch = (e) => {
//     setVal(e.target.value)
//   }
//   return (
//    <>
//       <div className="body">
//         <br/><br/>
//         <h2>🙂 Welcome to GEM - INI 🙂</h2>
//         <div className="quesSide">
//           <label>Enter Question:<br/> </label><textarea placeholder='Hello there!' cols={50} rows={3} type="text" onChange={valFetch} name="val" value={prevVal} style={{marginRight:"20px"}}/>
//           <input type='Submit' placeholder='Submit' onClick={() => myfunc()}/><br/><br/>
//           <textarea cols={50} rows={10} name="ans" value={ans.message}/>
//         </div>
//       </div>
//    </>
//   );
// }

// export default App;
