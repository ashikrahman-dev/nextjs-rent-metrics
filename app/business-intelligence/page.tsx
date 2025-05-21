import Image from "next/image";
import actionableInsights from "/public/assets/images/actionable-insights-img.svg";
import fasterReporting from "/public/assets/images/better-data-faster-img.svg";

import BusinessIntelligenceBanner from "@/components/BusinessIntelligenceBanner/BusinessIntelligenceBanner";
import Cta from "@/components/Cta/Cta";
import { empowerInnovationData, rentlyticsData } from "@/utilities/data/data";

export default function BusinessIntelligence() {
    return (
        <main>
            <BusinessIntelligenceBanner />

            <section className="xl:py-[120px] lg:py-[100px] md:py-20 sm:py-16 py-14">
                <div className="container mx-auto md:px-0 px-4">
                    <div className="flex flex-col xl:gap-[100px] lg:gap-20 md:gap-16 gap-12">
                        <div className="grid grid-cols-12 sm:gap-6 gap-8 items-center">
                            <div className="sm:col-span-6 col-span-full">
                                <Image
                                    src={actionableInsights}
                                    alt="Image"
                                    className="max-w-full"
                                    width={100}
                                    height={100}
                                    style={{
                                        maxWidth: "548px",
                                        width: "100%",
                                        height: "auto",
                                    }}
                                />
                            </div>
                            <div className="sm:col-span-6 col-span-full">
                                <h3 className="xl:text-[32px] lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                                    Actionable Insights That Power Performance
                                </h3>
                                <p className="xl:text-lg md:text-base text-sm text-dark-2">
                                    Whether you’re looking to raise money, win
                                    more business or differentiate in the
                                    market, RentMetrics Business Intelligence
                                    2.0 gives you the real-time visibility you
                                    need to get results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-main-shade-2 xl:py-[120px] lg:py-[100px] md:py-20 sm:py-16 py-14">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        <div className="sm:col-span-6 col-span-full sm:order-1 order-2">
                            <h3 className="xl:text-[32px] lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                                Better Data. Faster Reporting. Higher NOI.
                            </h3>
                            <p className="xl:text-lg md:text-base text-sm text-dark-2">
                                Download the RentMetrics Business Intelligence
                                2.0 product sheet to learn more.
                            </p>
                        </div>

                        <div className="sm:col-span-6 col-span-full sm:order-2 order-1 text-center">
                            <Image
                                src={fasterReporting}
                                alt="Image"
                                className="max-w-full mx-auto"
                                width={100}
                                height={100}
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: "100%",
                                    maxWidth: "495px",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="xl:py-[120px] lg:py-[100px] md:py-20 sm:py-16 py-14">
                <div className="container mx-auto md:px-0 px-4">
                    <div className="text-center">
                        <h2 className="xl:max-w-[705px] lg:max-w-[600px] max-w-[400px] mx-auto 2xl:text-[40px] xl:text-4xl lg:text-3xl sm:text-2xl text-xl leading-[1.3] font-semibold text-dark-1 text-center pb-8">
                            With Rentlytics Business Intelligence 2.0, You
                            Can...
                        </h2>
                        <div className="relative before:absolute before:content-[''] before:w-7.5 before:h-[3px] before:bg-main before:rounded-[30px] before:left-[calc(50%-15px)] before:bottom-0"></div>
                    </div>
                    {/* Heading end */}
                    <div className="flex flex-col xl:gap-[100px] lg:gap-20 md:gap-16 gap-12 lg:mt-[60px] mt-10 md:px-4">
                        <div className="grid grid-cols-12 md:gap-7.5 sm:gap-5 gap-4 items-center">
                            {rentlyticsData.map((item) => (
                                <div
                                    key={item.id}
                                    className="lg:col-span-4 sm:col-span-6 col-span-full bg-white p-6 rounded-2xl shadow-[0px_32px_32px_0px_rgba(11,25,44,0.06)] h-full"
                                >
                                    <Image
                                        src={item.icon}
                                        alt="icon"
                                        className="xl:w-[72px] lg:w-[60px] md:w-12.5 sm:w-10 w-9"
                                        width={100}
                                        height={100}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <h4 className="mt-6 xl:text-2xl lg:text-[22px] md:text-xl text-base text-dark-1 font-bold leading-[1.3] mb-3">
                                        {item.title}
                                    </h4>
                                    <p className="text-dark-2 xl:text-lg lg:text-base text-sm leading-[1.4]">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="xl:py-[120px] lg:py-[100px] md:py-20 sm:py-16 py-14 bg-main-shade">
                <div className="container mx-auto md:px-0 px-4">
                    <div className="text-center">
                        <h2 className="xl:max-w-[705px] lg:max-w-[600px] max-w-[500px] mx-auto 2xl:text-[40px] xl:text-4xl lg:text-3xl sm:text-2xl text-xl leading-[1.3] font-semibold text-dark-1 text-center mb-4">
                            Empower Innovation With Industry-Leading Technology
                        </h2>
                        <p className="xl:text-lg md:text-base text-sm text-dark-2 pb-8 max-w-[700px] mx-auto">
                            Rentlytics is the only company that’s 100% focused
                            on bringing innovative data analytics solutions to
                            the multifamily real estate industry.
                        </p>
                        <div className="relative before:absolute before:content-[''] before:w-7.5 before:h-[3px] before:bg-main before:rounded-[30px] before:left-[calc(50%-15px)] before:bottom-0"></div>
                    </div>
                    {/* Heading end */}
                    <div className="flex flex-col xl:gap-[100px] lg:gap-20 md:gap-16 gap-12 lg:mt-[60px] mt-10">
                        <div className="grid grid-cols-12 md:gap-7.5 sm:gap-5 gap-4 items-center">
                            {empowerInnovationData.map((item) => (
                                <div
                                    key={item.id}
                                    className="lg:col-span-4 sm:col-span-6 col-span-full bg-white p-6 rounded-2xl shadow-[0px_32px_32px_0px_rgba(11,25,44,0.06)] h-full"
                                >
                                    <Image
                                        src={item.icon}
                                        alt="icon"
                                        className="xl:w-[72px] lg:w-[60px] md:w-12.5 sm:w-10 w-9"
                                        width={100}
                                        height={100}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <h4 className="mt-6 xl:text-2xl lg:text-[22px] md:text-xl text-base text-dark-1 font-bold leading-[1.3] mb-3">
                                        {item.title}
                                    </h4>
                                    <p className="text-dark-2 xl:text-lg lg:text-base text-sm leading-[1.4]">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Cta />
        </main>
    );
}
