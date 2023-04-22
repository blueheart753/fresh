'use client';

import { useState } from 'react';

export default function List() {
  const 상품 = ['토마토', '감자', '멜론', '오감자', '칸쵸'];
  const [수량, 수량변경] = useState([0, 0, 0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록이다</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={a}>
            <h4>
              {a}
              {수량[i]}
              <button
                onClick={() => {
                  let copy = [...수량];
                  copy[i]++;
                  수량변경(copy);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  let copy = [...수량];
                  copy[i]--;
                  수량변경(copy);
                }}
              >
                -
              </button>
            </h4>
          </div>
        );
      })}
    </div>
  );
}
