import * as api from '../api'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const getAllCircular =() => async(dispatch) =>{
    try {   
            let User = await AsyncStorage.getItem('KEC')
            User = JSON.parse(User)
            const circularData ={
                department:User?.result?.department,
                batch:User?.result?.batch
            }
            const {data}=await  api.getAllCirculars(circularData)
            dispatch({type:"FETCH_ALL_CIRCULARS",payload:data})
            
    } catch (err) {
        console.log(err.message)
    }
}
