import {Card,CardFooter,CardHeader} from "@/components/ui/card";
import { BackButton } from "@/components/auth/back-button";
import { Header } from "@/components/auth/header";

export function ErrorCard(){
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header
                    label="Oops! Something went wrong!"
                />
            </CardHeader>
            <CardFooter>
                <BackButton
                    label="Back to login"
                    href="/auth/login"
                />
            </CardFooter>
        </Card>
    )
}