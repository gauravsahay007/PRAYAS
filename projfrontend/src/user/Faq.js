import React,{Fragment, useEffect,useState} from 'react'
import "./Faq.css"
import Menu from '../core/Menu';

export default function Faq() {
  const [a,setA] = useState(0);
  const [b,setB] = useState(0);
  const [c,setC] = useState(0);
  const [d,setD] = useState(0);

  

  const stringa=()=>{
    if(a) return (
      <p>
         We provide basic education to the children, including reading,
         writing, and math skills. We also offer vocational training for
        older children who are interested in learning a trade.
      </p>
    )
  }

  
  const stringb=()=>{
    if(b) return (
      <p>
         We provide basic education to the children, including reading,
         writing, and math skills. We also offer vocational training for
        older children who are interested in learning a trade.
      </p>
    )
  }

  
  const stringc=()=>{
    if(c) return (
      <p>
         We provide basic education to the children, including reading,
         writing, and math skills. We also offer vocational training for
        older children who are interested in learning a trade.
      </p>
    )
  }

  
  const stringd=()=>{
    if(d) return (
      <p>
         We provide basic education to the children, including reading,
         writing, and math skills. We also offer vocational training for
        older children who are interested in learning a trade.
      </p>
    )
  }

  const submita=event=>{
    event.preventDefault();
    setA(!a);
  }

  const submitb=event=>{
    event.preventDefault();
    setB(!b);
  }

  const submitc=event=>{
    event.preventDefault();
    setC(!c);
  }

  const submitd=event=>{
    event.preventDefault();
    setD(!d);
  }

  
  
  return (
    <div>
      <Menu/>
         <section>
      <h1 className="title">FAQ's</h1>

      <div className="questions-container">
     
        <Fragment className="question">
          <button className='btn-faq' onClick={submita} >
           
            <span>What is NGO and what is its mission? </span>
            <div>+</div>
          </button>
          
          {stringa()} 
        </Fragment>

        <Fragment className="question">
          <button className='btn-faq' onClick={submitb}>
           
            <span>What is NGO and what is its mission? </span>
            <div>+</div>
          </button>
          
          {stringb()}
        </Fragment>

        <Fragment className="question">
          <button className='btn-faq' onClick={submitc}>
           
            <span>What is NGO and what is its mission? </span>
            <div>+</div>
          </button>
          
          {stringc()}
        </Fragment> 

        <Fragment className="question">
          <button className='btn-faq' onClick={submitd}>
           
            <span>What is NGO and what is its mission? </span>
            <div>+</div>
          </button>
          
          {stringd()} 
        </Fragment>
      </div>
    </section>
    </div>
  )
}