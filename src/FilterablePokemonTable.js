import React, { useState } from 'react'
//import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleFilterTextChange = filterText => {
        setFilterText(filterText);
    }

    const handleInStockChange = inStockOnly => {
        setInStockOnly(inStockOnly);
    }

    return (
        <div>
            <SearchBar 
                inStockOnly={inStockOnly} 
                onFilterTextChange={handleFilterTextChange}
                onInStockChange={handleInStockChange}
            />
            <ProductTable 
                products={products} 
                filterText={filterText}
                inStockOnly={inStockOnly} 
            />
        </div>
    )
}

export default FilterableProductTable
