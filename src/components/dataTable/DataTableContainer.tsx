import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import ReactJson from 'react-json-view'
import AddTipping from '../addTipping/AddTipping'
import AddTier from '../addTier/AddTier'
import FilterTransactions from '../filterTransactions/FilterTransactions'

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

const my_json_object = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
  },
]
function DataTableContainer() {
  const onEdit = (e: any) => {}

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

          <TabPanels>
            <TabPanel>
              <div>
                <div>
                  <AddTipping />
                  <AddTier />
                  <FilterTransactions />
                </div>

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
                <h1>1 Link</h1>
                <div>
                  <Tabs>
                    <TabList>
                      <Tab>Configurations</Tab>
                      <Tab>Bank</Tab>
                      <Tab>Payment Purposes</Tab>
                      <Tab>Response Codes</Tab>
                    </TabList>

                    <TabPanels>
                      <TabPanel>
                        <div>
                          <ReactJson
                            src={my_json_object}
                            theme='monokai'
                            onEdit={onEdit}
                          />
                        </div>
                        <div>
                          <Button
                            colorScheme='blue'
                            style={{ marginTop: '0.5%' }}
                          >
                            Update
                          </Button>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <p></p>
                      </TabPanel>
                      <TabPanel>
                        <p></p>
                      </TabPanel>
                      <TabPanel>
                        <p></p>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}

export default DataTableContainer
