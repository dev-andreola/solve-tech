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

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
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

                  <Button className="text-md bg-lime-600 hover:bg-lime-700">
                    Fazer Login
                  </Button>
                  <Button className="text-md" variant="outline">
                    Criar Conta
                  </Button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:space-x-4">
        <Button className="text-md" variant="outline">
          Criar Conta
        </Button>
        <Button className="text-md bg-lime-700 hover:bg-lime-800">
          Fazer Login
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
