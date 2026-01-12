import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const [isInput, setIsInput] = useState();

  // Mutation
  const mutation = useMutation({
    mutationFn: async (newProduct) => {
      const res = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      return res.json();
    },
  });

  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/${productId}`
    );
    const data = await response.json();
    return data;
  };
  const {
    isLoading,
    error,
    data: product,
  } = useQuery({ queryKey: ["product", productId], queryFn: fetchProducts });

  //   const discountedPrice =
  //     product.price - (product.price * product.discountPercentage) / 100;

  if (isLoading) {
    return (
      <button type="button" className="text-indigo-500 ..." disabled>
        loading.....
      </button>
    );
  }

  if (error) {
    return <div className="p-6 text-red-500">Something went wrong</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-lg shadow p-6 space-y-5">
      {/* Header */}
      <div>
        <h2 className="text-sm text-gray-500">Product</h2>
        <p className="text-lg font-semibold text-gray-900">{product.title}</p>
      </div>

      {/* Status Messages */}
      {mutation.isLoading && (
        <div className="rounded-md bg-indigo-50 px-3 py-2 text-sm text-indigo-700">
          Updating product title...
        </div>
      )}

      {mutation.error && (
        <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          An error occurred: {mutation.error.message}
        </div>
      )}

      {mutation.isSuccess && (
        <div className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
          Product title updated successfully.
        </div>
      )}

      {/* Input Field */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Update product title
        </label>
        <input
          type="text"
          placeholder="Enter new product title"
          onChange={(e) => setIsInput(e.target.value)}
          disabled={mutation.isLoading}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                 focus:outline-none focus:ring-2 focus:ring-indigo-500
                 focus:border-indigo-500 disabled:bg-gray-100"
        />
      </div>

      {/* Action Button */}
      <button
        onClick={() => mutation.mutate({ title: isInput })}
        disabled={mutation.isLoading}
        className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white
               hover:bg-indigo-700 transition disabled:opacity-50"
      >
        {mutation.isLoading ? "Updating..." : "Update Product"}
      </button>
    </div>
  );
};

export default Product;
