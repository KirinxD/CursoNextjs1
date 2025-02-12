import FavoriteGrid from "@/components/particular/favorite/favoriteGrid";
import { Metadata } from "next/types";

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
        <div className="flex flex-wrap gap-10">
          <FavoriteGrid/>
        </div>
    </div>
  );
}
