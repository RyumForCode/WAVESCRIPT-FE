import instance from "./instance/instance";

//checked
const createNovel = async ({ title, genre, content, contributors } : { title : string, genre : string, content : string, contributors : number }) => {
    const response = await instance.post(`/scripts`, { title, genre, content, contributors });
    return response;
}

//checked
const scriptBrowseAll = async () => {
    const response = await instance.get('/scripts/all');
    return response;
}

//issued
const scriptBrowseRandom = async () => {
    const response = await instance.get('/scripts');
    return response;
}

//checked
const scriptInspect = async ({id} : {id : number}) => {
    const response = await instance.get(`/scripts/${id}`);
    return response;
}

//checked
const scriptEditFirst = async ({id, title, genre, content} : {id : number, title : string, genre : string, content : string}) => {
    const response = await instance.patch(`/scripts/${id}`, {title, genre, content});
    return response;
}

//checked
const scriptDeleteFirst = async ({id} : {id : number}) => {
    const response = await instance.delete(`/scripts/${id}`);
    return response;
}

//checked
const plusscriptAdd = async ({id, content} : {id : number, content : string}) => {
    const response = await instance.post(`/scripts/${id}/plusscript`, {content});
    return response;
}

//checked
const scriptBrowseMine = async () => {
    const response = await instance.get(`/myPage`);
    return response;
}

export { createNovel, scriptBrowseAll, scriptBrowseRandom, scriptInspect, scriptEditFirst, scriptDeleteFirst, plusscriptAdd, scriptBrowseMine };