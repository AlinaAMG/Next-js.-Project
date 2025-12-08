import SectionTitle from '@/components/global/SectionTitle';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fetchUsersOrders } from '@/utils/actions';
import { formatCurrency, formatDate } from '@/utils/format';

const OrdersPage = async () => {
  const orders = await fetchUsersOrders();

  return (
    <>
      <SectionTitle text="Your Orders" />
      <Table>
        <TableCaption>Total Orders : {orders.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Products</TableHead>
            <TableHead>Order Total</TableHead>
            <TableHead>Tax</TableHead>
            <TableHead>Shipping</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders &&
            orders.map((order) => {
              return (
                <TableRow key={order.id}>
                  <TableCell>{order.products}</TableCell>
                  <TableCell>{formatCurrency(order.orderTotal)}</TableCell>
                  <TableCell>{order.tax}</TableCell>
                  <TableCell>{order.shipping}</TableCell>
                  <TableCell>{formatDate(order.createdAt)}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </>
  );
};

export default OrdersPage;
