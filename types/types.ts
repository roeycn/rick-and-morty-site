export interface AllResults {
    info:    Info;
    results: Result[];
    results_2: Result[];
    results_3: Result[];
}

export interface EpisodesResults {
    info:    Info;
    results: Result[];
}

export interface EpisodesResultOnly {
    results: Result;
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Result {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    Date;
}
