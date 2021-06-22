import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Stack,
  Box,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import PopOverComponent from '../popOver/PopOverComponent'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

function AddTier() {
  const [size, setSize] = React.useState('md')
  const { isOpen, onOpen, onClose } = useDisclosure()

  // state Variables
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [currency, setCurrency] = useState()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [employeeContribution, setEmployeeContribution] = useState()
  const [minimumWithdrawAmount, setMinimumWithdrawAmount] = useState()
  const [denominator, setDenominator] = useState()
  const [type, setType] = useState()
  const [tierAmount, setTierAmount] = useState()
  const [fee, setFee] = useState()
  const alertStyle = { color: 'red' }

  const handleClick = (newSize: any) => {
    setSize(newSize)
    onOpen()
  }

  const addTier = () => {
    setIsSubmitted(true)
  }
  return (
    <div>
      <div>
        <Button
          colorScheme='blue'
          style={{
            float: 'right',
            marginLeft: '1%',
            marginBottom: '1%',
          }}
          onClick={() => handleClick('lg')}
        >
          Add Tier
        </Button>
      </div>

      <div>
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <Container>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader
                style={{ backgroundColor: 'purple', color: 'white' }}
              >
                Add Tier
              </DrawerHeader>
              <DrawerBody>
                <form onSubmit={addTier}>
                  {/* Start of General Tab */}
                  <h1
                    style={{
                      textAlign: 'center',
                      marginTop: '2%',
                      marginBottom: '2%',
                    }}
                  >
                    <b>General</b>
                  </h1>
                  <Grid templateColumns='repeat(2, 2fr)'>
                    <GridItem>
                      <FormLabel htmlFor='name'>Name</FormLabel>
                    </GridItem>
                    <GridItem>
                      <Input
                        id='name'
                        placeholder='Please enter name'
                        onChange={(e: any) => {
                          setName(e.target.value)
                        }}
                      />
                      {!name && isSubmitted ? (
                        <p style={alertStyle}>Name is required </p>
                      ) : (
                        ''
                      )}
                    </GridItem>
                  </Grid>
                  <Grid templateColumns='repeat(2, 2fr)'>
                    <GridItem>
                      <FormLabel htmlFor='description'>Description</FormLabel>
                    </GridItem>
                    <GridItem>
                      <Input
                        id='description'
                        placeholder='Please enter description'
                        onChange={(e: any) => {
                          setDescription(e.target.value)
                        }}
                      />
                      {!description && isSubmitted ? (
                        <p style={alertStyle}>Description is required </p>
                      ) : (
                        ''
                      )}
                    </GridItem>
                  </Grid>
                  <Grid templateColumns='repeat(2, 2fr)'>
                    <GridItem>
                      <FormLabel htmlFor='currency'>Currency</FormLabel>
                    </GridItem>
                    <GridItem>
                      <Select
                        placeholder='Select currency'
                        onChange={(e: any) => {
                          setCurrency(e.target.value)
                        }}
                      >
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                      </Select>
                      {!currency && isSubmitted ? (
                        <p style={alertStyle}>Currency is required </p>
                      ) : (
                        ''
                      )}
                    </GridItem>
                  </Grid>
                  <Grid templateColumns='repeat(2, 2fr)'>
                    <GridItem>
                      <FormLabel htmlFor='employeeContribution'>
                        Employee Contribution
                      </FormLabel>
                    </GridItem>
                    <GridItem>
                      <Input
                        id='employeeContribution'
                        onChange={(e: any) => {
                          setEmployeeContribution(e.target.value)
                        }}
                      />
                      {!employeeContribution && isSubmitted ? (
                        <p style={alertStyle}>
                          Employee Contribution is required
                        </p>
                      ) : (
                        ''
                      )}
                    </GridItem>
                  </Grid>
                  <Grid templateColumns='repeat(2, 2fr)'>
                    <GridItem>
                      <FormLabel htmlFor='minimumWithdrawAmount'>
                        Minimum Withdraw Amount
                      </FormLabel>
                    </GridItem>
                    <GridItem>
                      <Input
                        id='minimumWithdrawAmount'
                        onChange={(e: any) => {
                          setMinimumWithdrawAmount(e.target.value)
                        }}
                      />
                      {!minimumWithdrawAmount && isSubmitted ? (
                        <p style={alertStyle}>
                          Minimum Withdraw Amount is required
                        </p>
                      ) : (
                        ''
                      )}
                    </GridItem>
                  </Grid>
                  {/* End of General Tab */}
                  {/* Start of Tier Parameters Tab */}
                  <h1
                    style={{
                      textAlign: 'center',
                      marginTop: '2%',
                      marginBottom: '2%',
                    }}
                  >
                    <b>Tier Parameters</b>
                  </h1>
                  <Grid templateColumns='repeat(2, 2fr)'>
                    <GridItem>
                      <FormLabel htmlFor='denominator'>Denominator</FormLabel>
                    </GridItem>
                    <GridItem>
                      <Select
                        placeholder='select factor'
                        onChange={(e: any) => {
                          setDenominator(e.target.value)
                        }}
                      >
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                      </Select>
                      {!denominator && isSubmitted ? (
                        <p style={alertStyle}>Denominator is required </p>
                      ) : (
                        ''
                      )}
                    </GridItem>
                  </Grid>
                  <Grid templateColumns='repeat(2, 2fr)'>
                    <GridItem>
                      <FormLabel htmlFor='type'>Type</FormLabel>
                    </GridItem>
                    <GridItem>
                      <Select
                        placeholder='type'
                        onChange={(e: any) => {
                          setType(e.target.value)
                        }}
                      >
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                      </Select>
                      {!type && isSubmitted ? (
                        <p style={alertStyle}>Type is required</p>
                      ) : (
                        ''
                      )}
                    </GridItem>
                  </Grid>
                  <Grid templateColumns='repeat(2, 2fr)'>
                    <GridItem>
                      <FormLabel htmlFor='tierAmount'>Tier Amount</FormLabel>
                    </GridItem>
                    <GridItem>
                      <Input
                        id='tierAmount'
                        onChange={(e: any) => {
                          setTierAmount(e.target.value)
                        }}
                      />
                      {!tierAmount && isSubmitted ? (
                        <p style={alertStyle}>Tier Amount is required</p>
                      ) : (
                        ''
                      )}
                    </GridItem>
                  </Grid>
                  <Grid templateColumns='repeat(2, 2fr)'>
                    <GridItem>
                      <FormLabel htmlFor='fee'>Fee</FormLabel>
                    </GridItem>
                    <GridItem>
                      <Input
                        id='fee'
                        onChange={(e: any) => {
                          setFee(e.target.value)
                        }}
                      />
                      {!fee && isSubmitted ? (
                        <p style={alertStyle}>Fee is required</p>
                      ) : (
                        ''
                      )}
                    </GridItem>
                  </Grid>
                  {/* End of Tier Parameters Tab */}
                  {/* Start of Exceptions Tab */}
                  <h1
                    style={{
                      textAlign: 'center',
                      marginTop: '2%',
                      marginBottom: '2%',
                    }}
                  >
                    <b>Exceptions</b>
                  </h1>
                  <Grid templateColumns='repeat(1, 1fr)'>
                    <GridItem>
                      <PopOverComponent />

                      <Table size='sm'>
                        <Thead>
                          <Tr>
                            <Th>#</Th>
                            <Th>Day</Th>
                            <Th>Amount</Th>
                            <Th>Type</Th>
                            <Th>Actions</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>1</Td>
                            <Td>1</Td>
                            <Td>2</Td>
                            <Td>absolute</Td>
                            <Td>
                              <EditIcon />
                              <DeleteIcon />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>2</Td>
                            <Td>1</Td>
                            <Td>2</Td>
                            <Td>absolute</Td>
                            <Td>
                              <EditIcon />
                              <DeleteIcon />
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </GridItem>
                  </Grid>
                  {/* End of Exceptions Tab */}

                  <Button
                    colorScheme='blue'
                    style={{
                      float: 'right',
                      marginLeft: '1%',
                      marginTop: '3%',
                    }}
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    colorScheme='green'
                    style={{
                      float: 'right',
                      marginTop: '3%',
                    }}
                    onClick={addTier}
                  >
                    Add Tier
                  </Button>
                </form>
              </DrawerBody>
            </DrawerContent>
          </Container>
        </Drawer>
      </div>
    </div>
  )
}

export default AddTier
