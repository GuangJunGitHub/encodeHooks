---
nav:
  path: /hooks
---

# useAsyncEffect

支持 useEffect 的异步操作

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## 中断使用

<code src="./demo/demo2.tsx" />

## API

```typescript
function useAsyncEffect(
    effect: () => AsyncGenerator<void, void, void> | Promise<void>,
    deps?: DependencyList
)
```