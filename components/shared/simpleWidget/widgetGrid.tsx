"use client"
import { Coffee } from "lucide-react";
import { SimpleWidget } from "./simpleWidget";
import { useAppSelector } from "@/store";

export default function WidgetGrid() {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap items-center justify-center space-x-3 space-y-3">
      <SimpleWidget
        title={count.toString()}
        subtitle="Contador estado relacionado"
        label="Usando redux"
        icon={<Coffee size={40} />}
        href="/dashboard/counter"
      />
    </div>
  );
}
