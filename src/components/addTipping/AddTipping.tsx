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

function AddTipping() {
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

  const addTipping = () => {
    setIsSubmitted(true)
  }

  return (
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
      >
        Add Tipping
      </Button>

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

export default AddTipping
