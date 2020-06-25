import { FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import { useDebounce } from "use-debounce";

import Translation from "../translation";
import LanguagesSelector from "../languagesSelector";

import * as style from "./style.css";


const Translator: FunctionalComponent = () => {
    const [lang, setLang] = useState("");
    const [text, setText] = useState("");
    const [debouncedText] = useDebounce(text, 1000);

    const onTextChange = (e: any) => setText(e.target.value);
    const onLanguageChange = (lang: string): void => setLang(lang);

    return (
        <div class={style.translator}>
            <textarea onChange={onTextChange} />
            <LanguagesSelector onLanguageChange={onLanguageChange} />
            {text && lang && <Translation text={debouncedText} lang={lang} />}
        </div>
    );
};

export default Translator;
