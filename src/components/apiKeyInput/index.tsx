import { FunctionalComponent, h } from "preact";
import { route } from "preact-router";
import Cookies from "js-cookie";


const ApiKeyInput: FunctionalComponent = () => {
    const onTokenPaste = (e: any) => {
        const apikey = e.clipboardData.getData("Text");

        Cookies.set("apikey", apikey);
        route("/main");
    };

    return <input onPaste={onTokenPaste} />;
};

export default ApiKeyInput;
