import react, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import DataTable from 'react-data-table-component'
import ExpandedComponent from './ExpandedComponent'

const columns = [
  {
    name: 'Id',
    selector: 'id',
  },
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Director',
    selector: 'director',
    sortable: true,
  },
  {
    name: 'Genres',
    selector: 'genres',
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
  },
]

let tableDataItems = [
  {
    id: 1,
    title: 'abc',
    director: 'abc',
    genres: '1452',
    year: '2020',
  },
  {
    id: 2,
    title: 'abcd',
    director: 'abcd',
    genres: '1453',
    year: '2019',
  },
  { id: 3, title: 'abcde', director: 'abcde', genres: '1454', year: '2018' },
  {
    id: 4,
    title: 'abcdef',
    director: 'abcdef',
    genres: '1455',
    year: '2017',
  },
]

function BasicTableExpanderDisabled() {
  let [expandedId, setExpandedId] = useState<number>()
  const data = tableDataItems.map((item: any) => {
    let disabled: boolean = false
    if (expandedId) {
      disabled = true
    }
    return { ...item, disabled }
  })

  return (
    <div>
      <DataTable
        title='Movie List - No additional info for old movies (Before 2000)'
        columns={columns}
        data={data}
        expandableRows
        onRowExpandToggled={(toggleState: any, row: any) =>
          setExpandedId(row.id)
        }
        expandableRowExpanded={(row: any) => row.id === expandedId}
        highlightOnHover
        defaultSortField='name'
        expandableRowsComponent={<ExpandedComponent />}
      />
    </div>
  )
}

storiesOf('Expandable Rows', module).add(
  'Disable Expanded Row',
  BasicTableExpanderDisabled
)

export default BasicTableExpanderDisabled
