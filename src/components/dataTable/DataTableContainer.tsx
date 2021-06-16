import React, { useState } from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
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
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

createTheme('solarized', {
  text: {
    primary: '#ffffff',
  },
  background: {
    default: '#002b36',
  },
  divider: {
    default: '#073642',
  },
})

const data = [
  {
    id: 1,
    name: 'abc',
    currency: 'Conan the Barbarian',
    pricingModel: 'tipping',
    actions: 'N/A',
  },
  {
    id: 2,
    name: 'abc',
    currency: 'Conan the Barbarian',
    pricingModel: 'tipping',
    actions: 'N/A',
  },
  {
    id: 3,
    name: 'abc',
    currency: 'Conan the Barbarian',
    pricingModel: 'tipping',
    actions: 'N/A',
  },
  {
    id: 4,
    name: 'abc',
    currency: 'Conan the Barbarian',
    pricingModel: 'tipping',
    actions: 'N/A',
  },
  {
    id: 5,
    name: 'abc',
    currency: 'Conan the Barbarian',
    pricingModel: 'tipping',
    actions: 'N/A',
  },
]
const columns = [
  {
    name: '#',
    selector: 'id',
    sortable: true,
    left: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
    left: true,
  },
  {
    name: 'Currency',
    selector: 'currency',
    sortable: true,
    left: true,
  },
  {
    name: 'Pricing Model',
    selector: 'pricingModel',
    sortable: true,
    left: true,
  },
  {
    name: 'Actions',
    selector: 'actions',
    sortable: true,
    left: true,
  },
]

function DataTableContainer() {
  const [size, setSize] = React.useState('md')
  const { isOpen, onOpen, onClose } = useDisclosure()

  // state Variables
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState()
  const [minBasePrice, setMinBasePrice] = useState(0)
  const [maxBasePrice, setMaxBasePrice] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const alertStyle = { color: 'red' }

  const handleClick = (newSize: any) => {
    setSize(newSize)
    onOpen()
  }

  const handleClose = (newSize: any) => {
    setSize(newSize)
    onClose()
  }

  const addTipping = () => {
    setIsSubmitted(true)
  }

  return (
    <div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Free Management</Tab>
            <Tab>Business Types</Tab>
            <Tab>Email Templates</Tab>
            <Tab>Payment Gateway</Tab>
          </TabList>

          <div>
            <Button
              colorScheme='blue'
              style={{
                float: 'right',
                marginRight: '1%',
                marginLeft: '1%',
                marginBottom: '1%',
              }}
              onClick={() => handleClick('sm')}
              // m={4}
            >
              Tipping
            </Button>
            <Button
              colorScheme='blue'
              style={{
                float: 'right',
                marginLeft: '1%',
                marginBottom: '1%',
              }}
            >
              Add Tier
            </Button>
          </div>

          <TabPanels>
            <TabPanel>
              <div>
                <DataTable
                  title='Finance Admin'
                  columns={columns}
                  data={data}
                  theme='solarized'
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <p></p>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <p></p>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <p></p>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div>
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader> Add Tipping</DrawerHeader>
            <DrawerBody>
              <Stack spacing='24px'>
                <form onSubmit={addTipping}>
                  <Box>
                    <FormLabel htmlFor='name'>Name</FormLabel>
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
                  </Box>
                  <Box>
                    <FormLabel htmlFor='description'>Description</FormLabel>
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
                  </Box>
                  <Box>
                    <FormLabel htmlFor='type'>Type</FormLabel>
                    <Select
                      placeholder='Select type'
                      onChange={(e: any) => {
                        setType(e.target.value)
                      }}
                    >
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </Select>
                    {!type && isSubmitted ? (
                      <p style={alertStyle}>Type is required </p>
                    ) : (
                      ''
                    )}
                  </Box>
                  <Box>
                    <FormLabel htmlFor='minBasePrice'>Min Base Price</FormLabel>
                    <Input
                      id='minBaseRange'
                      onChange={(e: any) => {
                        setMinBasePrice(e.target.value)
                      }}
                    />
                    {!minBasePrice && isSubmitted ? (
                      <p style={alertStyle}>Min base value is required </p>
                    ) : (
                      ''
                    )}
                  </Box>
                  <Box>
                    <FormLabel htmlFor='maxBasePrice'>Max Base Price</FormLabel>
                    <Input
                      id='manBaseRange'
                      onChange={(e: any) => {
                        setMaxBasePrice(e.target.value)
                      }}
                    />
                    {!maxBasePrice && isSubmitted ? (
                      <p style={alertStyle}>Max base value is required </p>
                    ) : (
                      ''
                    )}
                  </Box>
                  <Box>
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
                      onClick={addTipping}
                    >
                      Add Tipping
                    </Button>
                  </Box>
                </form>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

export default DataTableContainer
