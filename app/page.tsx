import Hero from "@/components/Hero";
import homeImg from "@/images/home.jpg";

export default function Home() {
    return (
        <Hero
            title="professional cloud hosting"
            imgData={homeImg}
            imgAlt="car factory"
        />
    );
}
