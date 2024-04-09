import SignUp from "@/components/SignUp";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      //홈으로 리디렉트
      router.push({
        pathname: "/",
      });
    }
    return () => {};
  }, []);

  if (status === "loading") return <p>Loading</p>;

  if (!session)
    return (
      <>
        <SignUp />
      </>
    );
}
