import { CREATE_CONTACTS_FAIL, CREATE_CONTACTS_LOADING, CREATE_CONTACTS_SUCCESS } from "../../../constants/actionsTypes"
import axios from "../../../helpers/axiosInterceptor";

export default (form) => (dispatch) =>(onSuccess)=>{
    const requestPayload = {
        country_code: form.countryCode,
        first_name: form.firstName ,
        last_name: form.lastName ,
        phone_number: form.phoneNumber || '',
        contact_picture: form.contactPicture || null,
        is_favorite:form.isFavorite || false,

    }
    dispatch({
        type: CREATE_CONTACTS_LOADING
    });
    axios.post('/contacts/', requestPayload)
    .then((res)=>{
      console.log('oyeeehowwwwee');
        dispatch({
            type: CREATE_CONTACTS_SUCCESS,
            payload: res.data,

        });
        onSuccess();
    })
    .catch((err)=>{
        console.log('yyyyiiiii');
    console.log(err);
        dispatch({
            type:CREATE_CONTACTS_FAIL,
            payload: err.response ? err.response.data:{error:'Something went wrong'}

        })
    })
}