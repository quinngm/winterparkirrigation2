import FormSection from "@/components/FormSection";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Nav name="irrigation" />
      <FormSection />
    </main>
  );
}
