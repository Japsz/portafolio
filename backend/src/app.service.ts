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
export class AppService {
  private octokitHandler: Octokit;
  constructor(){
    this.octokitHandler = new Octokit({ auth: process.env.GITHUB_SECRET_TOKEN });
  }
  getHello(): string {
    return 'Hello World!';
  }
   async getGithubPath(): Promise<Record<string, Record<string, any>>> {
     const {data} = await this.octokitHandler.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'japsz',
      repo: 'DesafioLatam',
      path: ''
    })
    const dict: Record<string, Record<string, any>> = {}
    const unidades: OctokitRequestResponse[] = (data as any[]).filter(x => x.type == "dir")
    for(let i= 0;i<unidades.length;i++){
      const dir = unidades[i]
      dict[dir.name] = {}
      const {data} = await this.octokitHandler.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}', {
        owner: 'japsz',
        repo: 'DesafioLatam',
        tree_sha: dir.sha,
        recursive: 'true',
      })
      console.log("===== %s =====", dir.name)
      for(let j = 0; j<data.tree.length;j++) {
        const subContent = data.tree[j]
        
        if (subContent.type === 'blob' && /((\.ipynb)|(\.py)|(\.csv))$/i.test(subContent.path)){

          const subpath = subContent.path.split('/')
          // Definimos el nuevo path
          const dirPath = `${dir.name}.` + subpath.slice(0, -1).join('.') + '.'
          _.set(dict, dirPath + subpath[subpath.length - 1].replace('.', '__'), subContent.url)
        }
      }
    }
    return dict;
  }
}
