import Bounded from "@/components/Bounded";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
    return (
        <Bounded>
            <Image
                src="/about-hero.png"
                width={600}
                height={400}
                alt="a man looking at the sky full of stars at night sitting on the roof of the van"
                className="w-full"
            />

            <div className="flex flex-col gap-y-3">
                <h2 className="font-bold text-fs-700">
                    Don&apos;t squeeze in a sedan when you could relax in a van.
                </h2>

                <p>
                    Our mission is to enliven your road trip with the perfect
                    travel van rental. Our vans are recertified before each trip
                    to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>

                <p>
                    Our team is full of vanlife enthusiasts who know firsthand
                    the magic of touring the world on 4 wheels.
                </p>
            </div>

            <div className="bg-brand-pale flex flex-col p-5 gap-y-3 rounded-sm">
                <p className="font-semibold">Your Destination is waiting.</p>
                <p className="font-semibold">Your Van is Ready.</p>
                <Link href="/vans">
                    <Button>Explore our vans</Button>
                </Link>
            </div>
        </Bounded>
    );
};

export default AboutPage;
