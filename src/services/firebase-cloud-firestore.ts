import firestore from '@react-native-firebase/firestore';
export type ProductProps = {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  price: number;
  createdAt: number;
};

export class FirebaseFirestore {
  public static async getProducts(): Promise<any[] | []> {
    try {
      let products: ProductProps[] = [];
      const request = await firestore()
        .collection<ProductProps>('sabonetes')
        .orderBy('createdAt', 'desc')
        .get();
      request.docs.forEach(item =>
        products.push({ id: item.id, ...item.data() }),
      );
      return Promise.resolve(products);
    } catch (err) {
      return [];
    }
  }
}
