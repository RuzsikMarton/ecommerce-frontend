import { Products } from "@/types";

const ProductInteractions = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: Products;
  selectedSize: string;
  selectedColor: string;
}) => {

    const handleAddToCart = () => {
        // Add to cart functionality to be implemented
    }

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* Size Selection */}
      {product.sizes && (
        <div className="flex flex-col gap-2">
          <span className="font-medium">Select Size:</span>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-1 border rounded-md ${
                  selectedSize === size
                    ? "border-black font-semibold"
                    : "border-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Color Selection */}
      <div className="">
        <span className="font-medium">Select Color:</span>
        <div className="flex gap-2 mt-2">
          {product.colors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 border-2 ${
                selectedColor === color ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
          Add to Cart
        </button>
        <button className="w-full sm:w-auto border border-black text-black px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductInteractions;
