import { FunctionalComponent, h } from "preact";
import { useMemo } from "preact/hooks";
import useSWR from "swr";
import axios from "axios";

import { TranslationContext, Translation as TranslationResponse } from "../../model";

import * as style from "./style.css";


const API = "/";
const fetcher = async (url: string, context: TranslationContext): Promise<TranslationResponse> => {
    const body = {
        context,
        service: {
            provider: "ai.text.translate.microsoft.translator_text_api.3-0"
        }
    };

    const response = await axios.post(API, body);
    return response.data;
};

interface Props {
    text: string;
    lang: string;
}

const Translation: FunctionalComponent<Props> = ({ text, lang }: Props) => {
    const params = useMemo(() => ({ text, to: lang }), [text, lang]);

    const { data, error } = useSWR(() => [API, params], fetcher);

    if (error) return <div>{error.message}</div>;
    if (!data) return <div>loading...</div>;

    return (
        <div class={style.translation}>
            <div class={style.time}>Time: {data.meta.timing.total}</div>
            <div class={style.result}>
                {data.results.map((r, i) => <p key={i}>{r}</p>)}
            </div>
        </div>
    );
};

export default Translation;
