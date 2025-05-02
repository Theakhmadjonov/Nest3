import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from 'src/dto/create-category.dto';
import { UpdateCategoryDto } from 'src/dto/update-category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
    return this.categoryService.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoryService.delete(+id);
  }
}
