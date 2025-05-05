import { MySpinner } from "./Spinner.styles"

export interface Props {
  size?: number;
}

export const Spinner = ({ size = 24 }: Props) => (
  <MySpinner size={size} aria-label="loading" />
)
