import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";
import { PartialType } from "@nestjs/swagger";
import { CreatePostDto } from "./create-post.dto";

export class PatchPostDto extends PartialType(CreatePostDto) {
    @ApiProperty({
        description: 'The id of the post need to be updated',
    })
    @IsInt()
    @IsNotEmpty()
    id: number;

    

}
