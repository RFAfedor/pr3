import './App.css';
import React from 'react';

// const list = [
//   {

//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,

//   },
//   {

//     title: 'React',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
    
//   },
// ];
// function App() {
//   return (
//     <div className='App'>
//       {list.map(function (item) {

//         return (
//           <div>

//             <span><a href={item.url}>{item.title}</a> — </span>
//             <span>{item.author} — </span>
//             <span>{item.num_comments}</span>
//             <span>{item.points}</span>
          
//           </div>
//         );
//       })}
      
//     </div>
//   );
// }

import leo from './leo.jpg';
import don from './don.jpg';
import mikey from './mikey.jpg';

const turtles = [

  {

    id :1,
    name: "Leonardo",
    nickname: "Leo",
    weapon: "Katana",
    img: leo,

  },
  {

    id :2,
    name: "Donatello",
    nickname: "Don",
    weapon: "Bo staff",
    img: don,

  },
  {

    id :3,
    name: "Michelangelo",
    nickname: "Mikey",
    weapon: "Nunchucks",
    img: mikey,

  },

];


  function App() {
    return (
      <div className='App'>

        {turtles.map(function (tur) {

          return (

            <div className='kartochka'>

              <h3 key={tur.id}>{tur.name}</h3>
              <small><b>{tur.nickname}</b></small>
              <p>{tur.weapon}</p>
              <img src={tur.img}></img>

            </div>

          );
        })}

      </div>

    );
  }


export default App;