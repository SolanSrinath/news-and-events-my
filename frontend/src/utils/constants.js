// ------------------------------ URLs ------------------------------

const BASE_URL = "http://localhost:5000"

export const LOGIN_URL = BASE_URL+ "/login";
export const NEWS_URL = BASE_URL+ "/insert/news";
export const NEWS_SELECT_URL = BASE_URL+ "/select/news";
export const NEWS_EDIT_URL = BASE_URL+ "/edit/news";
export const NEWS_DELETE_URL = BASE_URL+ "/delete/news";


export const SUCCESS = 'success';
// ------------------------------ Configuration data ------------------------------

export const CONFIG = {
    headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
        'Content-Type': 'application/json'
      }
}