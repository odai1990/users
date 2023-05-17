import { useEffect, useState } from "react";
import Main from "../layouts/Main";
import Grid from "../component/Grid";
import Axios from "../api/Axios";
import PopUp from "../component/PopUp";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, setDataRow } from "../redux/userSlice";

const Home = () => {

    const dispatch = useDispatch();
    const { users, dataRow } = useSelector((state) => state.users);
    const [isOpen, setIsOpen] = useState(false);

    // init api to get data fro first time and update the state
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get("users").then((res) => {
            dispatch(setUsers(res.data));
        });
    };

    // to open popup and set data for specific row
    const openPopUpEdit = (dataRow) => {
        dispatch(setDataRow(dataRow));
        setIsOpen((prev) => !prev);
    };

    // to open popup and set data to empty to add
    const openPopUpAdd = () => {
        dispatch(setDataRow({}));
        setIsOpen((prev) => !prev);
    };

    // to delete row
    const deleteRow = (id) => {
        Axios.delete(`users/${id}`).then(() => {
            dispatch(setDataRow({}));
            setIsOpen(false);
            getUsers();
        });
    };

    // to update row
    const updateRow = (id) => {
        Axios.put(`users/${id}`, { ...dataRow }).then(() => {
            dispatch(setDataRow({}));
            setIsOpen(false);
            getUsers();
        });
    };

    // to add row
    const addRow = () => {
        Axios.post(`users/`, { ...dataRow }).then(() => {
            dispatch(setDataRow({}));
            setIsOpen(false);
            getUsers();
        });
    };

    return (
        <div className="col-sm-6 offset-3 mt-5">
            {isOpen && <PopUp data={dataRow} isOpen={isOpen} setIsOpen={setIsOpen} updateRow={updateRow} deleteRow={deleteRow} rowData={dataRow} setRowData={(data) => dispatch(setDataRow(data))} AddRow={addRow} />}
            <Button className="w-100 mb-2" color="success" size="lg" onClick={openPopUpAdd}>
                Add New User
            </Button>
            <Grid data={users} callBackFucntion={openPopUpEdit} />
        </div>
    );
};

export default Main(Home);
