import React, { FormEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchQuery,
  setSelectedCategory,
  setPriceRange,
  setSortBy,
  clearFilters,
} from "../../redux/features/products/productsSlice";
import { RootState, AppDispatch } from "../../redux/store";
import { useGetProductsQuery } from "../../redux/baseApi";
import DefaultContainer from "../../components/DefaultContainer";
import { TProduct } from "../../interfaces";

const ProductsPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const searchQuery = useSelector(
    (state: RootState) => state.products.searchQuery
  );
  const selectedCategory = useSelector(
    (state: RootState) => state.products.selectedCategory
  );
  const priceRange = useSelector((state: RootState) => state.products.priceRange);
  const sortBy = useSelector((state: RootState) => state.products.sortBy);

  const {
    data: products,
    isLoading,
  } = useGetProductsQuery({
    search: searchQuery,
    category: selectedCategory,
    minPrice: priceRange.min.toString(),
    maxPrice: priceRange.max.toString(),
    sort: sortBy,
  });

  const handleSearchChange = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      search: { value: string };
    };
    dispatch(setSearchQuery(target.search.value));
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setSelectedCategory(event.target.value));
  };

  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    switch (value) {
      case "0-50":
        dispatch(setPriceRange({ min: 0, max: 50 }));
        break;
      case "51-100":
        dispatch(setPriceRange({ min: 51, max: 100 }));
        break;
      case "101-200":
        dispatch(setPriceRange({ min: 101, max: 200 }));
        break;
      // Add more ranges as needed
      default:
        // Handle default case
        break;
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(event.target.value as "asc" | "desc"));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  useEffect(() => {
    // Perform any initial actions here if needed
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <DefaultContainer>
        {isLoading && <div>Loading...</div>}
      </DefaultContainer>
      <div className="container mx-auto py-8">
        {/* Filter controls */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
          {/* Search */}
          <form onSubmit={handleSearchChange}>
            <input
              type="text"
              placeholder="Search products..."
              name="search"
              className="p-2 border border-gray-300 rounded-md mr-4 mb-2 md:mb-0"
            />
            <button type="submit">Search</button>
          </form>

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
          <select
            value={`${priceRange.min}-${priceRange.max}`}
            onChange={handlePriceRangeChange}
            className="p-2 border border-gray-300 rounded-md mr-4 mb-2 md:mb-0"
          >
            <option value="0-50">Up to $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-200">$101 - $200</option>
            {/* Add more ranges as needed */}
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="p-2 border border-gray-300 rounded-md mr-4 mb-2 md:mb-0"
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
          {products?.data?.map((product: TProduct) => (
            <div
              key={product._id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover object-center"
              />
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
