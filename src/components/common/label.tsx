export default function Label({ name }: { name: string }) {
  return (
    <label htmlFor={name}>{name}</label>
  )
}