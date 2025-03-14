export const metadata = {
    title: "Meet Gabby | Gabby's Goats",
    description: "Learn about Gabrielle Kraft Buckman's inspiring legacy of kindness and service.",
};

import Legacy from "@/components/legacy";
import Newsletter from "@/components/newsletter";
import BackgroundParticles from "@/components/background-particles";

export default function MeetGabbyPage() {
    return (
        <>
            <BackgroundParticles />
            <Legacy isStandalonePage={true} />
            <Newsletter />
        </>
    );
}