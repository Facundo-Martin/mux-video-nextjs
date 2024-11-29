import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="my-10 lg:my-14 mx-10 lg:mx-12">
      <div className="w-full max-w-screen-2xl mx-auto">{children}</div>
    </div>
  );
}
