import { NotificationManager } from "react-notifications";
import Axios from "./Axios";

Axios.interceptors.response.use(
    function (response) {
      NotificationManager.success( 'The operation has been succeeded');
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        NotificationManager.error("Please try again or check you api key", "Server Error");
        return Promise.reject(error);
    }
);
