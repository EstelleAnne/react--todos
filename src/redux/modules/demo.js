
import {CALL_FETCH} from 'TalentCore';

const CHANGEVALUE = 'test/changevalue';
const REPO_REQUEST = 'REPO_REQUEST'
const REPO_SUCCESS = 'REPO_SUCCESS'
const REPO_FAILURE = 'REPO_FAILURE'

const initialState = {
  text:6
};

// window.customHeaders = function(){
//   return {
//     'x-beisen-ajax':1.0,
//     'X-Beisen-ts':1463654774869,
//     'X-Requested-With':'XMLHttpRequest',
//     'X-XSRF-Token':''
//   }
// }

export default function test(state=initialState,action={}){
  switch(action.type){
    case CHANGEVALUE:
      return {
        text:action.value
      }
    case REPO_SUCCESS:
     console.log(action.response)
      return {
        response:action.response
      }
    case REPO_FAILURE:
        
    default:
      return state;
  }
}

function HandleGetItem() {
  return {
    [CALL_FETCH]: {
        types: [REPO_REQUEST,REPO_SUCCESS,REPO_FAILURE],
        url: 'http://localhost:3000/i18nAll/en.js',
        method: "GET"
        // ,
        // headers:{
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // }
    }
  };
}

export function __as_home_getItem() {
  return (dispatch, getState) => {
      return dispatch(HandleGetItem());
  };
}

export function handleClick(){
  const testNum = Math.random()*10+1;
  return {
    type:CHANGEVALUE,
    value:testNum
  }
}
