import React, { useState } from "react";
import UpdateProductModal from "./UpdateProductModal";
import AddProductsModal from "./AddProductsModal";
import DefaultContainer from "../../components/DefaultContainer";
import { TProduct } from "../../interfaces";
import { useDeleteSingleProductMutation } from "../../redux/baseApi";
import Swal from "sweetalert2";

const ProductManagement: React.FC<{ Products: TProduct }> = ({ products }) => {
  const [deleteProduct] = useDeleteSingleProductMutation(undefined);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [productIdToUpdate, setProductIdToUpdate] = useState<number | null>(
    null
  );
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const handleDeleteProduct = async (productId: string) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await deleteProduct(productId).unwrap();
        console.log(res)
        if (res?.success === true) {
          Swal.fire("Deleted!", `${res?.message}`, "success");
        }
      }
    } catch (error) {
      Swal.fire(
        "Failed!",
        "There was a problem deleting your product.",
        "error"
      );
      console.error("Failed to delete product:", error);
    }
  };

  const handleDeleteImage = (imageUrl : string) => {
    // Perform delete image logic here (e.g., update state)
    console.log(imageUrl);
    // Update product images state accordingly
  };

  const openUpdateModal = (productId: number) => {
    setProductIdToUpdate(productId);
    setIsUpdating(true);
  };

  const closeUpdateModal = () => {
    setIsUpdating(false);
    setProductIdToUpdate(null);
  };

  const openCreateModal = () => {
    setIsCreating(true);
  };

  const closeCreateModal = () => {
    setIsCreating(false);
  };

  //   delete product;

  return (
    <DefaultContainer>
      <div className="container mx-auto my-8">
        <div className="flex justify-end mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded "
            onClick={() => openCreateModal()}
          >
            Create Product
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Price</th>
                <th className="py-2 px-4 border-b text-left">Stock Quantity</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
                <th className="py-2 px-4 border-b text-left">Category</th>
                <th className="py-2 px-4 border-b text-left">Ratings</th>
                <th className="py-2 px-4 border-b text-left">Images</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product._id}>
                  <td className="py-2 px-4 border-b">{product.name}</td>
                  <td className="py-2 px-4 border-b">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {product.stockQuantity}
                  </td>
                  <td className="py-2 px-4 border-b">{product.description}</td>
                  <td className="py-2 px-4 border-b">{product.category}</td>
                  <td className="py-2 px-4 border-b">{product.ratings}</td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex flex-wrap gap-2">
                      {product.images.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={image}
                            alt={product.name}
                            className="w-16 h-16 object-cover"
                          />
                          <button
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center"
                            onClick={() => handleDeleteImage(image as string)}
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex gap-2">
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded"
                        onClick={() => openUpdateModal(product._id)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                        onClick={() =>
                          handleDeleteProduct(product._id as string)
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Delete confirmation modal */}
        {/* Update product modal */}
        {isUpdating && (
          <UpdateProductModal
            productId={productIdToUpdate}
            onClose={closeUpdateModal}
          />
        )}
        {/* Create product modal */}
        {isCreating && (
          <AddProductsModal onClose={closeCreateModal}></AddProductsModal>
        )}
      </div>
    </DefaultContainer>
  );
};

export default ProductManagement;
