export const numberReducer = (state=0,action) =>{
    switch (action.type) {
        case 'INCREMENT' :
            return state+1
        case 'DECREMENT' :
            return state-1
        case 'CLEAR' :
            return 0
        default :
            return state
    }
}


export const numberArrReducer = (state=null ,action)=>{
    switch (action.type) {
        case 'OVER' :
            return action.payload
        case 'INTER ' :
            return 0
        default :
            return state
    }
}