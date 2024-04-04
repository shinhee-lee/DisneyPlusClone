import { Session } from "next-auth";
import React from "react";

interface Props {
  session: Session;
}

function SignedInHeader({ session }: Props) {
  return <div>SignedInHeader</div>;
}

export default SignedInHeader;
