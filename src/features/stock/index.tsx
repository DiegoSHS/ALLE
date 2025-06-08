import { Card, CardBody, CardFooter, Image } from "@heroui/react";

export function StockCard() {
    return (
        <Card shadow="sm">
            <CardBody className="overflow-visible p-0">
                <Image
                    className="w-full object-cover h-[140px]"
                    alt="Imagen de stock"
                    src="/mujer.jpg"
                    radius="lg"
                    shadow="sm"
                    width="100%"
                />
            </CardBody>
            <CardFooter className="text-small text-default justify-between">
                <b>Stock</b>
                <p className="text-default-500">$40</p>
            </CardFooter>
        </Card>
    )
}