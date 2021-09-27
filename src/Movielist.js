import React from "react";

function Movielist() {
  return (
    <div>
      <Route exact path="/luca">
        <Movie title="Luca" overview="adasd" />
      </Route>
    </div>
  );
}

export default Movielist;
