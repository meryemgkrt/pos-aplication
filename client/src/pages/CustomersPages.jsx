import React, { useRef }  from 'react'
import Header from '../components/header/Header'
import { Button, Input, Space, Spin, Table } from 'antd'
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect,useState } from "react";
const CustomersPages = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [billsItems, setBillsItems] = useState();
    const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  
  const showModal = () => {
      setIsModalOpen(true);
    };
    useEffect(() => {
      const getBills = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/bills/get-all");
          const data = await res.json();
          setBillsItems(data);
        } catch (error) {
          console.log("Error:", error.message || error);
        }
      };
      getBills();
    }, []);
  
 

  const columns = [
    {
    title: "Müşteri Adı",
      dataIndex: "customerName",
      key: "customerName",
      ...getColumnSearchProps("customerName"),
    },
    {
      title: "Telefon Numarası",
      dataIndex: "customerPhoneNumber",
      key: "customerPhoneNumber",
      ...getColumnSearchProps("customerPhoneNumber")
    },
    {
      title: "İşlem Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      
      render:(text)=>{
        return <span>{text.substring(0,10)}</span>
      }
    },
  ];
  return (
    <div>
        <Header/>
        <h1 className="mb-4 text-4xl font-bold text-center">MÜŞTERİLER</h1>
      {billsItems ? (
          <div className="px-6">
          
            <Table
              dataSource={billsItems}
              columns={columns}
              bordered
              pagination={false}
              scroll={{
                x:1000,
                y:300
              }}
              rowKey="_id"
            />
            
          </div>
      ): <Spin size="large" className="absolute flex items-center justify-center w-screen h-screen top-1/2 left-1/2" />}
     
    </div>
  )
}

export default CustomersPages