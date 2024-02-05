import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Get()
    getUsers() {
        return this.userService.getUsers()
        // return {name:'Harshal',email:'harshrandhire@gmail.com'}
    }

    @Get('/:userId')
    getUser(@Param('userId',ParseIntPipe) userId:number) {
        return this.userService.getUser(userId);
    }

    @Post()
    store(@Body() body: CreateUserDto){
        return this.userService.store(body);
    }

    @Patch('/:userId')
    update(@Body() body: UpdateUserDto,@Param('userId',ParseIntPipe) userId:number){
        return this.userService.update(body,userId);
    }
}
