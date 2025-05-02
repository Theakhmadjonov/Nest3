import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from 'src/dto/create-order.dto';
import { UpdateOrderDto } from 'src/dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateOrderDto) {
    return this.prisma.order.create({ data });
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateOrderDto) {
    return this.prisma.order.update({ where: { id }, data });
  }

  delete(id: number) {
    return this.prisma.order.delete({ where: { id } });
  }
}
