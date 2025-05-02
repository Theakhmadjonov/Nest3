import { IsOptional, IsInt } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsOptional()
  @IsInt()
  productId?: number;
}
