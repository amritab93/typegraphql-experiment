export interface ProductData {
    name: string;
    type: string;
    language: string;
    id: string;
}

export interface PriceData {
    productIdentifier: string;
    currency: string;
    symbol: string;
    region: string;
    value: number;
}

export const prices: PriceData[] = [
    {
        productIdentifier: 'EST_GLB_BS-SKU-9781597491525_Physical',
        currency: 'USD',
        symbol: '$',
        region: '',
        value: 16000,
    },
    {
        productIdentifier: 'EST_GLB_BS-SKU-9781597491525_Physical',
        currency: 'EUR',
        symbol: '€',
        region: '',
        value: 14300,
    },
    {
        productIdentifier: 'EST_GLB_BS-SKU-9781597491526_Virtual',
        currency: 'USD',
        symbol: '$',
        region: '',
        value: 17000,
    },
    {
        productIdentifier: 'EST_GLB_BS-SKU-9781597491526_Virtual',
        currency: 'GBP',
        symbol: '€',
        region: '',
        value: 14500,
    },
    {
        productIdentifier: 'EST_GLB_BS-SKU-9781597491531_Physical',
        currency: 'USD',
        symbol: '$',
        region: '',
        value: 17000,
    },
    {
        productIdentifier: 'EST_GLB_BS-SKU-9781597491527_Physical',
        currency: 'USD',
        symbol: '$',
        region: '',
        value: 17000,
    },
];

export const products: ProductData[] = [
    {
        name: 'cheese',
        type: 'print',
        language: 'french',
        id: 'EST_GLB_BS-SKU-9781597491525_Physical',
    },
    {
        name: 'wine',
        type: 'ebook',
        language: 'french',
        id: 'EST_GLB_BS-SKU-9781597491526_Virtual',
    },
    {
        name: 'baguette',
        type: 'print',
        language: 'german',
        id: 'EST_GLB_BS-SKU-9781597491531_Physical',
    },
    {
        name: 'pickles',
        type: 'print',
        language: 'english',
        id: 'EST_GLB_BS-SKU-9781597491527_Physical',
    },
];
