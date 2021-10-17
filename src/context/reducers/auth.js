import { CLEAR_AUTH_STATE, LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_USER, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actionsTypes";

const auth =(state,{type, payload})=>{
    switch(type){
        case REGISTER_LOADING:
            case LOGIN_LOADING:
            return {
                ...state,
                loading:true,
            };
        case REGISTER_SUCCESS:
            //console.log('chal rahay ho success?')
            return {
                
                ...state,
                loading: false,
                data:payload,
                
            };
        case LOGIN_SUCCESS:
                console.log('chal rahay ho success?')
                return {
                    
                    ...state,
                    loading: false,
                    data:payload,
                    isLoggedIn:true,
                    
                };
                case LOGOUT_USER:
                    return {
                        
                        ...state,
                        loading: false,
                        data:null,
                        isLoggedIn:false,
                        
                    };
        case REGISTER_FAIL:
            case LOGIN_FAIL:
            console.log('chal rahay ho fail hona?')
            return {
                ...state,
                loading: false,
                error:payload,
            };
            case CLEAR_AUTH_STATE:
               
                return{
                    ...state,
                    loading: false,
                    data:null,
                    error:null,
                };
        default:
            return state;
    }
};
export default auth;

