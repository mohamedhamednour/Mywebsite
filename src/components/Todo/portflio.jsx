import React from 'react'
import logo from '../img/sofra.png';
import abda from '../img/ibd3.png';
import bold from '../img/bold.png';
import "../../App.css";


export const Portflio = () => {
    const alldata = [
      {id:1,
        name :'bold site',
        url:'https://mohamedhamednour.github.io/booldsitee/',
        imgs:bold
        },
        {
          id:2,
        name :'abda ',
        url:'https://mohamedhamednour.github.io/abda3MH/',
        imgs:abda
        },
        {
          id:3,
        name :'sofra ',
        url:'https://mohamedhamednour.github.io/Sofra-site/',
        imgs:logo
        }
    ]
  return (
    <div>
          <div className="container">
          <div className="row">
        {alldata.map((item) => ([
        
               <div class="card col-12 col-md-4" >
               <img className='imgss' src={item.imgs} class="card-img-top" alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">{item.name}</h5>
                 <p class="card-text">front end web site </p>
                 <a href={item.url} class="btn btn-primary">Go web site </a>
               </div>
             </div>
           

        ]
     
                
              ))}
                </div>
             </div>
    </div>
  )
}

