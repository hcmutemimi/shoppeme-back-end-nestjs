// params.dto.ts
import { IsNumberString, IsOptional } from 'class-validator';
class SearchDto {
  keyword: string;
  fields: string[];

  @IsOptional()
  caseSensitive?: boolean;
  
  @IsOptional()
  exact?: boolean;
}

export class QueryDto {
  @IsOptional()
  match?: Record<string, any>;

  @IsOptional()
  @IsNumberString()
  limit?: number;

  @IsOptional()
  sort?: Record<string, 1 | -1>;

  @IsOptional()
  @IsNumberString()
  skip?: number;

  @IsOptional()
  @IsNumberString()
  page?: number;
  @IsOptional()
  search?: SearchDto

}

