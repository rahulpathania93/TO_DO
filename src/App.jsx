// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

import { useState } from "react";

// import { useState } from "react";

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App

// // components------------------------------------------
// function app(){
//   const name= "rahul";
//   const data  = <h1>Hello --{name}---!!!</h1>;
//   return data;
// }

// function Header(){
//   const headerData = <h2>My website----</h2>;
//   return headerData
// }
// function Footer() {
//   const footerData = <p>© 2025 All Rights Reserved</p>;
//   return footerData
// }
// function WelcomeProps(props){
//   // return (
//   //   <div>
//     return <h1>Hello {props.name}</h1>
//   //   </div>
//   // )
// }

// function PropsApp({name,age}){
//   return(
//     <h1>i am {name} and my age is {age}</h1>
//   )

// }
// function NewApp(){
//   return(
//     <div>
//       <Header />
//       <h1> Main Content Area</h1>
//       <Footer />

//         <WelcomeProps name="rahul" />
//         <WelcomeProps name = "xyz" />
//         <WelcomeProps name = "Rosy" />
//         <PropsApp name="rahul" age="20" />
//         <PropsApp name="aksh" age="20" />
//     </div>
//   );

// }
// // creating a count function
// // let countFn =0;
// function Counter(){
//   const [count, setCount] = useState(0);
//   return(
//     <div>
//       <p>count: {count}</p>
//       <button onClick={()=>
//         setCount(count+1)}>Increase </button>

//     </div>
//   )
// }

// export default Counter;
// //PROPS-----------------------------------------------

// // function newApp(){
// //   return(

// //   )

// // }
// // export default PropsApp;

// Header component
// function Header(props){
//     return <h1>Ankahi mohabbat by {props.title}</h1>;
// }

// // Footer component
// function Footer(props){
//     return <h2>coming soon.....{props.year}</h2>
// }

// // components------------------------------------------
// function App(){
//     return(
//         <div>
//             <Header title="RAHUL"/>
//             <p>WELCOME TO MY WEBSITE </p>
//             <Footer year="2025" />
//         </div>
//     )
// }

// Task 2: Counter App with Normal Variable (Won’t Work Properly)
// let count = 0;
// function App(){
//     return(
//       <div>
//         <p>count: {count}</p>
//         <button onClick={()=>
//           count++}>Increase </button>

//       </div>
//     )
// }

// Task 3: Counter App with React State (✅ Works)
// import { useState }  from "react"
// function App(){
//   const [count, setCount]= useState(0);
//   return(
//     <div>
//       <p>count: {count}</p>
//       <button onClick={()=>
//         setCount(count+1)}>Increase</button>
//       <button onClick={()=>setCount(count-1)}>Decrease</button>
//       <button onClick={()=>setCount(0)}>Reset</button>

//     </div>
//   )
// }

//~~~~~~~~~FORMS IN REACT~~~~~~~~~~~~~~~~~~~~~
//creating state variable to store input--------
// function App(){
//   const [userName, setUserName] = useState("");

//   //handle change when user types-------------
//   function handleChange(event){
//     console.log(event,"event------------")
//     setUserName(event.target.value);
//   }
//   //handle form submisson-------stop is from reloading----
//   function handleSubmit(event){
//     event.preventDefault();
//     alert("submitted username::"+userName);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         userName:{" "}
//         <input type="text" value={userName} onChange={handleChange}>
//         </input>
//       </label>
//       <button type="submit">submit</button>
//     </form>
//   )
// }

// ~~~~~~~~~~~~CREATING TO DO APP-----------------
// function App(){console.log("helooooooooo")
//   // create state for tasks
//   const [task,setTask] = useState("") //For Input field
//   const [tasks,settasks] = useState([]); // for storing list of tasks

//   // step2 add task
//   function addTask(e){console.log("e----",e)
//     e.preventDefault();
//     if (task.trim()==="") return;
//     settasks([...tasks,{text:task, completed:false}]);
//     setTask("");
//   }
//   // function to toggle completion......
//   function toggleComplete(index){console.log("index",index)
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTask(updatedTasks)
//   }

//   return(
//     <div style={{textAlign:"center",marginTop:"50px"}}>
//       <h1> TO-DO APP</h1>

//       <form onSubmit={addTask}>
//       <input type="text"
//       value={task}
//       onChange= {(e)=>setTask(e.target.value )}
//       placeholder="Enter task"
//       />
//       <button type="submit">Add</button>
//       </form>
//       {/* ~~~~~~~~~TASK LIST~~~~~~~~~~~~~~~~~~~``    */}
//       <ul style={{ listStyle: "none", padding: "0" }}>
//   {/* loop through tasks array and create <li> for each task */}
//         {tasks.map((t, index) => (
//           <li key={index} style={{ margin: "10px 0" }}>
//             {t}   {/* or t.text if it's an object */}
//           </li>
//         ))}
//       </ul>

//     </div>
//   )

// }

// import { useState } from "react"

function App() {
  const [task, updatedTask] = useState("");
  // const updatedTask=useState("");
  const [tasks, updatedTasks] = useState([]);
  function addTask(e) {
    e.preventDefault();
    // alert("function started=-=-===-",e)
    // console.log("function started",e)
    // console.log("task-")
  }
  function saveTasks() {
    // alert("task saving process started");
    // console.log("heloo------");
    // updatedTask(task);
    if (task.trim() !== "") {
      console.log("inside-----");
      updatedTasks([...tasks, task]);
      updatedTask("");
      // console.log("task saved",task,"all----",tasks)
    }
    console.log("out-----------");
  }
  function deleteTask(index) {
  const data = tasks.filter((_, i) => i !== index);
  updatedTasks(data);
}

  return (
    <div style={{}}>
      <h1
        style={{
          color: "pink",
          textAlign: "revert-layer",
          marginTop: "-400px",
          marginLeft: "200px",
          fontStyle: "italic",
          borderColor: "green",
        }}
      >
        TO--DO--APP
      </h1>
      <form onSubmit={addTask}>
        <input
          style={{
            marginLeft: "120px",
            color: "yellow",
            height: "70px",
            width: "500px",
            borderColor: "green",
            textAlign: "center",
            fontSize: "30px",
          }}
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => {
            updatedTask(e.target.value);
          }}
        />

        <button
          onClick={() => saveTasks()}
          style={{
            marginTop: "50px",
            marginLeft: "120px",
            color: "white",
            height: "30px",
            width: "500px",
            borderColor: "green",
            textAlign: "center",
            fontSize: "13px",
          }}
          type="submit"
        >
          SUBMIT
        </button>
        <h2>TASK LIST:</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
export default App;
