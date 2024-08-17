import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataGrid, { Column, Paging, Scrolling, SearchPanel } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import { Breadcrumb, Container, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Role = () => {
    const [data, setData] = useState([]);
    const [editingRowId, setEditingRowId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentRow, setCurrentRow] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/roles');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error('Failed to load roles. Please try again later.');
            }
        };

        fetchData();
    }, []);

    const handleRowInserted = async (e) => {
        try {
            await axios.post('http://localhost:3000/api/roles', e.data);
            const response = await axios.get('http://localhost:3000/api/roles');
            setData(response.data);
            toast.success('Role added successfully!');
        } catch (error) {
            console.error('Error inserting data:', error);
            toast.error('Failed to add role. Please try again later.');
        }
    };

    const handleRowUpdated = async (e) => {
        try {
            await axios.put(`http://localhost:3000/api/roles/${e.data._id}`, e.data);
            const response = await axios.get('http://localhost:3000/api/roles');
            setData(response.data);
            toast.success('Role updated successfully!');
        } catch (error) {
            console.error('Error updating data:', error);
            toast.error('Failed to update role. Please try again later.');
        }
    };

    const handleRowRemoved = async (e) => {
        try {
            await axios.delete(`http://localhost:3000/api/roles/${e.data._id}`);
            const response = await axios.get('http://localhost:3000/api/roles');
            setData(response.data);
            toast.success('Role deleted successfully!');
        } catch (error) {
            console.error('Error deleting data:', error);
            toast.error('Failed to delete role. Please try again later.');
        }
    };

    const handleEdit = (rowData) => {
        setCurrentRow(rowData);
        setShowModal(true);
    };

    const handleDelete = async (rowId) => {
        try {
            await axios.delete(`http://localhost:3000/api/roles/${rowId}`);
            const response = await axios.get('http://localhost:3000/api/roles');
            setData(response.data);
            toast.success('Role deleted successfully!');
        } catch (error) {
            console.error('Error deleting data:', error);
            toast.error('Failed to delete role. Please try again later.');
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentRow(null);
    };

    const handleSaveChanges = async () => {
        if (currentRow) {
            try {
                await axios.put(`http://localhost:3000/api/roles/${currentRow._id}`, currentRow);
                const response = await axios.get('http://localhost:3000/api/roles');
                setData(response.data);
                toast.success('Role updated successfully!');
                handleCloseModal();
            } catch (error) {
                console.error('Error updating data:', error);
                toast.error('Failed to update role. Please try again later.');
            }
        }
    };

    return (
        <Container className="my-4 rounded bg-white p-5 shadow-lg">
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/admin' }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Roles</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="mb-4">Role Management</h1>

            <div className="data-grid-container" style={{ height: '600px' }}>
                <DataGrid
                    dataSource={data}
                    showBorders={true}
                    columnAutoWidth={true}
                    hoverStateEnabled={true}
                    filterRow={{ visible: true }}
                    headerFilter={{ visible: false }}
                    paging={{ pageSize: 10 }}
                    scrolling={{ mode: 'virtual' }}
                    editing={{ mode: 'row', allowUpdating: false, allowDeleting: false, allowAdding: false }}
                    onRowInserted={handleRowInserted}
                    onRowUpdated={handleRowUpdated}
                    onRowRemoved={handleRowRemoved}
                >
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Column dataField="sno" caption="SNo" width={50} alignment='center' />
                    <Column dataField="name" caption="Name" />
                    <Column dataField="isActive" caption="Active" dataType="boolean" />

                    <Column
                        caption="Actions"
                        width={150}
                        alignment='center'
                        cellRender={({ data }) => (
                            <div className="action-buttons">
                                <Button
                                    variant="link"
                                    onClick={() => handleEdit(data)}
                                >
                                    <FaEdit />
                                </Button>
                                <Button
                                    variant="link"
                                    className="text-danger"
                                    onClick={() => handleDelete(data._id)}
                                >
                                    <FaTrash />
                                </Button>
                            </div>
                        )}
                    />
                </DataGrid>
            </div>

            {/* Edit Role Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentRow?.name || ''}
                                onChange={(e) => setCurrentRow({ ...currentRow, name: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formIsActive">
                            <Form.Check
                                type="checkbox"
                                label="Active"
                                checked={currentRow?.isActive || false}
                                onChange={(e) => setCurrentRow({ ...currentRow, isActive: e.target.checked })}
                            />
                        </Form.Group>

                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSaveChanges}>
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </Container>
    );
};

export default Role;
