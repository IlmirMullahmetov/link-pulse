import { IsOptional, IsString, IsUrl } from "class-validator";

export class SiteDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    createdAt?: string

    @IsUrl()
    @IsOptional()
    url?: string

    @IsString()
    @IsOptional()
    description?: string
}