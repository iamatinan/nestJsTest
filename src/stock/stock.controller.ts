import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock-dto';
import { Product } from './dto/product.entity';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private stockService: StockService) {}
  @Get()
  getStock() {
    return ['Stock1', 'Stock2', 'Stock3'];
  }

  //   @Post()
  //   addStock(@Body(`name`) name: string, @Body(`price`) price: number) {
  //     console.log(`name: ${name}, price: ${price}`);
  //     return 'This action adds a new stock';
  //   }

  @Post()
  @UsePipes(ValidationPipe)
  addStock(@Body() createStockDto: CreateStockDto) {
    const { name, price, stock } = createStockDto;
    console.log(`${name}, ${price}, ${stock}`);

    const product = new Product();
    product.name = name;
    product.price = price;
    product.stock = stock;
    product.save();
  }

  // addStock(@Body() createStockDto: CreateStockDto) {
  //   // const { name, price, stock } = createStockDto;
  //   // console.log(`${name}, ${price}, ${stock}`);

  //   // const product = new Product();
  //   // product.name = name;
  //   // product.price = price;
  //   // product.stock = stock;
  //   // product.save();
  //   // return this.stockService.createProduct(createStockDto);
  // }
}
