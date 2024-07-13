import React from "react";
import { useForm } from "react-hook-form";
import { TProduct } from "../../interfaces";
import { useCreateProductMutation } from "../../redux/baseApi";

interface Props {
  onClose: () => void;
}

const AddProductsModal: React.FC<Props> = ({ onClose }) => {

    const [addCreateProduct, {data, error, isLoading}] = useCreateProductMutation(undefined);



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Define categories (adjust as per your application's categories)
  const categories = [
    "Camping Tent",
    "Sleeping Bag",
    "Backpack",
    "Portable Stove",
    "Hiking Boots",
    "Outdoor Clothing",
  ];

  const onSubmit = async (data: TProduct) => {


   if (error) {
    console.error("Error creating product:", error);
    return;
  }

   const createProduct = {
    name: data?.name,
    price: Number(data?.price),
    stockQuantity: Number(data?.stockQuantity),
    category: data?.category,
    ratings: Number(data?.ratings),
    images: (data?.images || "").split(",").map((url: string) => url.trim()),
    description: data?.description,
   }
   
   console.log(createProduct);

   const res = await addCreateProduct(createProduct);

   console.log(res);

    onClose(); // Close modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full">
        <div className="p-4">
          <p className="text-lg font-semibold">Create New Product</p>
          <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Product Name */}
            <div className="mb-4">
              <label
                htmlFor="productName"
                className="block text-sm font-medium text-gray-700"
              >
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                {...register("name", { required: true })}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500">Product Name is required</p>
              )}
            </div>

            {/* Category */}
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                {...register("category", { required: true })}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.category ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-xs text-red-500">Category is required</p>
              )}
            </div>

            {/* Price */}
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                {...register("price", { required: true, min: 0 })}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.price ? "border-red-500" : ""
                }`}
              />
              {errors.price && (
                <p className="text-xs text-red-500">
                  Price is required and must be a positive number
                </p>
              )}
            </div>

            {/* Stock Quantity */}
            <div className="mb-4">
              <label
                htmlFor="stockQuantity"
                className="block text-sm font-medium text-gray-700"
              >
                Stock Quantity
              </label>
              <input
                type="number"
                id="stockQuantity"
                {...register("stockQuantity", { required: true, min: 1 })}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.stockQuantity ? "border-red-500" : ""
                }`}
              />
              {errors.stockQuantity && (
                <p className="text-xs text-red-500">
                  Stock Quantity is required and must be a positive number
                </p>
              )}
            </div>

            {/* Ratings */}
            <div className="mb-4">
              <label
                htmlFor="ratings"
                className="block text-sm font-medium text-gray-700"
              >
                Ratings
              </label>
              <input
                type="number"
                step="0.1"
                id="ratings"
                {...register("ratings", { required: true, min: 0, max: 5 })}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.ratings ? "border-red-500" : ""
                }`}
              />
              {errors.ratings && (
                <p className="text-xs text-red-500">
                  Ratings are required and must be between 0 and 5
                </p>
              )}
            </div>

            {/* Images */}
            <div className="mb-4">
              <label
                htmlFor="images"
                className="block text-sm font-medium text-gray-700"
              >
                Images (URLs, separated by commas)
              </label>
              <textarea
                id="images"
                {...register("images", { required: true })}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.images ? "border-red-500" : ""
                }`}
              />
              {errors.images && (
                <p className="text-xs text-red-500">
                  Images URLs are required, separated by commas
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                {...register("description", { required: true })}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.description ? "border-red-500" : ""
                }`}
              />
              {errors.description && (
                <p className="text-xs text-red-500">Description is required</p>
              )}
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded ml-2"
              >
                Create Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductsModal;