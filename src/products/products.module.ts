import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product, ProductImage } from './entities';
import { PostgresExceptionHandler } from 'src/common/exceptions/postgres-handler.exception';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PostgresExceptionHandler],
  imports: [TypeOrmModule.forFeature([Product, ProductImage])],
  exports: [ProductsService, TypeOrmModule],
})
export class ProductsModule {}
