type Timing = {
    total: number;
    providers: number;
};

type TranslationMeta = {
    timing: Timing;
};

export type Translation = {
    results: string[];
    meta: TranslationMeta;
};

export type TranslationContext = {
    text: string;
    to: string;
};
