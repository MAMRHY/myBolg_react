import { get, post } from "../utils/request";


// 根据分类查询文章列表
export function getListApi(classifyId){
    return get('/articles/list',{classifyId})
}

//根据文章id查文章详情
export function getArticleInfoApi(id){
    return get('/articles/infos',{id})
}

// 发布评论
export function addDiscussApi(val){
    return post('/discuss/add',{...val})
}

//根据文章id获取评论列表
export function getDiscussListApi(id){
    return get('/discuss/list',{id})
}