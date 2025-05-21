import Cta from "@/components/Cta/Cta";
import WhyRentMetricsBanner from "@/components/WhyRentMetricsBanner/WhyRentMetricsBanner";
import WhyRentMetricsContent from "@/components/WhyRentMetricsContent/WhyRentMetricsContent";

export default function WhyRentmetrics() {
    return (
        <main>
            <WhyRentMetricsBanner />
            <WhyRentMetricsContent />

            <Cta />
        </main>
    );
}
