import { useState } from 'react';
import useMemoList from '../hooks/useMemoList';
import MemoList from './MemoList';
import './App.css';

import type { FC, ChangeEvent } from 'react';

const App: FC = () => {
  const { memos, _addMemo, deleteMemo} = useMemoList();
  const [ content, setContent ] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }

  const addMemo = () => {
    console.log("addMemo")
    _addMemo(content);
    setContent("");
  }

  return (
    <>
      <h1>簡単メモアプリ</h1>
      <div>
        <input type="text" onChange={onChange} value={content}/>
        <button onClick={addMemo}>追加</button>
      </div>
      <MemoList memos={memos} deleteMemo={deleteMemo}/>
    </>
  );
}

export default App;