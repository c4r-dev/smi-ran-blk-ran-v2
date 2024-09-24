import './App.css';

export default function App() {

  return (
    <>

      <div>Balanced Randomization</div>
      <br></br>

      <div className='code'>

        <div><span className='sB'>import</span> numpy <span className='sB'>as</span> np</div>
        <br></br>
        <div><span className='sB'>def</span> assign_to_treatment<span className='sY'>(</span>K<span className='sY'>)</span>:</div>
        <div><span className='sG'># Create a zeros vector of length K to represent the untreated</span></div>
        <div>    untreated = np.zeros<span className='sY'>(</span>K<span className='sY'>)</span></div>
        <br></br>
        <div><span className='sG'># Create a ones vector of length K to represent the treated</span></div>
        <div>treated = np.ones<span className='sY'>(</span>K<span className='sY'>)</span></div>
        <br></br>
        <div># Concatenate the two vectors to produce a joint population</div>
        <div>overall_population = np.concatenate((treated, untreated))</div>
        <br></br>
        <div># Randomly permute who is in which group</div>
        <div>assignment = np.random.permutation(overall_population)</div>
        <br></br>
        <div>return assignment</div>
        <br></br>
        <div># Example usage === instead use existing graphic</div>
        <div>K = 6</div>
        <div>result = assign_to_treatment(K)</div>
        <div>print(result)</div>
        <br></br>
        <div># [0. 1. 1. 0. 1. 1. 0. 0. 1. 1. 0. 0.]</div>

      </div>
    </>
  );
}