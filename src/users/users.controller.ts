import { Controller, Get, Post, Patch, Put, Delete, Param, Query, Body, 
    ParseIntPipe, Header, DefaultValuePipe, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import { REPLCommand } from 'repl';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { ApiQuery, ApiTags, ApiOperation, ApiResponse    } from '@nestjs/swagger';
@Controller('users')
@ApiTags('Users')
export class UsersController {
    
    constructor(
        private readonly usersService: UsersService) {}

    @Get('/:id?' )
    @ApiOperation({
        summary: 'Get Users',
        description: 'Get Users with optional parameters'
    })
    @ApiResponse({
        status: 200,
        description: 'Users retrieved successfully',
    })
    @ApiQuery({
        name: 'limit',
        type: Number,
        required: false,
        description: 'Number of users to retrieve',
        example : 10,
        
    })
    public getUsers(
    @Param() getUsersDto: GetUsersParamDto,
    @Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page',new DefaultValuePipe(1), ParseIntPipe) page: number) {

        return this.usersService.findAll(getUsersDto, limit, page);
    }

    @Post()
    public createUser(
        @Body(new ValidationPipe()) createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto) {
        console.log(patchUserDto);
        return patchUserDto;
    }
}

