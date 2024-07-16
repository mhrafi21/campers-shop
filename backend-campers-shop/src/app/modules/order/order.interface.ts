

// order.interface.ts
export type TOrder = {
    name: string;
    email: string;
    phone: string;
    totalAmount: number;
    paymentMethod: string;
    address: string;
    data?: {
        _id: string
       product: {_id: string}
      productId: string;
      quantity: number;
    }[];
  };
  