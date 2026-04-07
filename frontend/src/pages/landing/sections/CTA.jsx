/**
 * CTA section :
 * Used in landing page
 * Ensures clear user guidance and action prompt
 */

import React from "react";
import LinkButton from "../../../components/UI/buttons/LinkButton";

export default function CTA() {
  return (
    <section className="bg-(--secondary) border-t border-(--border-default) py-20">
      <div className="max-w-4xl mx-auto px-6 text-center text-(--text-secondary)">
        <h2 className="text-4xl font-bold mb-6">Start now !</h2>

        <p className="mb-8 text-lg opacity-90">
          Make your student life easier with us
        </p>

        <LinkButton text="Click Here!" href={"/login/"} className="text-3xl" />
      </div>
    </section>
  );
}
