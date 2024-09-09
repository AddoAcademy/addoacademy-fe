import { Card, CardContent } from "@/components/ui/card"

export function Ads() {
    return (
        <div>
            <Card className="w-full max-w-xs">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold"></span>
                </CardContent>
            </Card>
        </div>
    )
}