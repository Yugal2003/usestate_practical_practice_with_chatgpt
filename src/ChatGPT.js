// 1.Counter Application:

// Question: Create a simple counter application where a button click increments the counter by 1. Display the current count.
// Hint: Use useState to manage the count state.


// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [count,setCount] = useState(0);

//   return (
//     <div>
//         <p>Count : {count}</p>
//         <button onClick={()=>setCount((c) => c+1)}>Increment</button>
//         <button onClick={()=>setCount((c) => c-1)}>Decrement</button>
//     </div>
//   )
// }

// export default ChatGPT


//2.Toggle Visibility:

// Question: Implement a component that toggles the visibility of a text paragraph when a button is clicked.
// Hint: Use useState to manage the visibility state (e.g., true or false).


// implement js in react 

// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [toggle,setToggle] = useState(false);
//     const ptagvalue = document.querySelector('p');
//     const btn = document.querySelector('button');

//     if(toggle){
//         ptagvalue.style.display = 'block'
//         btn.textContent = "hide"
//     }
//     else{
//         ptagvalue.style.display = 'none'
//         btn.textContent = "show"
//     }
//   return (
//     <div>
//         <p className='ptag'>This is an Paragraph!</p>
//         <button onClick={()=>setToggle(!toggle)}>Toggle</button>
//     </div>
//   )
// }

// export default ChatGPT


//without js directly use chatgpt code more good

// import React, { useState } from 'react';

// const ChatGPT = () => {
//     const [toggle, setToggle] = useState(false);

//     return (
//         <div>
//             {toggle && <p className='ptag'>This is a Paragraph!</p>}
//             <button onClick={() => setToggle(!toggle)}>
//                 {toggle ? 'Hide' : 'Show'}
//             </button>
//         </div>
//     );
// }

// export default ChatGPT;


//3.Form Input Handling:

// Question: Create a form with a text input field. Display the input value below the input field as the user types.
// Hint: Use useState to store and update the input value.

// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [inputValue,setInputValue] = useState("")
//   return (
//     <div>
//         <form>
//             <label>Type : </label>
//             <input onChange={(e)=>setInputValue(e.target.value)} type='text' placeholder='Enter Your Text'/>
//         </form>
//         Output : {inputValue}
//     </div>
//   )
// }

// export default ChatGPT


//4.Multiple State Variables:

//Question: Build a simple form with two input fields, one for the user's first name and one for the last name. Display the full name below the form as the user types.
// Hint: Use useState for both first name and last name states.

// import React,{useState} from "react";

// const ChatGPT = () =>{
//     const [firstName,setFirstName] = useState("")
//     const [lastName,setLastName] = useState("")
//     return(
//         <div>
//              <form>
//                 <label>FirstName : </label>
//                 <input onChange={(e)=>setFirstName(e.target.value)} type='text' placeholder='Enter Your FirstName'/>
//                 <label>LastName : </label>
//                 <input onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='Enter Your LastName'/>
//             </form>
//             Full Name : {firstName}&nbsp;&nbsp;{lastName}
//         </div>
//     )
// }

// export default ChatGPT;


//5.Conditional Rendering:

// Question: Create a component that displays "Hello, [name]!" if a name is entered in an input field, otherwise display "Hello, Guest!".
// Hint: Use useState to manage the name input value and conditionally render the greeting.

// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [name,setName] = useState("");

//   return (
//     <div>
//         <label>Name :</label>
//         <input onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Name :'/><br></br>
//         {name ? `Hello, ${name}!` : `Hello, Guest!`}
//     </div>
//   )
// }

// export default ChatGPT



// 6.List Management:

//Question: Implement a simple to-do list where you can add new items. The list should update and display each added item.
// Hint: Use useState to manage the array of to-do items.


// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [todo,setTodo] = useState([]);
//     const [addTodo,setAddTodo] = useState("");

//     const addItem = () =>{
//       setTodo([...todo,addTodo]);
//       setAddTodo("")
//     }
//   return (
//     <div>
//       <input value={addTodo} onChange={(e)=>setAddTodo(e.target.value)} type='text' placeholder='add text'/>
//       <button onClick={addItem}>Add Item</button>

//       {
//         todo.map((item,index) => {
//           return(
//               <div key={index}>
//                 <p>{item}</p>
//               </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default ChatGPT



//7.Checkbox State:

// Question: Create a form with a checkbox. When the checkbox is checked, display a message saying "Checked!" and when unchecked, display "Unchecked!".
// Hint: Use useState to manage the checkbox state.

// import React, { useState } from 'react'

// const ChatGPT = () => {
//   const [check,setCheck] = useState(false);

//   return (
//     <div>
//         <form>
//           <input checked={check} onChange={()=>setCheck(!check)} type='checkbox'/>  Click
//         </form>    
//         {
//           check ? "Checked!" : "Unchecked!"
//         }
//     </div>
//   )
// }

// export default ChatGPT


//8. Counter with Minimum and Maximum Limits:

// Question: Enhance the counter application to include minimum and maximum limits. Disable the increment button when the count reaches the maximum limit and disable the decrement button when the count reaches the minimum limit.
// Hint: Use useState for the count state and include logic to enforce the limits.

// import React,{useState} from 'react'

// const ChatGPT = () => {
//       const [count,setCount] = useState(0);
      
//       const increment = () =>{
//         if(count < 5){
//           setCount((c)=>  c+1)
//         }
//       }
//       const decrement = () =>{
//         if(count > 0){
//           setCount((c)=>  c-1)
//         }
//       }
//     return (
//       <div>
//           <p>Count : {count}</p>
//           <button onClick={increment} disabled={count >= 5}>Increment</button>
//           <button onClick={decrement} disabled={count <= 0}>Decrement</button>
//       </div>
//     )
//   }

// export default ChatGPT


//9.Simulate a Light Switch:

// Question: Create a component that simulates a light switch. Clicking a button toggles the light between "On" and "Off".
// Hint: Use useState to manage the light's state (e.g., "On" or "Off").


// import React, { useState } from 'react'

// const ChatGPT = () => {

//   const [toggle,setToggle] = useState(false)

//   return (
//     <div>
//       <button onClick={() => setToggle(!toggle)}>{
//         toggle ? "Turn Off!" : "Turn On !"
//       }</button>
//       {
//         toggle ? "The Light is Turn On!" : "The Light is Turn Off!"
//       }
//     </div>
//   )
// }

// export default ChatGPT


//10.Dynamic Class Names:


// Question: Create a component with a button. When the button is clicked, change the background color of a div using dynamic class names.
// Hint: Use useState to toggle the class name for the div.


// with using div 

// import React, { useState } from 'react'

// const ChatGPT = () => {
//   const [color,setColor] = useState("red");

//   const clickHandler = () =>{
//     setColor(color === 'red' ? "blue" : "red")
//   }
  
//   return (
//     <div>
//       <div style={{backgroundColor : color, width : "100px",height:"100px"}}></div>
//       <button onClick={clickHandler}>Change Color</button>
//     </div>
//   )
// }

// export default ChatGPT



// usecallback in react js


// import React, { useState, useCallback } from 'react';

// const  ChatGPT = () => {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     setCount(count + 1);
//   }, [count]); // pass like this so increment lots of time your choice ok...
//    }, []);  we can pass like so increment only one time when first time page load ok...

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default ChatGPT;




// usememo in react js


import React, { useState, useMemo } from 'react';

const ChatGPT = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const expensiveComputation = (num) => {
    console.log('Computing...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i * num;
    }
    return result;
  };

  const memoizedResult = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>otherState: {otherState}</p>
      <p>Expensive Computation Result: {memoizedResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>{/*it take lots of time to execute */} 
      <button onClick={() => setOtherState(otherState + 1)}>Change Other State</button> {/*it take shot period  of time to execute */} 
    </div>
  );
}

export default ChatGPT;
