import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Label } from "reactstrap";
import PropTypes from "prop-types";
const PopUp = ({ rowData, setRowData, isOpen, setIsOpen, size, updateRow, deleteRow, AddRow}) => {
    const toggle = () => setIsOpen(!isOpen);

    const checkValidtion=()=>
    {
        return rowData?.name && rowData?.email && rowData?.gender && rowData?.status
    }
    
    return (
        <Modal isOpen={isOpen} toggle={toggle} size={size} >
            <ModalHeader toggle={toggle}>Details</ModalHeader>
            <ModalBody>
                <Form>
                    {rowData?.id && (
                        <FormGroup>
                            <Label for="id">Id</Label>
                            <Input id="id" name="id" type="text" readOnly value={rowData?.id}  />
                        </FormGroup>
                    )}
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input id="name" name="name" placeholder="Please enter name" type="text" value={rowData?.name} onChange={(e) => setRowData({ ...rowData, name: e.target.value })}  required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Eamil</Label>
                        <Input id="email" name="email" placeholder="Please enter email" type="email" value={rowData?.email} onChange={(e) => setRowData({ ...rowData, email: e.target.value })} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input id="gender" name="gender" type="select" value={rowData?.gender} onChange={(e) => setRowData({ ...rowData, gender: e.target.value })} required>
                            <option value="" selected disabled hidden>Choose</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="status">Status</Label>
                        <Input id="status" name="status" type="select" value={rowData?.status} onChange={(e) => setRowData({ ...rowData, status: e.target.value })} required>
                        <option value="" selected disabled hidden>Choose</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </Input>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                {!rowData?.id && checkValidtion()&&(
                    <Button color="success" onClick={AddRow}>
                        Add
                    </Button>
                )}
                {rowData?.id && (
                    <>
                        {checkValidtion() && 
                        <Button color="success" onClick={() => updateRow(rowData?.id)}>
                            Update
                        </Button>
                        }
                        <Button color="danger" onClick={() => deleteRow(rowData?.id)}>
                            Delete
                        </Button>
                    </>
                )}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

PopUp.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    rowData: PropTypes.object.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    size: PropTypes.string,
};

PopUp.defaultProps = {
    size: "xl",
};

export default PopUp;
