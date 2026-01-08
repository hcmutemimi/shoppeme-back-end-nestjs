import { PipelineStage } from "mongoose";
import { PipelineStageDefaults } from "@/common/consts";
import { QueryDto } from "../dtos";
import { SearchEntity } from "../entities";
import { escapeRegex } from "../helpers";

export function buildFindAllPipeline(options: QueryDto): PipelineStage[] {
    let { sort = {}, skip = 0, page = 1, limit = 10, match = {}, search = {} as SearchEntity } = options;

    const pipeline: PipelineStage[] = [
        {
            $match: {
                ...PipelineStageDefaults.match,
                ...match
            }
        },
        {
            $sort: {
                ...PipelineStageDefaults.sort,
                ...sort
            }
        },
        {
            $skip: page && limit ? (page - 1) * Number(limit) : skip
        },
        {
            $limit: Number(limit) || PipelineStageDefaults.limit || 10
        }
    ];

    if (search.keyword) {
        const textRemovedRegex = search.exact ? `^${escapeRegex(search.keyword)}$` : escapeRegex(search.keyword)
        if (textRemovedRegex.length > 0) {
            pipeline.unshift({
                $match: {
                    $text: { $search: textRemovedRegex }
                }
            })
        }

    }

    return pipeline;
}