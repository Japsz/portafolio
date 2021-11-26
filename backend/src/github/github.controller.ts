import { Controller, Get, Post, Body, HttpException } from '@nestjs/common';
import { GithubService } from './github.service';
import { notebookDTO } from './github.input';
@Controller('github')
export class GithubController {
    constructor(private githubService: GithubService) { }
    @Get('tree')
    getTree(): Promise<Record<string, Record<string, any>>> {
        return this.githubService.getGithubPath();
    }
    @Post('notebook')
    getNotebook(@Body() input: notebookDTO): Promise<Record<string, Record<string, any>>> {
        if (input.path && input.path !== '') {
            return this.githubService.getNotebook(input.path);
        }
        throw new HttpException('Path is required', 400);
    }
}
