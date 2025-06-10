import { StockCard } from "@/features/stock";

export interface Stock {
    id: number;
    name: string;
    description: string;
}

interface StockCardsProps {
    items: Stock[]
}

const StockCards = ({ items }: StockCardsProps) => {
    return (
        <>
            {
                items.map((item) => {
                    return (
                        <StockCard key={item.id} {...item}></StockCard>
                    )
                })
            }
        </>
    )
}

export function StockPage() {
    const items = Array.from({ length: 8 }, (_, k) => {
        return {
            id: k,
            name: `Item ${k + 1}`,
            description: `Description for item ${k + 1}`,
        }
    })
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap gap-4">
                <StockCards items={items} />
            </div>
        </div>
    )
}