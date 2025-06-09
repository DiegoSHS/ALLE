import { QrCard } from "@/features/codescanner";

const cards = (value: number) => {
    return (
        <QrCard key={value} />
    )
}

export function QrPage() {
    const items = Array.from({ length: 10 }, (_, k) => {
        return k
    })
    return (
        <div className="flex flex-col items-center jusity-center">
            <div className="flex flex-wrap gap-4">
                {
                    items.map(cards)
                }
            </div>
        </div>
    )
}