import React from 'react'
import ReactDOM from 'react-dom/client'

// // harus return 1 element parent, jadi kalau banyak bisa pake React.Fragment
// const Greeting = () => {
//   return (
//     <React.Fragment>
//       <div>
//         <h3>Hello people</h3>
//         <ul>
//           <li>
//             <a href="#"> Hello World</a>
//           </li>
//         </ul>
//       </div>
//       <h2>Hello World</h2>
//     </React.Fragment>
//   )
// }

// yg lebih singkat pake <>
const Greeting = () => {
  return (
    <>
      <div>
        <h3>Hello people</h3>
        <ul>
          <li>
            <a href="#"> Hello World</a>
          </li>
        </ul>
      </div>
      <h2>Hello World</h2>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
