import React, { useContext, useState } from "react";
import ImageDisplay from "../form/ImageDisplay";
import InputButton from "../form/InputButton";
import InuptField from "../form/InuptField";
import TextTitle from "../form/TextTitle";
import { UserContext } from "../../hooks/UserContext";
import { updateUser } from "../../helper/api_user";

const UserEdit = () => {
  const { setUser } = useContext(UserContext);
  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState(null);
  const [data, setData] = useState({});
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);

  const handleUpdate = async (e) => {
    setLoading(true);
    const updatedUser = await updateUser(e, data);
    if (updateUser) setUser(updatedUser);
    else console.log("Usuário não atualizado");
    setLoading(false);
    // setIsUserModalOpen(false);
  };

  const handleImageOnChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex center-items justify-center mb-1">
      <form
        onSubmit={handleUpdate}
        style={{ width: "400px" }}
        className="bg-white p-5 rounded"
      >
        <TextTitle value="Atualizar o usuário" />

        {image && <ImageDisplay image={image} />}
        <InuptField label="Poster" type="file" onChange={handleImageOnChange} />

        <InuptField
          type="text"
          label="Username"
          onChange={(e) => setData({ ...data, displayName: e.target.value })}
        />

        <InputButton full disabled={loading} label="Atualizar" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UserEdit;
