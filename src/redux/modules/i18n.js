import {CALL_FETCH} from 'TalentCore';

const GET_LOCALE_SWITCHED = "I18N/GET_LOCALE_SWITCHED";
const GET_LOCALE_SWITCHED_SUCCESS = "I18N/GET_LOCALE_SWITCHED_SUCCESS";
const GET_LOCALE_SWITCHED_FAIL = "I18N/GET_LOCALE_SWITCHED_FAIL";

const initialState = {
  support: ["en","zn"], //支持的语言
  locale: 'en', //当前语言
  message: {}
}

export default function i18n(state=initialState,action={}){
  switch(action.type){
    case GET_LOCALE_SWITCHED_SUCCESS:
      return {
        locale: action.response
      }
    default:
      return state;
  }
}

function HandleSwitchLanguage(param) {
  return {
    [CALL_FETCH]: {
        types: [GET_LOCALE_SWITCHED,GET_LOCALE_SWITCHED_SUCCESS,GET_LOCALE_SWITCHED_FAIL],
        url: 'http://localhost:3000/i18nAll/'+param+'.js',
        method: "GET"
    }
  };
}

export function switchLocale(locale) {
  return (dispatch, getState) => {
      return dispatch(HandleSwitchLanguage(locale));
  };
}
