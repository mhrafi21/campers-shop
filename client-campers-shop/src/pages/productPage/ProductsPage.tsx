import React, { FormEvent } from "react";
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
import ProductsList from "../../components/ProductsList";

const ProductsPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const searchQuery = useSelector(
    (state: RootState) => state.products.searchQuery
  );
  const selectedCategory = useSelector(
    (state: RootState) => state.products.selectedCategory
  );
  const priceRange = useSelector(
    (state: RootState) => state.products.priceRange
  );
  const sortBy = useSelector((state: RootState) => state.products.sortBy);

  const { data: products, isLoading } = useGetProductsQuery({
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

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
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
      case "201-400":
        dispatch(setPriceRange({ min: 201, max: 400 }));
        break;
      case "401-600":
        dispatch(setPriceRange({ min: 401, max: 600 }));
        break;
      case "601-800":
        dispatch(setPriceRange({ min: 601, max: 800 }));
        break;
      case "801-1200":
        dispatch(setPriceRange({ min: 801, max: 1200 }));
        break;
      case "1201-12000000":
        dispatch(setPriceRange({ min: 801, max: 12000000 }));
        break;
      default:
        break;
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(event.target.value as "asc" | "desc"));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <DefaultContainer>{isLoading && <div>Loading...</div>}</DefaultContainer>
      <DefaultContainer>
        <div className="py-8">
          {/* searching */}
          <div className="">
            <form
              onSubmit={handleSearchChange}
              className="flex items-center mb-2 md:mb-0"
            >
              <input
                type="text"
                placeholder="Search products..."
                name="search"
                className="p-2 w-full md:w-1/2 border border-gray-300 rounded-md mr-4"
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
              >
                Search
              </button>
            </form>
          </div>

          {/* Filter controls */}

          <div className="flex flex-col md:flex-row md:justify-between items-center my-8">
            {/* Search */}
            {/* Category */}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="p-2 border border-gray-300 rounded-md mr-4 mb-2 md:mb-0"
            >
              <option value="">All Categories</option>
              <option value="camping-tent">Camping Tent</option>
              <option value="backpack">Backpack</option>
              <option value="sleeping-bag">Sleeping Bag</option>
              <option value="portable-stove">Portable Stove</option>
              <option value="camping-chair">Camping Chair</option>
              <option value="lantern">Lantern</option>
              <option value="hiking-boots">Hiking Boots</option>
              <option value="camping-cookware">Camping Ware</option>
              <option value="water-bottle">Water Bottle</option>
              <option value="first-aid-kit">First Aid Kit</option>
              <option value="camping-hammock">Camping Hammock</option>
              <option value="camping-cooler">Camping Cooler</option>
              <option value="outdoor-clothing">Outdoor Clothing</option>
              <option value="camping-knife">Camping Knife</option>
            </select>

            {/* Price Range */}
            <select
              value={`${priceRange.min}-${priceRange.max}`}
              onChange={handlePriceRangeChange}
              className="p-2 border border-gray-300 rounded-md mr-4 mb-2 md:mb-0"
            >
              <option value="0-12000000">Select Price Range</option>
              <option value="0-50">Up to $50</option>
              <option value="51-100">$51 - $100</option>
              <option value="101-200">$101 - $200</option>
              <option value="201-400">$201 - $400</option>
              <option value="401-600">$401 - $600</option>
              <option value="601-800">$601 - $800</option>
              <option value="801-1200">$801 - $1200</option>
              <option value="1201-12000000">$1201 - above</option>
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
              className="p-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-200"
            >
              Clear Filters
            </button>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products?.data?.map((product: TProduct) => (
              <ProductsList key={product._id} product={product}></ProductsList>
            ))}
          </div>
        </div>
      </DefaultContainer>
    </div>
  );
};

export default ProductsPage;
