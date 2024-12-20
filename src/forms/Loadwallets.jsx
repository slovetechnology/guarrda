import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';


function Loadwallets({ NextSession, wallets }) {
    const [width, setWidth] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const totalCounts = wallets.length;
        let counts = 0;

        const interval = setInterval(() => {
            if (counts >= totalCounts) {
                clearInterval(interval);
                NextSession();
                return;
            }
            counts++;
            setCounter(counts);
            setWidth((counts / totalCounts) * 100);
        }, 1000);

        return () => clearInterval(interval);
    }, [NextSession]);


    return (
        <>
            <div className="text-center">Creating {wallets[counter - 1]?.short} wallet</div>
            <Spinner />
            <div className="relative w-[25rem] mx-auto h-1.5 mt-5 bg-slate-200 rounded-full">
                <div
                    className="bg-primary h-1.5 rounded-full absolute transition-all ease-linear top-0 left-0"
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </>
    );
}

export default Loadwallets;
