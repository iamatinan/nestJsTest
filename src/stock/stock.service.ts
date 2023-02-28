import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './dto/product.entity';
import { Repository } from 'typeorm';
import { CreateStockDto } from './dto/create-stock-dto';
@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}
  createProduct(createProductDto: CreateStockDto) {
    const { name, price, stock } = createProductDto;
    const product = new Product();
    product.name = name;
    product.price = price;
    product.stock = stock;
    return this.productRepository.save(product);
  }
}
