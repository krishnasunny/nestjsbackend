import { Controller, Get, Param, UseGuards,Post,Body } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get(':id')
  async getUserProfile(@Param('id') id: number) {
    console.log(id);
    return await this.userService.findById(id);
  }

  @Post(':id')
  async updateUserProfile(@Body() dto: any) {
    console.log(dto);
    // return await this.userService.findById(dto);
  }
}
