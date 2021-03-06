import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Form, Input,  Divider, Container, Header, FlexboxGrid, Whisper, Tooltip, Button, InputGroup } from 'rsuite'

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext)
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0);

    const onSubmit = (event) => {
      // console.log(event)
      // event.preventDefault()
      
      const newTransaction = () => {
        return {
          id: Math.floor(Math.random() * 100000),
          text,
          // +amount keeps amount an integer
          amount: +amount
        }
      }
      addTransaction(newTransaction())
    }

    return (
        <>
        <Container>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <Header justify='end'>
                <Divider><h4> Add New Transaction </h4></Divider>
            </Header>
        <Form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Name of item</label>
              <InputGroup value={text}  onChange={(e) => setText(e.target.value)}>
                <Whisper trigger="focus" speaker={<Tooltip>Required: Enter a transaction name</Tooltip>}>
              <Input placeholder="Enter text..." />
                </Whisper>
              </InputGroup>
          </div>
          <div className="form-control">
            <Container>
            Amount
            </Container>
            <InputGroup  value={amount} onChange={(e) => setAmount(e.target.value)} inside>
              <InputGroup.Addon>$</InputGroup.Addon>
            <Whisper trigger="focus" speaker={<Tooltip>Required: Negative (-) Expense, Positive (+) Income</Tooltip>}>
              <Input placeholder="Enter amount..." />
            </Whisper>
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </div>
          <FlexboxGrid justify='center'>
            <button style={{marginTop: '5%'}} onSubmit={onSubmit}>Add transaction</button>
          </FlexboxGrid>
        </Form>
        </FlexboxGrid.Item>
        </FlexboxGrid>
        </Container>
      </>
    )
}
