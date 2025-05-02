import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    UserModule,
    ProductModule,
    CategoryModule,
    OrderModule,
    CustomerModule
  ],
  providers: [PrismaService],
})
export class AppModule {}
