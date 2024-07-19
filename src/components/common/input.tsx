import Label from "./label";

export default function Input({ name, placeholder }: { name: string, placeholder: string }) {
  return (
    <>
      <Label name={name} />
      <input type='text' name={name} id={name} placeholder={placeholder} className="my-3 opacity-80"></input>
    </>
  )
}