export class QueryEntity {
    match?: Record<string, any>;
    sort?: Record<string, 1 | -1>;
    skip?: number;
    limit?: number;
    search?: SearchEntity
}

export interface SearchEntity {
    keyword: string;
    fields: string[];
    caseSensitive?: boolean;
    exact?: boolean;
}