import React, { useState } from 'react'
import WelcomeHeader from './components/ManagementHeader'
import ManagementTabs from './components/ManagementTabs'
import Table from './components/CustomTable';
import Coinscomponent from './components/CoinsComponent';
import { Container } from 'react-bootstrap';
const data = [
  {
    id: 1,
    name: "Esthera Jackson",
    username: "Username",
    img: "path/to/image.jpg",
    coinsStatus: "Done",
    timeStatus: "In Process",
    livesStatus: "Failed",
    created_at: "2021-06-14"
  },
  {
    id: 2,
    name: "Esthera Jackson",
    username: "Username",
    img: "path/to/image.jpg",
    coinsStatus: "Done",
    timeStatus: "In Process",
    livesStatus: "Failed",
    created_at: "2021-06-14"
  },
  {
    id: 3,
    name: "Esthera Jackson",
    username: "Username",
    img: "path/to/image.jpg",
    coinsStatus: "Done",
    timeStatus: "In Process",
    livesStatus: "Failed",
    created_at: "2021-06-14"
  },
  {
    id: 4,
    name: "Esthera Jackson",
    username: "Username",
    img: "path/to/image.jpg",
    coinsStatus: "Done",
    timeStatus: "In Process",
    livesStatus: "Failed",
    created_at: "2021-06-14"
  },
  {
    id: 5,
    name: "Esthera Jackson",
    username: "Username",
    img: "path/to/image.jpg",
    coinsStatus: "Done",
    timeStatus: "In Process",
    livesStatus: "Failed",
    created_at: "2021-06-14"
  },
];

function Management() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("targets")
  const onTabChange = (tab) => {
    setActiveTab(tab);
    setOpen(false)
  }
  const openDetails = (id) => {
    setOpen(true)
  }
  return (
    <div className=" min-vh-100 position-relative overflow-hidden">
      <img
        className="position-absolute top-0 end-0 z-n1"
        src={require("../Assets/Dashboard/blurRed.png")}
        alt="blurRed"
      />
      <img
        className="position-absolute bottom-0 start-0 z-n1"
        src={require("../Assets/Dashboard/blurBlue.png")}
        alt="blurBlue"
      />

      <Container >
        <WelcomeHeader />
        <ManagementTabs onTabChange={onTabChange} />
        {activeTab === 'targets' ? <> {
          open ? <>data</> : <Table data={data} openDetails={openDetails} />
        }</> : <Coinscomponent />}
      </Container>

    </div>
  )
}

export default Management
