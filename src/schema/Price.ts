import { Field, Int, ObjectType } from 'type-graphql';
import Product from './Product';

@ObjectType()
export default class Price {
    @Field()
    id: string;

    @Field()
    currency: string;

    @Field()
    symbol: string;

    @Field()
    region: string;

    @Field(() => Int)
    value: number;

    @Field(() => Product)
    product: Product;
}
