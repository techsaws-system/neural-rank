"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ClientsSectionContent } from "@/contents/home-page-content";

function ClientsSection() {
  return (
    <section className="section-padding-standard layout-standard">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-14 w-max"
        >
          {[...ClientsSectionContent, ...ClientsSectionContent].map(
            (logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="Partner logo"
                className="h-6 w-auto opacity-70 hover:opacity-100 transition"
              />
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default ClientsSection;
