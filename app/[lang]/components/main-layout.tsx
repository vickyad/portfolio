import Header from "./header";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
  dict: any;
};

export default function MainLayout({ children, dict }: Props) {
  return (
    <div>
      <Header dict={dict} />
      <div>{children}</div>
      <Footer dict={dict} />
    </div>
  );
}
