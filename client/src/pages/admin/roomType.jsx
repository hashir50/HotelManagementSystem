import React, { useRef,useEffect, useState } from 'react';
import axios from 'axios';
import DataGrid, { Column, Editing, SearchPanel } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import { Container,Breadcrumb, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSession } from '../../utils/Session';
import { Link } from 'react-router-dom';

const RoomTypes = () => {
    const [data, setData] = useState([]);
    const [editingRow, setEditingRow] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/roomType');
                setData(response.data);
            } catch (error) {
                toast.error('Error fetching data');
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const fileEditorTemplate = (cellElement, cellInfo) => {
        const { setValue } = cellInfo;
    
        // Create the file input element
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.style.width = '100%';
        fileInput.accept = 'image/*'; // Optional: restrict to image files
    
        // Handle file selection
        const handleChange = (event) => {
            const file = event.target.files[0];
            if (file) {
                setValue(file); // Set the selected file to the grid's value
            }
        };
    
        fileInput.addEventListener('change', handleChange);
    
        // Clear previous content and append new file input
        cellElement.innerHTML = '';
        cellElement.appendChild(fileInput);
    
        // Cleanup event listener
        return () => {
            fileInput.removeEventListener('change', handleChange);
        };
    };
    
    const handleRowInserted = async (e) => {
        const formData = new FormData();
        formData.append('name', e.data.name);
        if (e.data.image) formData.append('image', e.data.image);
        formData.append('isActive', e.data.isActive);
        formData.append('createdBy', getSession().userId);
        formData.append('createdAt', new Date());

        try {
            await axios.post('http://localhost:3000/api/roomType', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            const response = await axios.get('http://localhost:3000/api/roomType');
            setData(response.data);
            toast.success('Room Type added successfully');
        } catch (error) {
            toast.error('Error adding data');
            console.error('Error adding data:', error);
        }
    };

    const handleRowUpdated = async (e) => {
        const formData = new FormData();
        formData.append('name', e.data.name);
        if (e.data.image) formData.append('image', e.data.image);
        formData.append('isActive', e.data.isActive);
        formData.append('updatedBy', getSession().userId);
        formData.append('updatedAt', new Date());

        try {
            await axios.put(`http://localhost:3000/api/roomType/${e.data._id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            const response = await axios.get('http://localhost:3000/api/roomType');
            setData(response.data);
            toast.success('Room Type updated successfully');
        } catch (error) {
            toast.error('Error updating data');
            console.error('Error updating data:', error);
        }
    };

    const handleRowRemoved = async (e) => {
        try {
            await axios.delete(`http://localhost:3000/api/roomType/${e.data._id}`);
            const response = await axios.get('http://localhost:3000/api/roomType');
            setData(response.data);
            toast.success('Room Type deleted successfully');
        } catch (error) {
            toast.error('Error deleting data');
            console.error('Error deleting data:', error);
        }
    };

  
    
    
    return (
        <Container className="my-4 rounded bg-white p-5 shadow-lg">
             <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/admin' }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Room Types</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="mb-4">Room Types Management</h1>


            <div className="data-grid-container" >
                <DataGrid
                    dataSource={data}
                    showBorders={true}
                    columnAutoWidth={true}
                    hoverStateEnabled={true}
                    filterRow={{ visible: true }}
                    headerFilter={{ visible: false }}
                    paging={{ pageSize: 10 }}
                    editing={{
                        mode: 'row',
                        allowUpdating: true,
                        allowDeleting: true,
                        allowAdding: true
                    }}
                    onRowInserted={handleRowInserted}
                    onRowUpdated={handleRowUpdated}
                    onRowRemoved={handleRowRemoved}
                >
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Column dataField="name" caption="Name" />
                    <Column
                        dataField="image"
                        caption="Image"
                        cellRender={({ data }) => (
                            <img
                                src={`http://localhost:3000/uploads/${data.image}`}
                                alt={data.name}
                                style={{ width: '100px', height: 'auto' }}
                            />
                        )}
                        editCellTemplate={fileEditorTemplate}
                    />
                    <Column dataField="isActive" caption="Active" dataType="boolean" />
                </DataGrid>
            </div>

            <ToastContainer />
        </Container>
    );
};

export default RoomTypes;
