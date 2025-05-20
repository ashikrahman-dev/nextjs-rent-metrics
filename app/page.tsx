import "@fontsource/red-hat-display"; // Import default styles
import Cta from "../components/Cta/Cta";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import HomeContent from "../components/HomeContent/HomeContent";
export default function Home() {
    return (
        <main>
            <HomeBanner />
            <HomeContent />
            <Cta />
        </main>
    );
}
