import { Injectable, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    getUsers() {
        return {name:'Harshal',email:'harshrandhire@gmail.com'}
    }

    getUser(userId:number) {
        return {userId};
    }

    store(body: CreateUserDto){
        return body;
    }

    update(body: UpdateUserDto,userId:number){
        return {body,userId};
    }
}
