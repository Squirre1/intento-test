import { FunctionalComponent, h } from "preact";
import useSWR from "swr";
import axios from "axios";

import { Languages } from "../../model";

import * as style from "./style.css";


const API = "/languages";
const fetcher = async (): Promise<Languages> => {
    const response = await axios.get(API);
    return response.data;
};

interface Props {
    onLanguageChange: (lang: string) => void;
}

const LanguageSelector: FunctionalComponent<Props> = (props: Props) => {
    const { data: languages, error } = useSWR(API, fetcher);

    if (error) return <div>{error.message}</div>;
    if (!languages) return <div class={style.language}>loading...</div>;

    const onLanguageChange = (e: any) => props.onLanguageChange(e.target.value);

    return (
        <select class={style.language} onChange={onLanguageChange}>
            <option selected disabled>
                Choose language
            </option>
            {languages.map(l => (
                <option key={l.intento_code} value={l.intento_code}>
                    {l.iso_name}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelector;
