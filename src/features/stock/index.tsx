import { Card, CardBody, CardFooter, CardHeader, Image } from "@heroui/react";

export function StockCard() {
    return (
        <div>

            <Card isPressable shadow="sm">
                <CardBody className="overflow-visible p-0">
                    <Image
                        src="/stock-image.png"
                        alt="Imagen de stock"
                        className="w-full object-cover h-[140px]"
                        radius="lg"
                        shadow="sm"
                        width="100%"
                    />
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b>Prueba de stock</b>
                    <p className="text-default-500">Precio ejemplo $40</p>
                </CardFooter>
            </Card>
        </div>
    )
}