import '../css/button.css';


export default function ButtonComponent({textwidth,background,marginTop,width, message, onClick })
{
    
    return(<div className='main-container' style={{background:background,width:width,marginTop:marginTop}} onClick={onClick}>
        <div className='second-div' style={{WebkitTextStrokeWidth:textwidth}}>{message}</div>
    </div>)
}