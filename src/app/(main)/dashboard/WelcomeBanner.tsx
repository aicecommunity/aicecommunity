"use client";

import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

type BannerType = string | StaticImageData;

function isStaticImageData(banner: BannerType): banner is StaticImageData {
  return typeof banner !== "string";
}

export default function WelcomeBanner({ banner }: { banner: BannerType }) {
  const bannerSrc = isStaticImageData(banner) ? banner.src : banner;

  return (
    <motion.div
      className="mt-6 rounded-2xl overflow-hidden shadow-md bg-center bg-cover w-full h-[150px] flex flex-col justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ backgroundImage: `url(${bannerSrc})` }}
    >
      <div className="flex flex-col px-6 text-white">
        <h2 className="text-2xl font-bold">Welcome back, Ngozi!</h2>
        <p>Keep pushing — your progress shapes Africa&apos;s future.</p>
      </div>
    </motion.div>
  );
}
