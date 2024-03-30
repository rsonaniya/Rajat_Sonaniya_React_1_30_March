import React from "react";

export default function Counter({ count, onChangeCount }) {
  return (
    <div>
      <h3>Your Current Count is: {count}</h3>
      {count === 0 && <p className="err">Error: Cannot Go Below 0</p>}
      <div>
        <button
          onClick={() => onChangeCount("-")}
          className="btn btn-dec"
          disabled={count === 0}
        >
          Decrement
        </button>
        <button onClick={() => onChangeCount("+")} className="btn btn-inc">
          Increment
        </button>
        {count > 10 && (
          <button className="btn btn-zero" onClick={() => onChangeCount(0)}>
            Go Back to 0
          </button>
        )}
      </div>
    </div>
  );
}
