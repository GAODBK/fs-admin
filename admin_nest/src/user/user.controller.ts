import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { CreateUserVo } from './vo/create-user.vo';
import { LoginDto } from './dto/login-dto';
import { CaptchaVo } from './vo/captcha-vo';
import { Public } from 'src/public/public.decorator';

@ApiTags('用户模块')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Public()
  @ApiOperation({
    summary: '用户注册', // 接口描述信息
  })
  @ApiOkResponse({
    description: '返回示例',
    type: CreateUserVo,
  })
  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Public()
  @ApiOperation({
    summary: '用户登录',
  })
  @Post('login')
  @ApiOkResponse({
    description: '返回示例',
    type: CreateUserVo,
  })
  login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto);
  }

  @Public()
  @ApiOperation({
    summary: '获取验证码',
  })
  @Get('captcha')
  @ApiOkResponse({
    description: '返回示例',
    type: CaptchaVo,
  })
  getCaptcha() {
    return this.userService.getCaptcha();
  }
}
