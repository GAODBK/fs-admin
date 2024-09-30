import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateMenuDto {
  @IsNotEmpty({ message: '菜单名不可为空' })
  @ApiProperty({
    example: '菜单1',
  })
  title: string;
  @ApiProperty({
    example: 1,
  })
  order_num: number;
  @ApiProperty({
    example: 1,
  })
  parent_id: number;
  @ApiProperty({
    example: 1,
  })
  menu_type: number;
  @ApiProperty({
    example: 'menu',
  })
  icon: string;
  @IsNotEmpty({ message: '组件路径不可为空' })
  @ApiProperty({
    example: 'AA/BB',
  })
  component: string;
  @IsNotEmpty({ message: '路由不可为空' })
  @ApiProperty({
    example: 'BB',
  })
  path: string;
  @ApiProperty({
    example: 'Admin',
  })
  create_by: string;
}