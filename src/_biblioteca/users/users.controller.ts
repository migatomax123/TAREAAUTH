import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt/jwt.guard";
import { UsuarioService } from "./users.service";

@Controller('usuario')
export class UserController {
  constructor(private userService: UsuarioService) {}
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard) // Protegido: solo usuarios autenticados pueden crear usuarios
  @Post()
  async createUser(@Body() body: { name: string; email: string; password: string }) {
    return this.userService.create(body.name, body.email, body.password);
  }

  @UseGuards(JwtAuthGuard) //  Protegido: solo autenticados pueden actualizar su usuario
  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() body: { name?: string; email?: string }) {
    return this.userService.update(id, body);
  }

  @UseGuards(JwtAuthGuard) // Protegido: solo autenticados pueden eliminar su usuario
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}