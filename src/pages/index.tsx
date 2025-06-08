import { QrCard } from "@/features/codescanner";
import { StockCard } from "@/features/stock";

export default function IndexPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <StockCard />
        <QrCard />
      </div>
    </section>
  );
}
