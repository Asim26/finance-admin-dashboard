import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

function SideNavigation(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement] = React.useState<any>('left')
  return (
    <div>
      <>
        <Button colorScheme='blue' onClick={onOpen}>
          =
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent style={{ backgroundColor: 'green', color: 'white' }}>
            <DrawerHeader borderBottomWidth='1px'>
              <br />
              Finance Admin
            </DrawerHeader>
            <DrawerBody>
              <p>Dashboard</p>
              <br />
              <p>Manage</p>
              <br />
              <p>Monitor</p>
              <br />
              <p>Organization</p>
              <br />
              <p>User</p>
              <br />
              <p>System</p>
              <br />
              <p>LogOut</p>
              <br />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  )
}

export default SideNavigation
