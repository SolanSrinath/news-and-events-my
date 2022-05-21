import axios from 'axios';
import { CONFIG, NEWS_SELECT_URL } from '../components/utils/constants';


export const loginAction = async ({ username, password }) => {
    const body = JSON.stringify({
        username: username,
        password :password
    });

    try {
        await axios.post(NEWS_SELECT_URL, body, CONFIG)
        .then((res) => {
            console.log('client side')
            console.log(res.data);
            if(res.data.status === 'success'){
                console.log('authenticate');
            }
            else {
                console.log('failed');
            }

        })
      
    } catch (err) {
        console.log("error client side " + err);
    }
}

