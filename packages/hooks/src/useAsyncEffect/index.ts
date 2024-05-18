import type {DependencyList} from 'react';
import {useEffect} from 'react';
import {isFunction} from '../utils';

function isAsyncGenerator (
    val: AsyncGenerator<void, void, void> | Promise<void>
): val is AsyncGenerator<void, void, void> {
    return isFunction(val[Symbol.asyncIterator]);
}

export default function useAsyncEffect(
    effect: () => AsyncGenerator<void, void, void> | Promise<void>,
    deps?: DependencyList
) {
    useEffect(() => {
        const e = effect();
        let canceled = false;
        async function execute() {
            if(isAsyncGenerator(e)) {
                while(true) {
                    const result = await e.next();
                    if(result.done || canceled) {
                        break;
                    }
                }
            } else {
                await e;
            }
        }

        execute();

        return () => canceled = true;
    }, deps)
}