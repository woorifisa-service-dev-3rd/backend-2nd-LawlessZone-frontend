'use client';

import { cancelPayment } from '@/api/paymentAPI';
import { Box, Table } from '@radix-ui/themes';
import Link from 'next/link';
import { useState } from 'react';

export default function PaymentList({ paymentList }) {
  const [payment, setPayment] = useState(paymentList);
  const list= Object.values(paymentList).filter((payment:any) =>(payment !=null)).filter((payment:any) =>(payment.valid));
  
  return (
    <Box>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>id</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>valid</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{ list.map((payment:any)=>(
            <Table.Row key={payment.id}>
                <Table.Cell>{payment.id}</Table.Cell>
                <Table.Cell>{payment.valid.toString()}</Table.Cell>
                <Table.Cell>
                    <button onClick={()=>cancelPayment(payment.id)}>환불 </button>
                    {/* <Link href={`/${payment.id}/cancel`}>환불하기</Link>  */}
                </Table.Cell>
            </Table.Row>
        ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
