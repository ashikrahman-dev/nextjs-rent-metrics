
import HomeBanner from '../components/HomeBanner/HomeBanner.tsx'
import Cta from '../components/Cta/Cta.tsx'
import HomeContent from '../components/HomeContent/HomeContent.tsx'
import '@fontsource/red-hat-display'; // Import default styles
export default function Home() {
  return (
    <main>
      <HomeBanner />
      <HomeContent />
      <Cta />
    </main>
  );
}
