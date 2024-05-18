/**
 * title: 中断使用
 * desc: 通过yield的方式，添加一些重点节点
 */

import React, {useState} from 'react';
import { useAsyncEffect } from 'encodeHooks';
const mockCheck = (val: string): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val.length > 0)
        }, 1000)
    })
}
export default () => {
    const [value, setValue] = useState('');
    const [pass, setPass] = useState<Boolean>();
    
    useAsyncEffect(async function *() {
        setPass(undefined);
        const result = await mockCheck(value);
        yield;
        setPass(result);
    }, [value])
    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <p>{pass === undefined && 'checking'}</p>
            <p>{pass === false && 'fail'}</p>
            <p>{pass && 'passed'}</p>
        </div>
    )
}