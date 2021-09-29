import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiForbiddenResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/services/user.service';

@ApiTags('User Endpoint')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }



    @Get()
    @ApiOkResponse({description: 'Devuelve una lista de usuarios'})
    @ApiForbiddenResponse({description: 'Forbidden'})
    async getUsers() {
        const data = await this.userService.getUsers();
        return {
            estado: 'Peticion ok',
            data
        }
    }

    @Get(':id')
    async getUserById(@Param('id') id: number) {
        return this.userService.getUserById(id);
    }


    @Post()
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    crearUsuario(@Body() user) {
        try {
            const rta = this.userService.createUser(user);
            if (rta != null){
                return {msg: "OK"};
            }
        } catch (e) {
            return e;
        }


    }

    @Put(':id')
    editUser(@Param('id') id: ParseIntPipe, @Body() dto) {
        console.log(id);
        return dto;
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number){
        try{
            const rta = this.userService.deleteUser(id);
            if (rta != null){
                return {msg: "OK"}
            }
        }catch(e){
            return e;
        }
    }
}
