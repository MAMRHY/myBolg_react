import { get } from "../utils/request";


// 根据分类查询文章列表
export function getListApi(classifyId){
    return get('/articles/list',{classifyId})
}