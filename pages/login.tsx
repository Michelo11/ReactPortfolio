import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default function Login() {
  return (
    <div
      className={
        "bg-gray-900 text-white flex-col justify-center items-center flex m-auto h-screen " +
        inter.className
      }
    >
      <h1 className="font-extrabold text-4xl">Restricted Page</h1>
      <p>Please login in order to access the requested page.</p>
      <button className="rounded-xl bg-[#235bdd] h-10 mt-2 w-40" onClick={() => signIn("discord")}>
        Login
      </button>
    </div>
  );
}
