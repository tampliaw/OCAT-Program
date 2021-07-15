import React, { useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      const _assessments = await AssessmentService.getList();
      // console.log(`component`, _assessments);
      setAssessments(_assessments);
    };
    fetchAssessments();
  }, []);

  const data = useMemo(() => assessments, [ assessments ]);
  console.log(assessments);

  const columns = useMemo(() => [
    {
      Header: `Id`,
      accessor: `id`,
    }, {
      Header: `Score`,
      accessor: `score`,
    }, {
      Header: `Risk Level`,
      accessor: `risk_level`,
    }, {
      Header: `Created At`,
      accessor: `created_at`,
    }, {
      Header: `Deleted At`,
      accessor: `deleted_at`,
    },
  ],
  []);

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: `solid 1px blue` }}>
      <thead>
        {headerGroups.map(headerGroup =>
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column =>
              <th
                {...column.getHeaderProps()}
                style={{
                  background: `aliceblue`,
                  borderBottom: `solid 3px red`,
                  color: `black`,
                  fontWeight: `bold`,
                }}
              >
                {column.render(`Header`)}
              </th>)}
          </tr>)}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell =>
                <td
                  {...cell.getCellProps()}
                  style={{
                    background: `papayawhip`,
                    border: `solid 1px gray`,
                    padding: `10px`,
                  }}
                >
                  {cell.render(`Cell`)}
                </td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
