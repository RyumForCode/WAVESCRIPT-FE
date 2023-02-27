import instance from "./instance";

//checked
const createNovel = async ({ genre, title, content } : { genre : string, title : string, content : string }) => {
    const response = await instance.post(`/scripts`, { genre, title, content })
    console.log(response);
    return response;
}

//issued
const scriptBrowseAll = async () => {
    const response = await instance.get('/scripts/all');
    console.log(response);
    return response;
}

//checked
const scriptBrowseRandom = async () => {
    const response = await instance.get('/scripts');
    console.log(response);
    return response;
}

//checked
const scriptInspect = async ({id} : {id : number}) => {
    const response = await instance.get(`/scripts/${id}`);
    console.log(response);
    return response;
}

//checked
const scriptEditFirst = async ({id, title, genre, content} : {id : number, title : string, genre : string, content : string}) => {
    const response = await instance.patch(`/scripts/${id}`, {title, genre, content});
    console.log(response);
    return response;
}

//checked
const scriptDeleteFirst = async ({id} : {id : number}) => {
    const response = await instance.delete(`/scripts/${id}`);
    console.log(response);
    return response;
}

//issued
const plusscriptAdd = async ({id, content} : {id : number, content : string}) => {
    const response = await instance.post(`/plusscript/${id}`, {content});
    console.log(response);
    return response;
}

export { createNovel, scriptBrowseAll, scriptBrowseRandom, scriptInspect, scriptEditFirst, scriptDeleteFirst, plusscriptAdd };