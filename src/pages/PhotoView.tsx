import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PhotoDetails from "../components/PhotoDetails";

const PhotoView: FC = () => {
  const pageCN = "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100";
  const containerCN = "container mx-auto px-4 sm:px-6 lg:px-8 py-8";

  const location = useLocation();
  const navigate = useNavigate();
  const photo = location.state.photo;

  return (
    <div className={pageCN}>
      <div className={containerCN}>
        <PhotoDetails photo={photo} onBack={() => navigate("/")} />
      </div>
    </div>
  );
};

export default PhotoView;
