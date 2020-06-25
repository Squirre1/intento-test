import axios from "axios";
import Cookies from "js-cookie";
import { route } from "preact-router";

const apiToken = request => {
    request.headers["apikey"] = Cookies.get("apikey");
    return request;
};

const unauthorized = error => {
    if (error.response.status === 401) {
        route("/");
    }

    return Promise.reject(error);
};

const installAxios = () => {
    axios.defaults.baseURL = "https://api.inten.to/ai/text/translate";
    axios.defaults.headers["x-user-agent"] = "Intento.Web.Axios/1.1.0";

    axios.interceptors.request.use(apiToken.bind(null));
    axios.interceptors.response.use(null, unauthorized.bind(null));
};

export default installAxios;
