import './App.css';

export default function App() {

let x = 0;

let output =[
  '0. 1. 1. 0. 1. 1. 0. 0. 1. 1. 0. 0.',
  '1. 0. 1. 1. 0. 1. 0. 0. 1. 1. 0. 0.',
  '0. 1. 0. 0. 1. 0. 1. 0. 1. 1. 1. 0.',
  '0. 1. 1. 0. 1. 1. 0. 1. 0. 1. 0. 0.',
  '1. 0. 1. 0. 1. 1. 0. 0. 1. 0. 0. 1.',
  '0. 1. 0. 0. 1. 1. 1. 1. 0. 0. 1. 0.',
]



  return (
    <>

      <div className='indent'>Balanced Randomization</div>
      <br></br>

      <div className='code'>

        <div><span className='sB'>import</span> numpy <span className='sB'>as</span> np</div>
        <br></br>
        <div><span className='sB'>def</span> assign_to_treatment<span className='sY'>(</span>K<span className='sY'>)</span>:</div>
        <div className='indent'><span className='sG'># Create a zeros vector of length K to represent the untreated</span></div>
        <div className='indent'>untreated = np.zeros<span className='sY'>(</span>K<span className='sY'>)</span></div>
        <br></br>
        <div className='indent'><span className='sG'># Create a ones vector of length K to represent the treated</span></div>
        <div className='indent'>treated = np.ones<span className='sY'>(</span>K<span className='sY'>)</span></div>
        <br></br>
        <div className='indent'><span className='sG'># Concatenate the two vectors to produce a joint population</span></div>
        <div className='indent'>overall_population = np.concatenate<span className='sY'>(</span><span className='sP'>(</span>treated, untreated<span className='sP'>)</span><span className='sY'>)</span></div>
        <br></br>
        <div className='indent'><span className='sG'># Randomly permute who is in which group</span></div>
        <div className='indent'>assignment = np.random.permutation<span className='sY'>(</span>overall_population<span className='sY'>)</span></div>
        <br></br>
        <div className='indent'><span className='sB'>return</span> assignment</div>
        <br></br>
        <div><span className='sG'># Example usage === instead use existing graphic</span></div>
        <div>K = 6</div>
        <div>result = assign_to_treatment<span className='sY'>(</span>K<span className='sY'>)</span></div>
        <div>print<span className='sY'>(</span>result<span className='sY'>)</span></div>
        <br></br>
      </div>
      <br></br>
      <div className='indent'>{output[0]}</div>
    </>
  );
}