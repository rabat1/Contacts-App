import {
  CREATE_CONTACTS_FAIL,
    CREATE_CONTACTS_LOADING,
    CREATE_CONTACTS_SUCCESS,
    GET_CONTACTS_FAIL,
    GET_CONTACTS_LOADING,
    GET_CONTACTS_SUCCESS,
   
  } from '../../constants/actionsTypes';
  
  const contacts = (state, {type, payload}) => {
    switch (type) {
      
      case CREATE_CONTACTS_FAIL:
        console.log('i am fail')
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: false,
          error: payload,
        },
      };
    case CREATE_CONTACTS_LOADING:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: true,
          error: null,
        },
      };
    case CREATE_CONTACTS_SUCCESS:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: false,
          error: null,
          data: payload,
        },

        getContacts: {
          ...state.getContacts,
          loading: false,
          data: [payload, ...state.getContacts.data],
          error: null,
        },
      };

    case CREATE_CONTACTS_FAIL:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: false,
          error: payload,
        },
      };



      case GET_CONTACTS_LOADING:
        return {
          ...state,
          getContacts: {
            ...state.getContacts,
            loading: true,
            error: null,
          },
        };
  
      case GET_CONTACTS_SUCCESS:
        console.log('araayyy')
        return {
          ...state,
          getContacts: {
            ...state.getContacts,
            loading: false,
            data: payload,
            error: null,
          },
        };
  
      case GET_CONTACTS_FAIL:
        return {
          ...state,
          getContacts: {
            ...state.getContacts,
            loading: false,
            error: payload,
          },
        };
  
      default:
        return state;
    }
  };
  
  export default contacts;