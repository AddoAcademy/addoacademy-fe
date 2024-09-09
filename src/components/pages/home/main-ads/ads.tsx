import { Card, CardContent } from "@/components/ui/card"

export function Ads() {
    let x = 0
    return (
        <div>
            <Card className="w-full max-w-xs">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{x = + 1}</span>
                </CardContent>
            </Card>
        </div>
    )
}