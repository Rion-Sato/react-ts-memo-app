import { useState, useCallback } from 'react';

type Memo = {
    id: number,
    content: string
  }

const useMemoList = () => {
    console.log("Rendering useMemoList")

    const [ memos, setMemos ] = useState<Memo[]>([]);

    const _addMemo = useCallback((content: string) => {
        const newMemos = [...memos];
        const newMemo = { id: memos.length + 1, content: content };
        newMemos.push(newMemo);
        setMemos(newMemos);
    }, [])
    
    const deleteMemo = useCallback((id: number) => {
        const newMemos = memos.filter((memo) => {
            return memo.id !== id;
        })
        setMemos(newMemos);
    }, [])

    return ({ memos, _addMemo, deleteMemo})
}

export default useMemoList;
export type { Memo };