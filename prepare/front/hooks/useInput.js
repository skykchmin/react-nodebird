import { useState, useCallback } from 'react';

export default (initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback((e) => {//컴포넌트에 props로 넘겨주는 함수는 useCallback을 꼭 써달라
        setValue(e.target.value);
    }, []);
    return [value, handler]; // useState가 value,setValue를 return해주는데 useState와 useCallback을 합친거니 return을 이런식으로 해준다.

}