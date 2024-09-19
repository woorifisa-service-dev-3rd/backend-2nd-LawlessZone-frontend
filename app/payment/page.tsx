import { cancelPayment, getPayment, validatePayment } from '@/api/paymentAPI';
import Pay from '@/component/payment/Pay';
import PaymentCancel from '@/component/payment/PaymentCancel';
import PaymentList from '@/component/payment/PaymentList';
import { Box, Table } from '@radix-ui/themes';
import Link from 'next/link';
import { useState } from 'react';

export default async function Payment() {
  const payment = await getPayment();
  const list = Object.values(payment)
    .filter((payment: any) => payment != null)
    .filter((payment: any) => payment.valid);

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
        <Table.Body>
          {list.map((payment: any) => (
            <Table.Row key={payment.id}>
              <Table.Cell>{payment.id}</Table.Cell>
              <Table.Cell>{payment.valid.toString()}</Table.Cell>
              <Table.Cell>
                <PaymentCancel paymentId={payment.id} />
              </Table.Cell>
            </Table.Row>
          ))}
          <Pay />
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
