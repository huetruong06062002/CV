import { useEffect, useState } from "react";

const Video5 = (props) => {
  const { name } = props;
  const [age, setAge] = useState(0);

  useEffect(() => {
    setAge("Hỏi dân it");
  });

  return (
    <div>
      Example in video 5 - My name's {name} | age = {age}
    </div>
  );
};
export default Video5;
