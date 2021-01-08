import { PAGE_RESIZE_ACTION } from "./types"

export const setWindowSize = (size)=>{
    return {
        type:PAGE_RESIZE_ACTION,
        payload:size
    }
}