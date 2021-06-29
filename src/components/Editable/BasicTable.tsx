import React, { useState, useRef, useCallback, useEffect } from 'react'
import EditableCell from './EditableCell'
import DataTable from 'react-data-table-component'
import { storiesOf } from '@storybook/react'

let data: Array<any>

const columns = [
  {
    name: 'Id',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Day',
    selector: 'day',
    sortable: true,
    editable: true,
  },
  {
    name: 'Amount',
    selector: 'amount',
    sortable: true,
    editable: true,
  },
  {
    name: 'Type',
    selector: 'type',
    sortable: true,
    editable: true,
  },
]

function BasicTable(props: any) {
  const { arrData } = props
  // {
  //   console.log(' props.........', arrData)
  // }

  // let dummy = [
  //   {
  //     id: 1,
  //     day: 'a',
  //     amount: 'b',
  //     type: 'c',
  //   },
  // ]

  const [innerData, setInnerData] = useState(arrData)
  const [editingId, setEditingId] = useState('')
  const [delId, setDelId] = useState('')
  let formData = useRef({}).current
  const isEditing = (record: any) => record.id === editingId

  const formOnChange = (event: any) => {
    const nam = event.target.name
    const val = event.target.value

    formData = {
      ...formData,
      [nam]: val,
    }
  }

  const edit = (record: any) => {
    setEditingId(record.id)
  }

  const del = (record: any) => {
    setDelId(record)
    const index = arrData.indexOf(record)
    if (index > -1) {
      arrData.splice(index, 1)
    }
    return data
  }

  const cancel = () => {
    setEditingId('')
  }

  const save = (item: any) => {
    const payload: any = { ...item, ...formData }
    const tempData: any = [...arrData]
    const index: any = tempData.findIndex((item: any) => editingId === item.id)
    if (index > -1) {
      const item: any = tempData[index]
      tempData.splice(index, 1, {
        ...item,
        ...payload,
      })
      setEditingId('')
      setInnerData(tempData)
    }
  }

  const mergedColumns = columns.map((col: any) => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      cell: (row: any, index: any, column: any) => {
        const editing = isEditing(row)
        return (
          <EditableCell
            row={row}
            index={index}
            column={{ ...column, editing }}
            col={col}
            onChange={formOnChange}
          />
        )
      },
    }
  })

  const createColumns = useCallback(() => {
    return [
      ...mergedColumns,
      {
        name: 'Actions',
        allowOverflow: true,
        minWidth: '200px',
        cell: (row: any) => {
          const editable = isEditing(row)
          if (editable) {
            return (
              <div>
                <button
                  type='button'
                  onClick={() => save(row)}
                  style={{ backgroundColor: 'lightgreen' }}
                >
                  save
                </button>
                <button
                  type='button'
                  onClick={cancel}
                  style={{ backgroundColor: 'orangered' }}
                >
                  cancel
                </button>
              </div>
            )
          }
          return (
            <div>
              <button
                type='button'
                onClick={() => edit(row)}
                style={{ backgroundColor: 'aliceblue' }}
              >
                edit
              </button>
              <button type='button' onClick={() => del(row)}>
                | delete
              </button>
            </div>
          )
        },
      },
    ]
  }, [mergedColumns])

  return (
    <div>
      <DataTable
        columns={createColumns()}
        data={innerData}
        defaultSortField='title'
      />
    </div>
  )
}

storiesOf('Editable', module).add('Editable Row', BasicTable)

export default BasicTable
