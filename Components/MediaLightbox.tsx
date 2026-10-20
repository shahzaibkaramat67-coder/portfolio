
"use client";

import { useEffect, useState } from "react";
import { X, Maximize2, PlayCircle } from "lucide-react";

type MediaLightboxProps = {
    type: "image" | "video";
    src: string;
    title: string;
    alt?: string;
    className?: string;
    previewClassName?: string;
};

export default function MediaLightbox({
    type,
    src,
    title,
    alt,
    className = "",
    previewClassName = "",
}: MediaLightboxProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label={`Enlarge ${title}`}
                title="Click to enlarge"
                className={`group relative block w-full cursor-zoom-in overflow-hidden text-left ${className}`}
            >
                {type === "image" ? (
                    <img
                        src={src}
                        alt={alt || title}
                        loading="lazy"
                        className={previewClassName}
                    />
                ) : (
                    <div className="relative">
                        <video
                            src={src}
                            preload="metadata"
                            muted
                            playsInline
                            className={previewClassName}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/40">
                            <PlayCircle
                                size={54}
                                strokeWidth={1.4}
                                className="text-white drop-shadow-lg transition group-hover:scale-110"
                            />
                        </div>
                    </div>
                )}

                <span className="absolute right-3 top-3 rounded-lg border border-white/15 bg-black/65 p-2 text-white opacity-0 transition group-hover:opacity-100">
                    <Maximize2 size={17} />
                </span>
            </button>

            {isOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={title}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-8"
                >
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close enlarged media"
                        className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-[#191B23] p-3 text-white transition hover:bg-[#30313b] sm:right-7 sm:top-7"
                    >
                        <X size={23} />
                    </button>

                    <div
                        onClick={(event) => event.stopPropagation()}
                        className="flex max-h-[92vh] w-full max-w-7xl flex-col items-center gap-3"
                    >
                        {type === "image" ? (
                            <img
                                src={src}
                                alt={alt || title}
                                className="max-h-[82vh] max-w-full rounded-lg object-contain"
                            />
                        ) : (
                            <video
                                src={src}
                                controls
                                autoPlay
                                playsInline
                                className="max-h-[82vh] w-full rounded-lg bg-black object-contain"
                            >
                                Your browser does not support video playback.
                            </video>
                        )}

                        <p className="max-w-full text-center text-sm text-gray-300">
                            {title}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
