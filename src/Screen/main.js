import main from '../css/main.css'
import ButtonComponent from '../Component/ButtonComponent';
import ClearIcon from '@mui/icons-material/Clear';
import PercentIcon from '@mui/icons-material/Percent';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useEffect, useState } from 'react';

export default function Main()
{
    const [first,setFirst]=useState('')
    const [icons,setIcons]=useState('')
    const [store,setStore]=useState([])
    const [result,setResult]=useState(null)


    
   console.log("jjjjj:",first)

   const handleClick=(n)=>{
     setFirst(n)
     setStore((prevItem)=>[...prevItem,n])    //setItems((prevItems) => [...prevItems, inputValue]);
   }
   console.log("ddddd:",store)

   const handleIcons=(i)=>{
    setIcons(i)
    setStore((prevItem)=>[...prevItem,i])
   }
   const showicons=()=>{
      
      return store.map((item)=>{
         
         return <>{item}</>
      })
    }

    const calculate = () => {
      let expression = '';
      // Array ko string expression mein convert karna
      store.forEach((item) => {
        expression += item + ' ';
      });
  
      try {
        // eval function ka istemal karke expression evaluate karna
        const evalResult = eval(expression);
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
    };

    const handlePop=()=>{
      setStore(prevStore => prevStore.slice(0, -1));
    }

    const handleClear=()=>{
      setStore([])
    }
    
    
    useEffect(function(){
      calculate()
    },[store])
  
   
   // alert(first)
    return(<div className='first'>
          <div className='second-container'>
             <div className='display-material'><div className='display-material-show'>{showicons()}<div className='result'><div className='line'></div><div className='resultfinal'>{store.length>0?"Result":""}</div><div>{result}</div></div></div></div>
             <div className='display-show-container'>
                <div className='first-side'>
                   <ButtonComponent message="1"  onClick={()=>handleClick("1")}/>
                   <ButtonComponent message="2" onClick={()=>handleClick("2")}/>
                   <ButtonComponent message="3" onClick={()=>handleClick("3")}/>
                   <ButtonComponent message="4" onClick={()=>handleClick("4")}/>
                   <ButtonComponent message="5" onClick={()=>handleClick("5")}/>
                   <ButtonComponent message="6" onClick={()=>handleClick("6")}/>
                   <ButtonComponent message="7" onClick={()=>handleClick("7")}/>
                   <ButtonComponent message="8" onClick={()=>handleClick("8")}/>
                   <ButtonComponent message="9" onClick={()=>handleClick("9")}/>
                   <ButtonComponent message="0" onClick={()=>handleClick("0")}/>
                   <ButtonComponent message="." onClick={()=>handleClick(".")}/>
                   <ButtonComponent message={<ClearIcon fontSize="medium"/>} onClick={()=>handlePop()}/>
                   
                   
                </div>
                <div className='right-side'>
                    <ButtonComponent message={<PercentIcon/>} width="80%" className="btn-right-side" onClick={()=>handleIcons('%')}/>
                    <ButtonComponent message={"/"} width="80%" className="btn-right-side" marginTop="30px" onClick={()=>handleIcons('/')}/>
                    <ButtonComponent message={<AddIcon/>} width="80%" className="btn-right-side" marginTop="30px" onClick={()=>handleIcons('+')}/>
                    <ButtonComponent message={<RemoveIcon/>} width="80%" className="btn-right-side" marginTop="30px" onClick={()=>handleIcons('-')}/>
                    <ButtonComponent message={<DragHandleIcon/>} width="80%" className="btn-right-side" marginTop="30px" onClick={()=>handleIcons('=')}/>
                    <ButtonComponent message={"AC"} width="80%" className="btn-right-side" marginTop="30px" textwidth="0" onClick={()=>handleClear('')}/>
                </div>
             </div>
          </div>
          
        </div>)
}