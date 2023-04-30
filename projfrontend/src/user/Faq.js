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
      <p className='faq-ans'>
         We provide basic education to the children, including reading,
         writing, and math skills. We also offer vocational training for
        older children who are interested in learning a trade.
      </p>
    )
  }

  
  const stringb=()=>{
    if(b) return (
      <p className='faq-ans'>
        Prayaas is an EARNEST attempt to bring SUNSHINE in wearisome lives. It is a VOLUNTEER movement initiated by student fraternity of IIIT-Allahabad to AMELIORATE the LIFE of not so privileged kids.
         We provide basic education to the children, including reading,
         writing, and math skills. We also offer vocational training for
        older children who are interested in learning a trade.
      </p>
    )
  }

  
  const stringc=()=>{
    if(c) return (
      <p className='faq-ans'>
         You can contribute by sponsoring a child, by making general donation, by convincing your friends, company or other companies to provide corporate funding to HHIN. You can join us and provide voluntary services and there is no specific amount that should be donated. However all the programs have a detailed breakup of the expenditure.
      </p>
    )
  }

  
  const stringd=()=>{
    if(d) return (
      <p className='faq-ans'>
         Yes, the website is safe for any kind of transaction. Also any information exchange is kept safe and in no condition gets disclosed. Also the payment gateway is a third party payment gateway recognized by the financial institutions under the government of India. So any transaction also is thoroughly secured.
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
            <span>+</span>
          </button>
          
          {stringa()} 
        </Fragment>

        <Fragment className="question">
          <button className='btn-faq' onClick={submitb}>
           
            <span>What is Prayas? </span>
            <span>+</span>
          </button>
          
          {stringb()}
        </Fragment>

        <Fragment className="question">
          <button className='btn-faq' onClick={submitc}>
           
            <span>How can I contribute to this organization? </span>
            <span>+</span>
          </button>
          
          {stringc()}
        </Fragment> 

        <Fragment className="question">
          <button className='btn-faq' onClick={submitd}>
           
            <span>Is the website safe to make online payments?</span>
            <span>+</span>
          </button>
          
          {stringd()} 
        </Fragment>
      </div>
    </section>
    </div>
  )
}
