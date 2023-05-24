const Video7 = () => {
  return <div>Video 7: Hello world44</div>;
};

//Cách 4: Object tương tự như class (đối tượng) trong OOP
//- Sử dụng Type:
type TEmployee = {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};
let employee: TEmployee = {
  firstName: "Eric",
  lastName: "Pham",
  age: 25,
  jobTitle: "Web Developer",
};
//hoặc:
//- Sử dụng interface:
interface IEmployee {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
}
let employee1: IEmployee = {
  firstName: "Eric",
  lastName: "Pham",
  age: 25,
  jobTitle: "Web Developer",
};

export default Video7;
