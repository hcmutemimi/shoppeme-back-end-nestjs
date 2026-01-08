import { IsOptional, IsMongoId, IsInt, Min, IsDateString, IsIn } from 'class-validator';

export class QueryOrderDto {
  // ---------- Filters ----------

  @IsOptional()
  @IsMongoId()
  userId?: string;

  @IsOptional()
  @IsMongoId()
  productId?: string;

  @IsOptional()
  @IsDateString()
  fromDate?: string;

  @IsOptional()
  @IsDateString()
  toDate?: string;

  // ---------- Pagination ----------

  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number = 10;

  // ---------- Sorting ----------

  @IsOptional()
  @IsIn(['createdAt', 'quantity'])
  sortBy?: string = 'createdAt';

  @IsOptional()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc' = 'desc';
}
