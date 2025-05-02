import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from 'src/dto/create-category.dto';
import { UpdateCategoryDto } from 'src/dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateCategoryDto) {
    return this.prisma.category.create({ data });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateCategoryDto) {
    return this.prisma.category.update({ where: { id }, data });
  }

  delete(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
