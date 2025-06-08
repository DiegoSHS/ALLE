import { StockCard } from "@/features/stock";

const cards = (value: number) => {
    return (
        <StockCard key={value} />
    )
}

export function StockPage() {
    const items = Array.from({ length: 8 }, (_, k) => {
        return k
    })
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap gap-4">
                {
                    items.map(cards)
                }
            </div>
        </div>
    )
}