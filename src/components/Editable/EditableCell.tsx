import React, { useState } from 'react'

interface props {
  row: any
  index: any
  column: any
  col: any
  onChange: any
}

function EditableCell({ row, index, column, col, onChange }: props) {
  const [value, setValue] = useState(row[column.selector])

  const handleOnChange = (e: any) => {
    setValue(e.target.value)
    onChange?.(e)
  }

  if (column?.editing) {
    return (
      <div>
        <input
          type={column.type || 'text'}
          name={column.selector}
          style={{ width: '100%' }}
          onChange={handleOnChange}
          value={value}
        />
      </div>
    )
  }

  if (col.cell) {
    return col.cell(row, index, column)
  }
  return row[column.selector]
}

export default EditableCell
