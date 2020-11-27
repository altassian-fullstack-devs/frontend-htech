import React from 'react'
import { Button, Table, Space, Popconfirm } from 'antd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

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
    title: 'Skills',
    dataIndex: 'skills',
    key: 'skills',
  },
  {
    title: 'Hourly Rate',
    dataIndex: 'hourlyrate',
    key: 'hourlyrate',
  },
  {
    title: 'Job Success',
    dataIndex: 'jobsuccess',
    key: 'jobsuccess',
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
for (let i = 0; i < 100; i++) {
  data.push({
    key: (i+1).toString(),
    name: `Daniel ${i+1}`,
    skills: `React-native`,
    hourlyrate: `${i+20} / hr`,
    jobsuccess: `${100-i}% Job Success`,
  });
}

const Developers = () => {
  const history = useHistory()

  const onClickItem = item => {
    history.push('/profile')
  }

  return (
    <div className="page-admin-developers">
      <Button className="create-button" shape="circle" icon={<PlusOutlined />} onClick={() => {
        
      }} />
      <Table
        className="table-developers"
        columns={columns}
        dataSource={data}
        pagination={{position: ["bottomCenter"]}}
        onRow={(record) => {
          return {
            onClick: () => {onClickItem()}
          };
        }}
      />
    </div>
  )
}

export default Developers