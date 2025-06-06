import { Button, Card, card, CardFooter, Image } from "@heroui/react";

export function QrCard() {
    return (
        <Card isFooterBlurred className="border-none" radius="lg">
            <Image
                alt="Aqui deberia haber un QR"
                className="object-cover"
                height={200}
                src="/mujer.jpg"
                width="100%"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">eeeee</p>
                <Button
                    className="text-tiny text-white bg-black/20"
                    color="default"
                    radius="lg"
                    size="sm"
                    variant="flat"
                >
                    Notify me
                </Button>
            </CardFooter>
        </Card>
    )


}