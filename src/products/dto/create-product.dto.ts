import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'T-Shirt Teslo',
    description: 'Product title',
    nullable: false,
    minLength: 3,
  })
  @IsString()
  @MinLength(3)
  title: string;

  @ApiProperty({
    example: 0,
    description: 'Product price',
    nullable: true,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({
    example: 'This is a T-Shirt',
    description: 'Product description',
    nullable: true,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 't_shirt_teslo',
    description: 'Product slug',
    nullable: true,
  })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({
    example: 10,
    description: 'Product stock',
    nullable: true,
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({
    example: ['S', 'M', 'L'],
    description: 'Product sizes',
    type: 'array',
    items: {
      type: 'string',
    },
  })
  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @ApiProperty({
    example: 'men',
    description: 'Product gender',
  })
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @ApiProperty({
    example: ['t-shirt', 'clothes'],
    description: 'Product tags',
    type: 'array',
    items: {
      type: 'string',
    },
  })
  @IsString({ each: true })
  @IsOptional()
  @IsArray()
  tags?: string[];

  @ApiProperty({
    example: ['https://image.com/image.jpg'],
    description: 'Product images',
    type: 'array',
    items: {
      type: 'string',
    },
  })
  @IsString({ each: true })
  @IsOptional()
  @IsArray()
  images?: string[];
}
