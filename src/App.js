function App() {
  return (
    <>

      <div>Balanced Randomization</div>
      
      <div>import numpy as np</div>

      <div>def assign_to_treatment(K):</div>
      <div>    # Create a zeros vector of length K to represent the untreated</div>
      <div>    untreated = np.zeros(K)</div>

      <div># Create a ones vector of length K to represent the treated</div>
      <div>treated = np.ones(K)</div>

      <div># Concatenate the two vectors to produce a joint population</div>
      <div>overall_population = np.concatenate((treated, untreated))</div>

      <div># Randomly permute who is in which group</div>
      <div>assignment = np.random.permutation(overall_population)</div>

      <div>return assignment</div>

      <div># Example usage === instead use existing graphic</div>
      <div>K = 6</div>
      <div>result = assign_to_treatment(K)</div>
      <div>print(result)</div>

      <div># [0. 1. 1. 0. 1. 1. 0. 0. 1. 1. 0. 0.]</div>
  
    </>
  );
}

export default App;