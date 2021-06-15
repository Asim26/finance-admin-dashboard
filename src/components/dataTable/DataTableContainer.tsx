import React from 'react'
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

  const handleClick = (newSize: any) => {
    setSize(newSize)
    onOpen()
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
                <Box>
                  <FormLabel htmlFor='name'>Name</FormLabel>
                  <Input id='name' placeholder='Please enter name' />
                </Box>
                <Box>
                  <FormLabel htmlFor='description'>Description</FormLabel>
                  <Input
                    id='description'
                    placeholder='Please enter description'
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor='type'>Type</FormLabel>
                  <Select placeholder='Select type'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                </Box>
                <Box>
                  <FormLabel htmlFor='minBasePrice'>Min Base Price</FormLabel>
                  <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Box>
                <Box>
                  <FormLabel htmlFor='maxBasePrice'>Max Base Price</FormLabel>
                  <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Box>
                <Box>
                  <Button
                    colorScheme='blue'
                    style={{ float: 'right', marginLeft: '1%' }}
                  >
                    Cancel
                  </Button>
                  <Button colorScheme='green' style={{ float: 'right' }}>
                    Add Tipping
                  </Button>
                </Box>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

export default DataTableContainer
