import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from '@chakra-ui/react'
import { Grid, GridItem, FormLabel, Input, Select } from '@chakra-ui/react'

function PopOverComponent() {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button colorScheme='blue' style={{ float: 'right' }}>
            Add
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Add New Exception</PopoverHeader>
          <PopoverBody>
            <Grid templateColumns='repeat(2, 2fr)'>
              <GridItem>
                <FormLabel htmlFor='day'>Day</FormLabel>
              </GridItem>
              <GridItem>
                <Select placeholder='select day'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </GridItem>
            </Grid>

            <Grid templateColumns='repeat(2, 2fr)'>
              <GridItem>
                <FormLabel htmlFor='type'>Type</FormLabel>
              </GridItem>
              <GridItem>
                <Select placeholder='select type'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </GridItem>
            </Grid>

            <Grid templateColumns='repeat(2, 2fr)'>
              <GridItem>
                <FormLabel htmlFor='amount'>Amount</FormLabel>
              </GridItem>
              <GridItem>
                <Input id='amount' />
              </GridItem>
            </Grid>

            <Grid templateColumns='repeat(1, 1fr)'>
              <GridItem>
                <Button colorScheme='green' style={{ float: 'right' }}>
                  Add
                </Button>
              </GridItem>
            </Grid>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default PopOverComponent
