import { IsString, Matches, IsOptional, IsDate, IsArray, IsJSON, IsISO8601, ValidateNested, Max, MaxLength, IsUrl, max } from "class-validator";
import { IsNotEmpty } from "class-validator";
import { IsEnum } from "class-validator";
import { MinLength } from "class-validator";
import { PostStatus } from "../enums/poststatus.enum";
import { PostType } from "../enums/posttype.enum";
import { CreatePostMetaOptionsDto } from "./create-post-meta-options.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({
        description: 'The title of the post',
        example: 'My first post',
        minLength: 4,
        type: String
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(512)
    title :string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(PostType)
    posttype : PostType;
    
    @ApiProperty({
        description: 'The slug of the post',
        example: 'my-first-post',
        minLength: 4,
        type: String
    })

    @MaxLength(256)
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'slug should be in lowercase and hyphen separated'
    })
    slug : string;

    @ApiProperty({
        description: 'The status of the post',
        example: 'draft',
        enum: PostStatus
    })
    @IsEnum(PostStatus)
    @IsNotEmpty()
    status : PostStatus;

    @ApiProperty({
        description: 'The content of the post',
        example: 'This is the content of my first post',
        type: String
    })
    @IsString()
    @IsOptional()
    content? : string;

    @ApiProperty({
        description: 'The schema of the post',
        example: 'This is the schema of my first post',
        type: String
    })
    @IsJSON()  
    @IsOptional()
    schema? : string;
    
    @ApiProperty({
        description: 'The featured image url of the post',
        example: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        type: String
    })
    @IsUrl()
    @IsOptional()  
    @MaxLength(1024)
    featuredImageUrl? : string;   
    
    @ApiPropertyOptional({
        description: 'The published date of the post',
        example: '2021-02-01',
    })
    publishedon? : Date;

    @ApiProperty({
        description: 'The tags of the post',
        example: ['post', 'first', 'post'],
        type: [String]
    })
    @IsArray()
    @IsOptional()
    @IsString({each: true})
    @MinLength(3, {each: true})
    tags? : string[];

    @ApiProperty({
        description: 'The meta options of the post',
        type: [CreatePostMetaOptionsDto]
    })
    @IsArray()
    @IsOptional()
    @ValidateNested({each : true})
    @Type(() => CreatePostMetaOptionsDto)
    metaoptions: CreatePostMetaOptionsDto[]
     

}