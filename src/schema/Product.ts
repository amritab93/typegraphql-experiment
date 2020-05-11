import { Field, ObjectType } from 'type-graphql';
import Price from './Price';

@ObjectType()
export default class Product {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    type: string;

    @Field()
    language: string;

    @Field(() => [Price])
    prices: Price[];
}
