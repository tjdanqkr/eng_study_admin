import { ReactNode, FunctionComponent } from "react";
import Header from "./header";
type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto px-5 pt-5">{children}</div>
    </>
  );
};

export default Container;
