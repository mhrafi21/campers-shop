import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSearchQuery,
  setSelectedCategory,
  setPriceRange,
  setSortBy,
  clearFilters,
} from '../../redux/features/products/productsSlice';
import { RootState, AppDispatch } from '../../redux/store';
import { useGetProductsQuery } from '../../redux/baseApi';

const ProductsPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  // Selector functions should be outside the component body
  const searchQuery = useSelector((state: RootState) => state.products.searchQuery);
  const selectedCategory = useSelector((state: RootState) => state.products.selectedCategory);
  const minPrice = useSelector((state: RootState) => state.products.priceRange.min.toString());
  const maxPrice = useSelector((state: RootState) => state.products.priceRange.max.toString());
  const sortBy = useSelector((state: RootState) => state.products.sortBy);

  const {
    data: products,
    error,
    isLoading,
    refetch, // Optional: If you need to manually refetch data
  } = useGetProductsQuery({
    search: searchQuery,
    category: selectedCategory,
    minPrice: minPrice,
    maxPrice: maxPrice,
    sort: sortBy,
  });

  console.log(products)

  // Event handlers
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedCategory(event.target.value));
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setPriceRange({ ...useSelector((state: RootState) => state.products.priceRange), [name]: Number(value) }));
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(event.target.value as 'asc' | 'desc'));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  // useEffect example (if needed)
  useEffect(() => {
    // Perform any side effects or initializations here
    // For example, dispatch initial actions, fetch initial data, etc.
  }, []); // Empty dependency array ensures it runs only once on component mount

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        {/* Filter controls */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded-md mr-4 mb-2 md:mb-0"
          />

          {/* Category */}
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-2 border border-gray-300 rounded-md mr-4 mb-2 md:mb-0"
          >
            <option value="">All Categories</option>
            <option value="Camping Tent">Camping Tent</option>
            <option value="Backpack">Backpack</option>
            {/* Add more options as needed */}
          </select>

          {/* Price Range */}
          <div className="flex items-center">
            <input
              type="number"
              placeholder="Min Price"
              name="min"
              value={minPrice}
              onChange={handlePriceChange}
              className="p-2 border border-gray-300 rounded-l-md mr-2"
            />
            <input
              type="number"
              placeholder="Max Price"
              name="max"
              value={maxPrice}
              onChange={handlePriceChange}
              className="p-2 border border-gray-300 rounded-r-md mr-4"
            />
          </div>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="p-2 border border-gray-300 rounded-md mr-4"
          >
            <option value="asc">Price Low to High</option>
            <option value="desc">Price High to Low</option>
          </select>

          {/* Clear Filters */}
          <button
            onClick={handleClearFilters}
            className="p-2 bg-gray-800 text-white rounded-md"
          >
            Clear Filters
          </button>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products?.data?.map(product => (
            <div key={product._id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-bold">${product.price}</p>
                {/* View Details button ... */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
