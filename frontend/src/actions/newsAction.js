import axios from 'axios';
import { NEWS_SELECT_URL, CONFIG, SUCCESS, NEWS_EDIT_URL, NEWS_DELETE_URL } from '../utils/constants';


export const getNews = () => {
    try {
        const newsTable = axios.post(NEWS_SELECT_URL, CONFIG)
            .then((res) => {
                // console.log('client side news action')
                // console.log(res.data.row);
                return res.data.row;
            })

        return newsTable;

    } catch (err) {
        console.log("error client side " + err);
    }
}

// ----------------- Update Row handler -----------------

export const update = async ({ id, title, type, news }) => {

    console.log(' Edit news ');


    const body = JSON.stringify({
        id: id,
        title: title,
        type: type,
        news: news
    });

    console.log(body);

    try {
        await axios.post(NEWS_EDIT_URL, body, CONFIG)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === SUCCESS);
            })
    }
    catch (err) {
        console.log(err);
    }


}

// ----------------- Retrive specific row handler -----------------

export const getRow = ({ id }) => {

    const body = JSON.stringify({
        id: id
    })
    try {
        const row = axios.post('http://localhost:5000/select/row', body, CONFIG)
            .then((res) => {
                // console.log(res.data.selectRow);
                console.log('single row retrived successful')
                // sessionStorage.setItem('selectRow', JSON.stringify({rowData : res.data.selectRow }));
                // Next()
                return res.data.selectRow;
            })
        // .then((res) => {
        // console.log(res.data);
        // store.dispatch(setRowData());
        // return res.data.selectRow;
        // } );
        return row;
    }
    catch (err) {
        console.log(err);
        return 'error';
    }
}



// ----------------- delete handler -----------------

export const delete_from = async ({ id }) => {
    const body = JSON.stringify({ id: id });

    try {
        await axios.post(NEWS_DELETE_URL, body, CONFIG)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === 'success') {
                    
                }
            })
        // delete successful alert msg.
    }
    catch (err) {
        console.log(err);
    }
}