/**
 * title: 基础用法
 * desc: 自动合并对象。
 */

import React from 'react';
import { useStateTest } from 'encodeHooks';

const testState = () => 
  {
    const [state, setState] = useStateTest(0);
    return <div>
      <p>{state}</p>
      <p>
        <button type="button" onClick={() => setState(state + 2)}>
          test
        </button>
      </p>
    </div>
  ;
};
export default testState;