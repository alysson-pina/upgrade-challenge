import { MyButton } from "./Button.styles";

type ButtonBaseProps = React.ComponentPropsWithoutRef<'button'>

interface Props extends ButtonBaseProps {
}

export const Button = ({ children, type, onClick }: Props) => 
  <MyButton type={type || 'button'} onClick={onClick}>{children}</MyButton>
