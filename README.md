### API End points


## end point to get sample data

### body 

`url` 
```json
res = fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eTOKEN'
        }

```
- to fileter data

- acceptable filteres Values
```
Companies : "AMZ", "FLP", "SNP", "MYN", "AZO"
```
```
Categories: "Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth".
"Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"
```
```json
company: 'AMZ',
    category: 'TV',
    minPrice: 1,
    maxPrice: 10000,
    rating: 0,
```


`response`
```json 
{
"productName": "Laptop 1",
"price": 2236,
"rating": 4.7,
"discount": 63,
"availability": "yes"
"productName": "Laptop 13",
"price": 1244,
"rating": 4.5,
"discount": 45,
"availability": "out-of-stock"
"productName": "Laptop 3",
"price": 9102,
}
```