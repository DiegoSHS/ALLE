import { QrCard } from "@/features/codescanner";

export interface QrItem {
    id: string;
    name: string;
    description: string;
}

interface QrCardsProps { items: QrItem[] }

const QrCards = ({ items }: QrCardsProps) => {
    return (
        <>
            {
                items.map((item) => {
                    return (
                        <QrCard key={item.id} {...item}></QrCard>
                    )
                })
            }
        </>
    )
}

export function QrPage() {
    const items = Array.from({ length: 10 }, (_, k) => {
        return {
            id: `k`,
            name: `item ${k + 1}`,
            description: `Description for item ${k + 1}`,
        }
    })
    return (
        <div className="flex flex-col items-center jusity-center">
            <div className="flex flex-wrap gap-4">
                <QrCards items={items}></QrCards>
            </div>
        </div>
    )
}