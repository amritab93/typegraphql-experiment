import { Query, Resolver, Arg, FieldResolver, Root } from 'type-graphql';
import Product from '../schema/Product';
import { ProductData, products, prices } from '../data';

@Resolver(() => Product)
export class ProductResolver {
    @Query(() => Product, { nullable: true })
    productByName(@Arg('name') name: string): ProductData[] | undefined {
        return products.filter((product) => product.name === name);
    }

    @Query(() => [Product])
    fetchProducts(): ProductData[] | undefined {
        return products;
    }

    @FieldResolver()
    prices(@Root() productData: ProductData) {
        return prices.filter((price) => {
            return price.productIdentifier === productData.id;
        });
    }
}
