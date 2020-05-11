import 'reflect-metadata';
import { GraphQLServer } from 'graphql-yoga';
import { buildSchemaSync } from 'type-graphql';
import { PricesResolver } from './resolvers/PriceResolver';
import { ProductResolver } from './resolvers/ProductResolver';

function createServer(): GraphQLServer {

    const schema = buildSchemaSync({
        resolvers: [ProductResolver, PricesResolver],
        emitSchemaFile: true,
    });

    return new GraphQLServer({
        schema,
    });
}

const server = createServer();

server.start(() => console.log('Server is running on http://localhost:4000'));
