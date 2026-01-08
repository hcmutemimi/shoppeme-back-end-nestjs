import { QueryEntity } from "../entities";

export const PipelineStageDefaults: QueryEntity = {
    match: {},
    sort: { createdAt: -1 },
    skip: 0,
    limit: 10
};