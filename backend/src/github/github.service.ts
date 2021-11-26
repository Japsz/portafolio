import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/core';
import * as _ from 'lodash'
export type OctokitRequestResponse = {
    type: string
    size: number
    name: string
    path: string
    content?: string
    sha: string
    url: string
    git_url: string
    html_url: string
    download_url: string
    _links: {
        git: string
        html: string
        self: string
    }
}
@Injectable()
export class GithubService {
    private octokitHandler: Octokit;
    constructor() {
        this.octokitHandler = new Octokit({ auth: process.env.GITHUB_SECRET_TOKEN });
    }
    async getGithubPath(): Promise<Record<string, Record<string, any>>> {
        const { data } = await this.octokitHandler.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: 'japsz',
            repo: 'DesafioLatam',
            path: ''
        })
        const dict: Record<string, Record<string, any>> = {}
        const unidades: OctokitRequestResponse[] = (data as any[]).filter(x => x.type == "dir")
        for (let i = 0; i < unidades.length; i++) {
            const dir = unidades[i]
            dict[dir.name] = {
                type: 'dir',
                sha: dir.sha,
            }
            const { data } = await this.octokitHandler.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}', {
                owner: 'japsz',
                repo: 'DesafioLatam',
                tree_sha: dir.sha,
                recursive: 'true',
            })
            console.log("===== %s =====", dir.name)
            for (let j = 0; j < data.tree.length; j++) {
                const subContent: any = data.tree[j]
                const subpath = subContent.path.split('/')
                if (subContent.type === 'blob' && /((\.ipynb)|(\.py)|(\.csv)|(\.pdf)|(\.sql))$/i.test(subContent.path)) {
                    // Definimos el path básico para agregar propiedades
                    const dirPath = `${dir.name}.` + subpath.slice(0, -1).join('.') + '.'
                    const extension = subContent.path.split('.').pop()
                    // Agregamos 
                    _.set(dict, dirPath + subpath[subpath.length - 1].replace('.', '__'), {
                        type: 'file',
                        path: `${dir.name}/${subContent.path}`,
                        name: subpath[subpath.length - 1],
                        sha: subContent.sha,
                        extension,
                    })
                } else if (subContent.type === 'tree') {
                    const dirPath = `${dir.name}.` + subpath.join('.') + '.'
                    _.set(dict, dirPath + 'sha', subContent.sha)
                    _.set(dict, dirPath + 'type', 'dir')
                }
            }
        }
        return dict;
    }
    async getNotebook(path: string): Promise<any> {
        const { data } = await this.octokitHandler.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: 'japsz',
            repo: 'DesafioLatam',
            path: path,
            accept: 'application/vnd.github.v3.raw'
        })
        const base64 = Buffer.from(_.get(data, 'content', ''), 'base64').toString('utf8')
        return base64
    }

}
