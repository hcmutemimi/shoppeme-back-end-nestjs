import { Injectable, Query } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model, PipelineStage } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { QueryDto } from '@/common/dtos';
import { buildFindAllPipeline, buildSearchPipeline} from '@/common/pipelines';

@Injectable()
export class ProductsService {
  constructor(
     @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = new this.productModel(createProductDto);
    return product.save();
  }

  findAll(query: QueryDto) {
    const pipeline: PipelineStage[] = buildFindAllPipeline(query);
    return this.productModel.aggregate(pipeline).exec();
  }

  search(query: QueryDto) {
    const pipeline: PipelineStage[] = buildSearchPipeline(query);
    return this.productModel.find().exec();
  }

  searchWithPopulate(query: QueryDto) {
    return this.productModel.find().populate('category', 'name');

  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto);
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
