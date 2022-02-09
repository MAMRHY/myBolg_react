import { get } from "../utils/request";


// 根据分类查询文章列表
export function getListApi(classifyId){
    return get('/articles/list',{classifyId})
}

//根据文章id查文章详情
export function getArticleInfoApi(id){
    return get('/articles/infos',{id})
}