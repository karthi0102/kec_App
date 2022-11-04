import * as api from '../api'

export const getdeptAllCircular =() => async(dispatch) =>{
    try {
            const {data}=await  api.getAllDeptCirculars()
            dispatch({type:"FETCH_ALL_DEPT_CIRCULARS",payload:data})
            
    } catch (err) {
        console.log(err.message)
    }
}


