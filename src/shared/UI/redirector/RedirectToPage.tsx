import {Navigate} from "react-router-dom";

export interface ILink {
    link: string
}

const RedirectToPage = ({link}: ILink) => {
    return (
        <Navigate to={link} replace={true}/>
    );
};

export default RedirectToPage;