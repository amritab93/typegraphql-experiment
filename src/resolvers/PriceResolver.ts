import { FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { PriceData, prices, products } from '../data';
import Price from '../schema/Price';

@Resolver(() => Price)
export class PricesResolver {
    @Query(() => [Price])
    fetchPrices(): PriceData[] {
        return prices;
    }

    @FieldResolver()
    product(@Root() priceData: PriceData) {
        return products.find((product) => {
            return product.id === priceData.productIdentifier;
        });
    }
}
