import React, { useState } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from '@chakra-ui/react'
import { Grid, GridItem, FormLabel, Input, Select } from '@chakra-ui/react'
import BasicTable from '../Editable/BasicTable'
import { useStoreActions, useStoreState } from 'easy-peasy'

function Exceptions() {
  const addException: any = useStoreActions(
    (actions: any) => actions.exception.addException
  )

  var arr: Array<any> = []

  //state variables
  const [inputValueState, setInputValueState] = useState({
    inputValues: {
      day: '',
      type: '',
      amount: '',
    },
  })

  const [basicTableArray, setBasicTableArray] = useState([])

  //onChange Event Handlers
  const onChange = (e: any) => {
    e.preventDefault()
    const { name, value } = e.target
    const { inputValues } = inputValueState
    setInputValueState({
      inputValues: {
        ...inputValues,
        [name]: value,
      },
    })
  }

  //onSubmit Event Handlers
  let id = 1

  const [close, setClose] = useState(true)

  const handleClose = () => {
    setClose(false)
  }
  const handleOpen = () => {
    setClose(true)
  }
  const onSubmit = (e: any) => {
    e.preventDefault()

    const { day, type, amount } = inputValueState.inputValues

    let dataObj = {}

    dataObj = {
      id: id + 1,
      day: day,
      type: type,
      amount: amount,
    }

    const updatedArr: any = basicTableArray
    updatedArr.push(dataObj)
    setBasicTableArray(updatedArr)

    handleClose()
    // arr.push(dataObj)
    // console.log('data...****', arr)

    // addException(dataObj)
  }

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button
            colorScheme='blue'
            style={{ float: 'right' }}
            onClick={() => handleOpen()}
          >
            Add
          </Button>
        </PopoverTrigger>
        <PopoverContent
          style={{ backgroundColor: 'rgba(5,71,130,255)', color: 'white' }}
        >
          <PopoverArrow onClick={handleClose} />
          <PopoverCloseButton />
          <PopoverHeader>Add New Exception</PopoverHeader>
          <PopoverBody>
            <Grid templateColumns='repeat(2, 2fr)'>
              <GridItem>
                <FormLabel htmlFor='day'>Day</FormLabel>
              </GridItem>
              <GridItem>
                <Select placeholder='select day' name='day' onChange={onChange}>
                  <option
                    value='option1'
                    style={{
                      color: 'black',
                    }}
                  >
                    Option 1
                  </option>
                  <option
                    value='option2'
                    style={{
                      color: 'black',
                    }}
                  >
                    Option 2
                  </option>
                  <option
                    value='option3'
                    style={{
                      color: 'black',
                    }}
                  >
                    Option 3
                  </option>
                </Select>
              </GridItem>
            </Grid>

            <Grid templateColumns='repeat(2, 2fr)'>
              <GridItem>
                <FormLabel htmlFor='type'>Type</FormLabel>
              </GridItem>
              <GridItem>
                <Select
                  placeholder='select type'
                  name='type'
                  onChange={onChange}
                >
                  <option
                    value='option1'
                    style={{
                      color: 'black',
                    }}
                  >
                    Option 1
                  </option>
                  <option
                    value='option2'
                    style={{
                      color: 'black',
                    }}
                  >
                    Option 2
                  </option>
                  <option
                    value='option3'
                    style={{
                      color: 'black',
                    }}
                  >
                    Option 3
                  </option>
                </Select>
              </GridItem>
            </Grid>

            <Grid templateColumns='repeat(2, 2fr)'>
              <GridItem>
                <FormLabel htmlFor='amount'>Amount</FormLabel>
              </GridItem>
              <GridItem>
                <Input id='amount' name='amount' onChange={onChange} />
              </GridItem>
            </Grid>

            <Grid templateColumns='repeat(1, 1fr)'>
              <GridItem>
                <Button
                  colorScheme='green'
                  style={{ float: 'right' }}
                  onClick={onSubmit}
                >
                  Add
                </Button>
              </GridItem>
            </Grid>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <BasicTable arrData={basicTableArray} />
    </div>
  )
}

export default Exceptions
