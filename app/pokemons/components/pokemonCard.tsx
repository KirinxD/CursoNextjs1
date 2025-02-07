import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  id: string;
}

export default function PokemonCard({ name, id }: Props) {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            height={32}
            width={32}
            alt="Pokemon Image"
            className="h-24 w-24 text-white rounded-full mx-auto"
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link href={`/dashboard/pokemon/${id}`} prefetch={false} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Ver mas
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/account/campaigns"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-rose-600">
              <Heart height={25} width={25}/>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Favorite
              </p>
              <p className="text-xs text-gray-500">no es favorito</p>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
