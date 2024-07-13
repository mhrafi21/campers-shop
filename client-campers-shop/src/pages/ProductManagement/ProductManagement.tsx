import React, { useState } from "react";
import UpdateProductModal from "./UpdateProductModal";
import AddProductsModal from "./AddProductsModal";
import DefaultContainer from "../../components/DefaultContainer";



const ProductManagement: React.FC<{Products: TProduct}> = ({ products }) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [productIdToDelete, setProductIdToDelete] = useState<number | null>(
    null
  );
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [productIdToUpdate, setProductIdToUpdate] = useState<number | null>(
    null
  );
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const handleDeleteProduct = (productId: number) => {
    setProductIdToDelete(productId);
    setIsDeleting(true);
  };

  const confirmDeleteProduct = () => {
    // Perform delete logic here (e.g., API call, state update)
    // For demonstration, let's log the delete action
    console.log(`Deleting product with ID: ${productIdToDelete}`);

    // Reset delete state
    setIsDeleting(false);
    setProductIdToDelete(null);
  };

  const cancelDeleteProduct = () => {
    // Reset delete state
    setIsDeleting(false);
    setProductIdToDelete(null);
  };

  const handleDeleteImage = (productId: number, imageIndex: number) => {
    // Perform delete image logic here (e.g., update state)
    console.log(`Deleting image ${imageIndex} of product ${productId}`);
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
                            onClick={() => handleDeleteImage(product.id, index)}
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
                        onClick={() => handleDeleteProduct(product.id)}
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
        {isDeleting && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-md">
              <p className="text-lg font-semibold">Confirm Delete?</p>
              <p className="text-sm text-gray-700 mt-2">
                Are you sure you want to delete this product?
              </p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded mr-2"
                  onClick={confirmDeleteProduct}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded"
                  onClick={cancelDeleteProduct}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
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
