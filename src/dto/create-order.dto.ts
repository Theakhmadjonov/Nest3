import { IsInt } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  quantity: number;

  @IsInt()
  productId: number;
}
