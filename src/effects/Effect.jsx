import { useEffect, useState } from "react";

function Effect() {
  // compnenent did mount
  //   compnent did update
  //   component unmount
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    // component did mount
    console.log("component did mount");
    //dom manipulation
    // interval
    // server
    // local storage
    // logic
    // document.title = "effect tab";
  }, []);

  useEffect(() => {
    // did mout && update  - count
    console.log("component did update");
    console.log(value);
    if (!value) {
      document.title = "effect tab";
    } else {
      document.title = value;
    }
    return () => {
      console.log("did unmout");
      //   socket
      // clearInterval
    };
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default Effect;
