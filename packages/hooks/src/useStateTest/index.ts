import {render} from "react"
let memoryState: any = [];
let count = 0;

// stateHook实现原理
function useStateTest (initialState) {
  memoryState[count] = memoryState[count] || initialState;
  const testCount = count
  function setState (value) {
    console.log(value, memoryState[testCount])
    memoryState[testCount] = value;
    // render()
  }
  return [memoryState[count++], setState];
}
// effectHook
function useEffect(cb, depArray) {
  const hasNoDeps = !depArray;
  const deps = memoryState[count];
  const hasChangeDeps = deps ? !depArray.every((el, i) => el === deps[i]) : true;
  if(deps || hasChangeDeps) {
    cb();
    memoryState[count] = depArray;
  }
  count ++;
}

export default useStateTest;