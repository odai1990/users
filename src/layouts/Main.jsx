import { NotificationContainer } from "react-notifications";
import Header from "../layouts/Header";

const Main = (WrappedComponent) => {
    const hocComponent = ({ ...props }) => (
        <>
            <Header />
            <NotificationContainer />
            <WrappedComponent {...props} />
        </>
    );

    return hocComponent;
};

export default Main;
