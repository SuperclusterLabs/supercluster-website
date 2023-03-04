type Props = {
  text: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  primary: boolean,
  marginLeft?: boolean,
  marginRight?: boolean,
}

export default function Button(props: Props) {
  return (
    <button
      className={`px-7 py-5 font-bold rounded-full drop-shadow sm:ml-0 sm:mr-0 sm:mt-4 md:mt-0 lg:mt-0
      ${props.primary ? 'bg-supercluster-primary text-black' : 'outline outline-1 bg-none text-supercluster-primary'}
      ${props.marginLeft ? 'lg:ml-4' : ''}
      ${props.marginRight ? 'lg:mr-4' : ''}`}
      onClick={props.onClick}>
      {props.text}
    </button>
  )
}
