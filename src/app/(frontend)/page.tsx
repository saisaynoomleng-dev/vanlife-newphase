import Bounded from "@/components/Bounded";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <Bounded className="relative">
            <div className="absolute z-0">
                <Image src="/home-hero.png" alt="" width={760} height={1200} />
            </div>

            <div className="relative bg-brand-black-100/50 z-50" />

            <div className="relative z-50 text-brand-white flex flex-col gap-y-3 py-5 px-3 justify-center">
                <h1 className="text-fs-900 font-semibold capitalize leading-[1]">
                    You got the travel plans, we got the travel vans.
                </h1>
                <p>
                    Add adventure to your life by joining the #vanlife movement.
                    Rent the perfect van to make your perfect road trip.
                </p>

                <Link href="/vans">
                    <Button className="bg-brand-orange/90 hover:bg-brand-orange/100 font-semibold w-full">
                        Find Your Vans
                    </Button>
                </Link>
            </div>
        </Bounded>
    );
}
