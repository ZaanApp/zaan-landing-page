import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zaan - Beauty Industry Platform",
  description:
    "Learn about Zaan, the all-in-one platform connecting salons, suppliers, and beauty professionals.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About Zaan</h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          Zaan is a comprehensive platform designed specifically for the beauty
          industry, connecting salons, suppliers, and beauty professionals in
          one integrated ecosystem.
        </p>

        <p className="text-lg mb-6">
          Our mission is to empower beauty businesses with the tools they need
          to streamline operations, boost sales, and deliver exceptional
          customer experiences.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Our Story</h2>
        <p className="text-lg mb-6">
          Founded in 2020, Zaan was born from the recognition that salon owners
          and beauty professionals needed better technology solutions tailored
          to their unique needs. Our founders, with backgrounds in both
          technology and the beauty industry, set out to create a platform that
          would address the specific challenges faced by beauty businesses.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 text-lg mb-6 space-y-2">
          <li>
            <strong>Innovation:</strong> We continuously evolve our platform to
            meet the changing needs of the beauty industry.
          </li>
          <li>
            <strong>Simplicity:</strong> We believe powerful technology should
            be easy to use.
          </li>
          <li>
            <strong>Partnership:</strong> We succeed when our customers succeed.
          </li>
          <li>
            <strong>Excellence:</strong> We strive for excellence in everything
            we do.
          </li>
          <li>
            <strong>Inclusivity:</strong> We create solutions that work for
            beauty businesses of all sizes.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Our Team</h2>
        <p className="text-lg mb-6">
          The Zaan team brings together experts in software development, UX
          design, beauty industry operations, and customer support. We're united
          by our passion for creating technology that makes a real difference
          for beauty professionals.
        </p>
      </div>
    </div>
  );
}
