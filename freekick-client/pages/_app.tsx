import "../styles/globals.css";

//React imports
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

//Near imports
import { initNear } from "../lib/near-setup";
import Layout from "@/components/Layout";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    const [isLoading, setIsLoading] = useState(true);

    //Loading the NEAR API and setting up the wallet and contract
    //At the start of the app
    useEffect(() => {
        initNear();
        setIsLoading(false);
    }, []);

    return isLoading ? (
        <div className="center-div">
            <ClipLoader color={"#000"} loading={true} size={50} />
        </div>
    ) : (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
