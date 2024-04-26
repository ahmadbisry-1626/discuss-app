import { signIn, signOut } from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/Profile";
import { Button } from "@nextui-org/react";

export default async function Home() {
  const session = await auth()

  return (
    <div className='min-h-screen flex items-center justify-center w-full gap-4'>
      {session?.user ?
        <div className="flex items-center justify-center flex-col gap-4">
          <h1 className="font-semibold">
            You Logged in
          </h1>
          <form action={signOut}>
            <Button type="submit" color="primary" variant="ghost">Logout</Button>
          </form>
        </div>
        :
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-semibold text-[32px]">
            You Logged out
          </h1>
          <form action={signIn}>
            <Button type="submit" color="primary" variant="ghost">Login</Button>
          </form>
        </div>
      }

      <Profile />
    </div>
  )
}
