import Input from "./common/input";

export default function BasicUser() {

  return (
    <div className="flex justify-center my-3 w-3/7 text-lime-200">
      <div className="w-1/4 flex items-center justify-between mx-10">
        {/* <label htmlFor='name'>Person Name</label> */}
        <Input name="name" placeholder="Enter Person Name" />
        {/* <input type='text' name='name' id='name' className="my-3 opacity-80"></input> */}
      </div>
      <div className="w-1/4 flex items-center justify-between">
        <label htmlFor='search'>Select Customer</label>
        <input type='text' name='search' id='search' className="my-3 opacity-80"></input>
      </div>
    </div>
  )
}