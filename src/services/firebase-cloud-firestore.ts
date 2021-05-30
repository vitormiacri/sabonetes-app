import firestore, { firebase } from '@react-native-firebase/firestore';

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

  public static async getFavorites(userId: string): Promise<ProductProps[]> {
    try {
      let favorites: ProductProps[] = [];
      let productsIds: string[] = [];
      const snapshotFavorites = await firestore()
        .collection('sabonetes')
        .doc('favoritos')
        .collection(userId)
        .get();

      snapshotFavorites.docs.forEach(item => {
        productsIds.push(item.id.trim());
      });

      const request = await firestore()
        .collection<ProductProps>('sabonetes')
        .where(firebase.firestore.FieldPath.documentId(), 'in', productsIds)
        .get();

      request.docs.forEach(item =>
        favorites.push({ id: item.id, ...item.data() }),
      );

      return Promise.resolve(favorites);
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  public static async setFavorite(
    userId: string,
    productId: string,
  ): Promise<boolean> {
    try {
      await firestore()
        .collection('sabonetes')
        .doc('favoritos')
        .collection(userId)
        .doc(productId)
        .set({});
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  public static async removeFavorite(
    userId: string,
    productId: string,
  ): Promise<boolean> {
    try {
      await firestore()
        .collection('sabonetes')
        .doc('favoritos')
        .collection(userId)
        .doc(productId)
        .delete();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
