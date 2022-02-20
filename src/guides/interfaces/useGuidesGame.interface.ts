export interface State {
    data: Resp;
    loading: boolean
}

export interface Resp {
    _id?:         string;
    name?:        string;
    description?: string;
    game_guide?:  GameGuide;
}

export interface GameGuide {
    _id:     string;
    skills:  string[];
    summary: string[];
    list:    List[];
}

export interface List {
    title:   string;
    content: string[];
}