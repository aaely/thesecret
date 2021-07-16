import { useSetRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import ws from '../ws';

const useWebsocket = () => {
    
    useEffect(() => {
        ws.onmessage = ({ data }: any) => {
            const message = JSON.parse(data);
            switch(message.type){
                default: {
                    break;
                }
            }
        };

    return() => ws.close()
    }, []);

    return null;
} 

export default useWebsocket;