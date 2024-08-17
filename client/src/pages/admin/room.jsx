import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataGrid, { Column, SearchPanel } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DropDownBox from 'devextreme-react/drop-down-box';
import { getSession } from '../../utils/Session';
import { toast } from 'react-toastify';

const Rooms = () => {
    const [data, setData] = useState([]);
    const [roomType, setRoomType] = useState([]);
    const STATUS_OPTIONS = [
        { value: 'Available', label: 'Available' },
        { value: 'Occupied', label: 'Occupied' },
        { value: 'Maintenance', label: 'Maintenance' },
        { value: 'Closed', label: 'Closed' },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [roomsResponse, roomTypeResponse] = await Promise.all([
                    axios.get('http://localhost:3000/api/room'),
                    axios.get('http://localhost:3000/api/roomType'),
                ]);
                setData(roomsResponse.data);
                setRoomType(roomTypeResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleRowInserted = async (e) => {
        try {
            await axios.post('http://localhost:3000/api/room', {
                ...e.data,
                createdBy: getSession().userId,
                createdAt: new Date(),
                type: e.data.type
            });
            const response = await axios.get('http://localhost:3000/api/room');
            setData(response.data);
            toast.success('Room added successfully');
        } catch (error) {
            console.error('Error inserting data:', error);
            toast.error('Failed to add room');
        }
    };

    const handleRowUpdated = async (e) => {
        try {
            await axios.put(`http://localhost:3000/api/room/${e.data._id}`, {
                ...e.data,
                updatedAt: new Date(),
                updatedBy: getSession().userId,
                type: e.data.type
            });
            const response = await axios.get('http://localhost:3000/api/room');
            setData(response.data);
            toast.success('Room updated successfully');
        } catch (error) {
            console.error('Error updating data:', error);
            toast.error('Failed to update room');
        }
    };

    const handleRowRemoved = async (e) => {
        try {
            await axios.delete(`http://localhost:3000/api/room/${e.data._id}`);
            const response = await axios.get('http://localhost:3000/api/room');
            setData(response.data);
            toast.success('Room deleted successfully');
        } catch (error) {
            console.error('Error deleting data:', error);
            toast.error('Failed to delete room');
        }
    };

    return (
        <Container className="my-4 rounded bg-white p-5 shadow-lg">
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/admin' }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Rooms</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="mb-4">Room Management</h1>

            <div className="data-grid-container" style={{ height: '600px' }}>
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

                    <Column dataField="number" caption="Room Number" />
                    <Column
                        dataField="status"
                        caption="Status"
                        lookup={{
                            dataSource: STATUS_OPTIONS,
                            valueExpr: 'value',
                            displayExpr: 'label'
                        }}
                    />
                    <Column
                        dataField="type"
                        caption="Room Type"
                        lookup={{
                            dataSource: roomType,
                            valueExpr: '_id',
                            displayExpr: 'name'
                        }}
                        calculateCellValue={rowData => rowData.type?._id}
                    />
                    <Column dataField="price" caption="Price" dataType="number" />
                    <Column dataField="isActive" caption="Active" dataType="boolean" />
                </DataGrid>
            </div>
        </Container>
    );
};

export default Rooms;
