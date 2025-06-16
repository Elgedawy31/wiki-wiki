import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Autocomplete from './AutoComplete'
import CoinInput from './CustomCoinsInput'
import TransactionCard from './TransactionCard'

function Coinscomponent() {
  return (
    <div>
      <Row className=" justify-content-between align-items-center">
        <Col xs={12} md={7}>
          <Autocomplete />
          <CoinInput />
        </Col>

        <Col xs={12} md={5} className='d-flex justify-content-end'>
         <TransactionCard />
        </Col>
      </Row>
    </div>
  )
}

export default Coinscomponent
