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
import {
  Grid,
  GridItem,
  FormControl,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import Multiselect from 'multiselect-react-dropdown'

import { Formik } from 'formik'
import * as Yup from 'yup'

function FilterTransactions() {
  const [size, setSize] = React.useState('md')
  const { isOpen, onOpen, onClose } = useDisclosure()

  let optionsArr: Array<string> = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
  ]
  let organization: Array<string> = []

  const handleClick = (newSize: any) => {
    setSize(newSize)
    onOpen()
  }

  const dropdownHandler = (selectedList: any, selectedItem: any) => {
    organization.push(selectedItem)
    console.log('arr..', organization)
  }
  return (
    <div>
      <Formik
        initialValues={{
          startDate: '',
          endDate: '',
          email: '',
          phone: '',
          address: '',
          organization: '',
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500))
          alert(JSON.stringify(values, null, 2))
        }}
        validationSchema={Yup.object().shape({
          startDate: Yup.date().required('Start Date is Required'),
          endDate: Yup.date().required('End Date is Required'),
          email: Yup.string().email().required('Email is Required'),
          phone: Yup.string().required('Phone No is Required'),
          address: Yup.string().required('Address is Required'),
          organization: Yup.string().required('Organization is Required'),
        })}
      >
        {(props: any) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props
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
                Filter Transactions
              </Button>
              <div>
                <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerHeader>Filter Transactions</DrawerHeader>
                    <DrawerBody>
                      <form onSubmit={handleSubmit}>
                        <Stack spacing='24px'>
                          <Box>
                            <Grid templateColumns='repeat(2, 2fr)'>
                              <GridItem>
                                <FormLabel htmlFor='startDate'>
                                  Start Date
                                </FormLabel>
                              </GridItem>
                              <GridItem>
                                <Input
                                  type='date'
                                  id='startDate'
                                  value={values.startDate}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.startDate && touched.startDate
                                      ? 'text-input error'
                                      : 'text-input'
                                  }
                                />
                                {errors.startDate && touched.startDate && (
                                  <div
                                    className='input-feedback'
                                    style={{ color: 'red' }}
                                  >
                                    {errors.startDate}
                                  </div>
                                )}
                              </GridItem>
                            </Grid>
                          </Box>
                          <Box>
                            <Grid templateColumns='repeat(2, 2fr)'>
                              <GridItem>
                                <FormLabel htmlFor='endDate'>
                                  End Date
                                </FormLabel>
                              </GridItem>
                              <GridItem>
                                <Input
                                  type='date'
                                  id='endDate'
                                  value={values.endDate}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.endDate && touched.endDate
                                      ? 'text-input error'
                                      : 'text-input'
                                  }
                                />
                                {errors.endDate && touched.endDate && (
                                  <div
                                    className='input-feedback'
                                    style={{ color: 'red' }}
                                  >
                                    {errors.endDate}
                                  </div>
                                )}
                              </GridItem>
                            </Grid>
                          </Box>
                          <Box>
                            <Grid templateColumns='repeat(2, 2fr)'>
                              <GridItem>
                                <FormLabel htmlFor='email'>Email</FormLabel>
                              </GridItem>
                              <GridItem>
                                <InputGroup>
                                  <InputLeftElement
                                    pointerEvents='none'
                                    children={<EmailIcon color='gray.300' />}
                                  />
                                  <Input
                                    id='email'
                                    type='email'
                                    placeholder='Enter Email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                      errors.email && touched.email
                                        ? 'text-input error'
                                        : 'text-input'
                                    }
                                  />
                                </InputGroup>
                                {errors.email && touched.email && (
                                  <div
                                    className='input-feedback'
                                    style={{ color: 'red' }}
                                  >
                                    {errors.email}
                                  </div>
                                )}
                              </GridItem>
                            </Grid>
                          </Box>
                          <Box>
                            <Grid templateColumns='repeat(2, 2fr)'>
                              <GridItem>
                                <FormLabel htmlFor='phone'>Phone</FormLabel>
                              </GridItem>
                              <GridItem>
                                <InputGroup>
                                  <InputLeftElement
                                    pointerEvents='none'
                                    children={<PhoneIcon color='gray.300' />}
                                  />
                                  <Input
                                    id='phone'
                                    type='number'
                                    placeholder='Phone number'
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                      errors.phone && touched.phone
                                        ? 'text-input error'
                                        : 'text-input'
                                    }
                                  />
                                </InputGroup>
                                {errors.phone && touched.phone && (
                                  <div
                                    className='input-feedback'
                                    style={{ color: 'red' }}
                                  >
                                    {errors.phone}
                                  </div>
                                )}
                              </GridItem>
                            </Grid>
                          </Box>
                          <Box>
                            <Grid templateColumns='repeat(2, 2fr)'>
                              <GridItem>
                                <FormLabel htmlFor='address'>Address</FormLabel>
                              </GridItem>
                              <GridItem>
                                <Input
                                  id='address'
                                  placeholder='Enter Address'
                                  value={values.address}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.address && touched.address
                                      ? 'text-input error'
                                      : 'text-input'
                                  }
                                />
                                {errors.address && touched.address && (
                                  <div
                                    className='input-feedback'
                                    style={{ color: 'red' }}
                                  >
                                    {errors.address}
                                  </div>
                                )}
                              </GridItem>
                            </Grid>
                          </Box>
                          <Box>
                            <Grid templateColumns='repeat(2, 2fr)'>
                              <GridItem>
                                <FormLabel htmlFor='organization'>
                                  Organization
                                </FormLabel>
                              </GridItem>
                              <GridItem>
                                <Multiselect
                                  id='organization'
                                  isObject={false}
                                  onRemove={function noRefCheck() {}}
                                  onSelect={dropdownHandler}
                                  options={optionsArr}
                                />
                              </GridItem>
                            </Grid>
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
                              type='submit'
                              disabled={isSubmitting}
                            >
                              Filter Transaction
                            </Button>
                          </Box>
                        </Stack>
                      </form>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

export default FilterTransactions
