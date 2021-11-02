import { EDIT_CONTACTS_FAIL, EDIT_CONTACTS_LOADING, EDIT_CONTACTS_SUCCESS } from "../../../constants/actionsTypes"
import axios from "../../../helpers/axiosInterceptor";

export default (form,id) => (dispatch) =>(onSuccess)=>{
    const requestPayload = {
        country_code: form.countryCode,
        first_name: form.firstName ,
        last_name: form.lastName ,
        phone_number: form.phoneNumber || '',
        contact_picture: form.contactPicture || null,
        is_favorite:form.isFavorite || false,

    }
    dispatch({
        type: EDIT_CONTACTS_LOADING
    });
    axios.put(`/contacts/${id}`, requestPayload)
    .then((res)=>{
      console.log('oyeeehowwwwee');
        dispatch({
            type: EDIT_CONTACTS_SUCCESS,
            payload: res.data,

        });
        onSuccess(res.data);
    })
    .catch((err)=>{
        console.log('yyyyiiiii');
    console.log(err);
        dispatch({
            type:EDIT_CONTACTS_FAIL,
            payload: err.response ? err.response.data:{error:'Something went wrong'}

        })
    })
}