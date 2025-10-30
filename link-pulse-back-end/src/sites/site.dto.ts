import { IsEnum, IsOptional, IsString, IsUrl } from "class-validator";
import { SiteStatus } from "generated/prisma";

export class SiteDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    createdAt?: string

    @IsUrl({ require_protocol: true }, { message: 'URL must include protocol (http:// or https://)' })
    url: string

    @IsEnum(SiteStatus)
    @IsOptional()
    status?: SiteStatus;

    @IsString()
    @IsOptional()
    description?: string
}