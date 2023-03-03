import {
  Header,
  Features,
  HowTo,
  Partners,
  SignUpForm,
} from '../components/home'

export default function HomePage () {
  return (
    <div className="container max-w-screen-xl  md:px-0">
      <Header />
      <Features />
      <HowTo />
      <Partners />
      <SignUpForm />
    </div>
  )
}