import { ReactNode, FunctionComponent } from "react";
import Header from "./header";
type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-5">
      <Header></Header>
      {children}
    </div>
  );
};

export default Container;
