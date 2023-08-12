import { useState } from "react";
import { getOmen } from "../utils/getOmen";

const Question = () => {
  const [q, setQ] = useState("");
  const [stone, setStone] = useState<string | null>(null);
  const pickStone = () => {
    setStone(() => "");
    setTimeout(() => {
      const omen = getOmen(q);
      console.log("omen: ", omen);
      setStone(() => omen);
    }, 1500);
  };
  return (
    <div>
      <div>
        <h1>무엇이 궁금한가요?</h1>
        <p>예/아니오로 대답할 수 있는 질문이어야 합니다</p>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <button className="" onClick={pickStone}>
        예언 확인하기
      </button>
      <div>
        <p>결과:</p>
        {stone === null ? (
          <></>
        ) : stone === "" ? (
          <p>뒤적뒤적..</p>
        ) : (
          <p>{stone === "Urim" ? "⚪️ No" : "⚫️ Yes"}</p>
        )}
      </div>
    </div>
  );
};

export default Question;
