import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [])
    return (
        <div className="not-found">
            <h1>The page not found...</h1>
        </div>
    );
}

export default NotFound;