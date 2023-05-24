interface IProps {
  //required => ?: optional
  name?: string;
  age?: number;
  address?: string;
}

const Video13 = (props: IProps) => {
  //gán giá trị mặc định cho props
  const { name = "Hỏi Dân IT", age, address } = props;

  //   const person = {
  //     name: "Eric",
  //     age: 25,
  //     address: "Hỏi Dân IT",
  //   };

  return (
    <div>
      Video 13 - {name} - {age} - {address}
    </div>
  );
};

export default Video13;
