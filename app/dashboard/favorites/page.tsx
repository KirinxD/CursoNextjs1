import { getPokemonResponse, PokemonParticularI } from "@/components";
import { Metadata } from "next/types";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = Promise<{ name: string }>


export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
 
    return {  
      title: `Favorite`,
      description: `Favorite page`,
    };
  
}


export default async function PokemonPage(props: { params: Params }) {
  return (
    <div>
        <span>Pokemon favoritos</span>
    </div>
  );
}
