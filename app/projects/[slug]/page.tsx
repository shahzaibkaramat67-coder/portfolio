import { promises } from "dns"

import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProjectDetailContent from "./ProjectDetailContent";

export default function ProjectDetail({ params }: {
    params: Promise<{ slug: string }>;
}) {





    return (

        <Suspense fallback={<p>Loading project...</p>}>
            <ProjectDetailContent params={params} />
        </Suspense>
    )
}