import { memo } from "react";
import type { FC } from "react";
import type { Memo } from "../hooks/useMemoList";

type Props = {
    memos: Memo[],
    deleteMemo: (id: number) => void;
}

const MemoList: FC<Props> = memo(({ memos, deleteMemo }) => {

    return (
        <div>
        <h3>メモ一覧</h3>
        <ul>
            {memos.map((memo) => {
            return (
                <li key={memo.id}>
                {memo.content}
                <button onClick={() => deleteMemo(memo.id)}>削除</button>
                </li>
            );
            })}
        </ul>
        </div>
    );
});

export default MemoList;
