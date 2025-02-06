import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const err = useRouteError() as { status?: number; statusText?: string; message?: string };
    console.error(err);

    return (
        <div id="error-page">
            <p>React router has encountered an error.</p>
            <p>
                <i>{err.status && `${err.status}: `}{err.statusText || err.message}</i>
            </p>
            <img src={"/fof.png"} alt="404 dragon" />
        </div>
    );
}