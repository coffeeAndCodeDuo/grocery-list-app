import { toast } from 'react-toastify';
import { updateProfileImage } from '../../services/UserService.jsx';

export default function UpdateProfileImgButton({ onUpdate }) {

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const updatedImageUrl = await updateProfileImage(formData);
      if (onUpdate) onUpdate(updatedImageUrl);
    } catch (error) {
      console.error("Error updating profile image", error);
      toast.error("Error updating profile image");
    }
  };

  return (
    <div>
      <button
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => document.getElementById("profileImageInput").click()}
      >
        Alterar Foto
      </button>
      <input
        id="profileImageInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}
