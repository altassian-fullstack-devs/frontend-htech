import React from 'react'
import { Button, Table, Space, Popconfirm } from 'antd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { ADMIN_PATHS } from 'constants/paths'

const columns = [
  {
    title: 'No',
    dataIndex: 'key',
    key: 'key'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Popconfirm title="Sure to delete?" onConfirm={(e) => onDelete(record.key, e)} onCancel={(e) => onDelete(record.key, e)}>
          <Button shape="circle" icon={<DeleteOutlined />} onClick={(e) => {
            e.stopPropagation()
          }} />
        </Popconfirm>
      </Space>
    ),
  },
];

const onDelete = (key, e) => {
  e.stopPropagation()
}

const data = [];
for (let i = 1; i <= 100; i++) {
  data.push({
    key: i.toString(),
    name: `Anton ${i}`,
    age: 29,
    address: `London Park no. ${i}`,
  });
}

const Clients = () => {
  const history = useHistory()

  const onClickItem = item => {
    history.push('/profile')
  }

  return (
    <div className="page-admin-developers">
      <Table
        className="table-developers"
        columns={columns}
        dataSource={data}
        pagination={{position: ["bottomCenter"]}}
        onRow={(record) => {
          return {
            onClick: () => {
              history.push(ADMIN_PATHS.CLIENT);
            }
          };
        }}
      />
    </div>
  )
}

export default Clients