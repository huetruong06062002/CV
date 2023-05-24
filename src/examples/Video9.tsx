import { useState } from "react";

const Video9 = () => {
  let [name, setName] = useState<number | string>(10);
  name = "hoi danit";
  setName("a");
  return <div>Example video 9: Hello + {name}</div>;
};

export default Video9;
