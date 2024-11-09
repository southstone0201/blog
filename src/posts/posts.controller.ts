import { Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/create-patch.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(private readonly postsService: PostsService){}

    
    @Get('/:userId')
    public getPosts(@Param('userId') userId: string){
        return this.postsService.findAll(userId)

    }

    @ApiOperation({
        summary: "Create a new post",
        description: "This endpoint allows you to create a new post"
    })
    @ApiResponse({
        status: 201,
        description: "The post has been successfully created",
    })
    @Post()
    public createPost(@Body() createPostDto: CreatePostDto){   
        console.log(createPostDto)
    }

    @ApiOperation({
        summary: "Update a post",
        description: "This endpoint allows you to update a post"
    })
    @ApiResponse({
        status: 200,
        description: "The post has been successfully updated",
    })
    @Patch()
    public updatePost(@Param('postId') postId: string, @Body() patchPostDto: PatchPostDto){
        console.log(postId, patchPostDto)
    }
}
