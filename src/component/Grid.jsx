import PropTypes from "prop-types";
import { Button, Table } from "reactstrap";

const Grid = ({ data, callBackFucntion }) => {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((ele) => {
                    return (
                        <tr key={ele?.id}>
                            <th scope="row">{ele.id}</th>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.gender}</td>
                            <td>{ele.status}</td>
                            <td>
                                <Button onClick={() => callBackFucntion(ele)} color="primary">
                                    Details
                                </Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

Grid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    callBackFucntion: PropTypes.func,
};

Grid.defaultProps = {
    callBackFucntion: () => {},
};
export default Grid;
