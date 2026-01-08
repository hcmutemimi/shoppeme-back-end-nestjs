import { PipelineStage } from "mongoose";
import { QueryDto } from "../dtos";

export function buildSearchPipeline(query: QueryDto) {
    const pipeline: PipelineStage[] = []
    
    return pipeline
    
}