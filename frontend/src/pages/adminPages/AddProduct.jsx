import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../api/product.api.js";
import Modal from "../../components/Modal.jsx";
import Processing from "../../components/Processing.jsx";
const AddProduct = () => {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);
  const [formData, setFormData] = useState({
    thumbnail: null,
    images: [],
    title: "",
    description: "",
    price: "",
    discount: "",
    stock: "",
    category: "",
    product_owner: "",
  });
  const [modalData, setModalData] = useState({
    title: "",
    content: "",
  });
  const fileInputRef = useRef(null);
  const sellerProfile = useSelector((state) => state.seller.sellerProfile);

  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [imageNames, setImageNames] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, thumbnail: file });
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };
  const handleMultipleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const leftImages = 6 - formData.images.length;

    if (files.length === 0) {
      // Reset file input if no files are selected
      fileInputRef.current.value = "";
      return;
    }

    if (leftImages >= files.length) {
      const newFiles = [...formData.images, ...files];
      setFormData({ ...formData, images: newFiles });

      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews((prev) => [...prev, ...newPreviews]);

      const newFileNames = files.map((file) => file.name);
      setImageNames((prev) => [...prev, ...newFileNames]);
    } else {
      alert(`You can only add up to ${leftImages} more images.`);
    }

    // Reset file input after handling file selection
  };

  const handleRemoveImage = (index) => {
    // Filter out the image to be removed using its index
    const updatedImages = formData.images.filter((_, i) => i !== index);
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
    const updatedNames = imageNames.filter((_, i) => i !== index);

    // Update the uploadedFiles state accordingly
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);

    // Update the formData with the new set of images
    setFormData({ ...formData, images: updatedImages });
    setImagePreviews(updatedPreviews);
    setImageNames(updatedNames);

    // Reset file input field if no images are left
    if (updatedImages.length === 0) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.thumbnail && formData.images.length === 0) {
      setErrorMessage(
        "Please select at least one image (thumbnail or product images)."
      );
      return;
    }
    setErrorMessage("");
    console.log(sellerProfile._id);
    setFormData({ ...formData, product_owner: sellerProfile._id });
    console.log("Form Data Submitted:", formData);
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("discount", formData.discount);
    formDataToSend.append("stock", formData.stock);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("product_owner", sellerProfile._id);
    formDataToSend.append("thumbnail", formData.thumbnail);
    formData.images.forEach((image) => {
      formDataToSend.append(`images`, image);
    });

    try {
      setShowLoader(true);

      const response = await addProduct(formDataToSend);
      setShowLoader(false);
      console.log(response);
      if (response.status > 200) {
        setModalData({ ...modalData, content: response.data.message });
        document.getElementById("my_modal_5").showModal();
      } else {
        setModalData({ ...modalData, content: response.data.message });
        navigate("/admin-pannel/products");
        document.getElementById("my_modal_5").showModal();
      }
    } catch (error) {
      console.log("Error adding product:", error);
    }
    // if (response.status > 200) {
    //   alert("product not added X");
    //   return;
    // }
    // console.log(response);
  };

  return (
    <>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          enctype="multipart/form-data"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Thumbnail Image
            </label>
            <input
              type="file"
              name="thumbnail"
              className="file-input w-full"
              accept="image/*"
              onChange={handleThumbnailChange}
              required
            />
            {thumbnailPreview && (
              <div className="mt-2 relative">
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail Preview"
                  className="w-24 h-24 object-cover border rounded"
                />
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, thumbnail: null });
                    setThumbnailPreview(null);
                  }}
                  className="relative top-[-108px] right-[-86px]  p-1 text-red-600"
                >
                  <FaTimes />
                </button>
                <div className="text-sm  mt-1  ">
                  {formData.thumbnail?.name}
                </div>
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Product Images (max 6)
            </label>
            <input
              type="file"
              name="images"
              className="file-input w-full"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={handleMultipleImageChange}
              required
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {imagePreviews.map((src, index) => (
                <div key={index} className="relative">
                  <img
                    src={src}
                    alt={`Product Preview ${index + 1}`}
                    className="w-24 h-24 object-cover border rounded"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="relative top-[-108px] right-[-86px]  p-1 text-red-600"
                  >
                    <FaTimes />
                  </button>
                  <div className="text-sm text-center mt-1 text-wrap w-[120px] overflow-hidden">
                    {imageNames[index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Price</label>
              <input
                type="number"
                name="price"
                className="input input-bordered w-full"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Discount (%)
              </label>
              <input
                type="number"
                name="discount"
                className="input input-bordered w-full"
                value={formData.discount}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <input
                type="text"
                name="category"
                className="input input-bordered w-full"
                value={formData.category}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Stock</label>
              <input
                type="number"
                name="stock"
                className="input input-bordered w-full"
                value={formData.stock}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {errorMessage && (
            <div className="text-red-600 mb-4">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="btn  bg-blue-700 text-white hover:text-black w-full"
          >
            Add Product
          </button>
        </form>
      </div>
      <Modal content={modalData.content} />
      {showLoader && <Processing />}
    </>
  );
};

export default AddProduct;
