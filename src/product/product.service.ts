import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { UpdateProductDto } from 'src/dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateProductDto) {
    return this.prisma.product.create({ data });
  }

  findAll(query?: string) {
    return this.prisma.product.findMany({
      where: query ? { name: { contains: query } } : {},
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateProductDto) {
    return this.prisma.product.update({ where: { id }, data });
  }

  delete(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
