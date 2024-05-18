/**
 * title: 基础用法
 * desc: effect中异步加载
 */

import React, {useState} from 'react';
import { useAsyncEffect } from 'encodeHooks';
const mockCheck = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 3000)
    })
}
export default () => {
    const [pass, setPass] = useState<Boolean>();
    
    useAsyncEffect(async () => {
        setPass(await mockCheck())
    })
    
    return (
        <div>
            <p>{pass === undefined && 'checking'}</p>
            <p>{pass && 'check passed'}</p>
        </div>
    )

}