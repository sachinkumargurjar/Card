import React from "react";

const HistoryPage = ({ history }) => {
  return (
    <>
      <h3>History ...</h3>
      <div className="history_section" style={{ marginTop: "1rem" }}>
        {history.map((item, idx) => {
          return (
            <div key={idx}>
              {" "}
              {item.name} {item.time}{" "}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HistoryPage;
