import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { LuAlignJustify } from "react-icons/lu";

import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default async function ActionButtons() {
  const { userId } = auth();

  const user = await currentUser();

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="md:hidden">
        {userId ? (
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger>
            <LuAlignJustify size={25} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href={"/"}>SolveTech</Link>
                  <Link href={"/"}>Soluções</Link>
                  <Link href={"/"}>Contato</Link>

                  {/* {userId ? (
                    <div className="flex items-center justify-between gap-4">
                      <h2>Olá {user.firstName}</h2>
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-start gap-4">
                      <Link href={"/sign-in"}>
                        <Button className="text-md bg-lime-700 hover:bg-lime-800">
                          Fazer Login
                        </Button>
                      </Link>
                      <Link href={"/sign-up"}>
                        <Button className="text-md" variant="outline">
                          Criar Conta
                        </Button>
                      </Link>
                    </div>
                  )} */}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      {userId ? (
        <div className="items-center justify-between gap-4 hidden md:flex">
          <h2>Olá {user.firstName}</h2>
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <div className="hidden md:flex md:space-x-4">
          <Link href={"/sign-in"}>
            <Button className="text-md bg-lime-700 hover:bg-lime-800">
              Fazer Login
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button className="text-md" variant="outline">
              Criar Conta
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
