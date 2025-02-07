
import { CartCounter } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page counter",
  description: "Pagina que tiene un contador",
};
export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-2">
      <CartCounter value={20}/>
    </div>
  );
}
