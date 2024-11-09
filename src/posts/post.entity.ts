import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PostType } from './enums/posttype.enum';
import { PostStatus } from './enums/poststatus.enum';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';


@Entity()   
export class Post{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 512,
        nullable: false
    })
    title: string;

    @Column({
        type: 'enum',
        enum: PostType,
        nullable: false,
        default: PostType.post
    })
    posttype: PostType;

    @Column({
        type: 'varchar',
        length: 256,
        nullable: false,
        unique: true
    })
    slug: string;

    @Column({
        type: 'enum',
        enum: PostStatus,
        nullable: false,
        default: PostStatus.draft
    })
    status: PostStatus;

    @Column({
        type: 'text',
        nullable: true
    })
    content?: string;

    @Column({
        type: 'text',
        nullable: true
    })
    schema?: string;

    @Column({
        type: 'varchar',
        nullable: true,
        length: 1024
    })
    feturedImageUrl?: string;

    @Column({
        type: 'timestamp', 
        nullable: true,
    })
    publishOn?: Date;

    
    tags?: string[];
    metaOptions?: CreatePostMetaOptionsDto[];

}