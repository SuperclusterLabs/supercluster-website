type Props = {
  text: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  primary: boolean
}

export default function Button(props: Props) {
  return (
    <button
      className={`px-8 py-6 font-bold rounded-full 
      ${props.primary ? 'bg-supercluster-primary text-black' : 'outline outline-1 bg-none text-supercluster-primary'}`}
      onClick={props.onClick}>
      {props.text}
    </button>
  )
}
