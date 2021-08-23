import Image from "next/image";
import { ChangeEvent, useCallback, useRef, VFC } from "react";
import { usePostDispatch } from "../../../hooks/dispatches/usePostDispatch";
import { usePostState } from "../../../hooks/states/usePostState";
import { colorsModule } from "../../../styles/colors";
import { stringCutter } from "../../../utils/stringCutter";
import { ButtonComponent } from "../../Common/Button";
import { ModalContainer } from "./styles";

interface ICheckCreatePostProps {
  title: string;
  content: string;
  openModal: () => void;
  closeModal: () => void;
}

const CheckCreatePostModal: VFC<ICheckCreatePostProps> = ({
  title,
  content,
  openModal,
  closeModal,
}) => {
  const { thumnailUploadLoading, thumnailUploadDone, thumnailURL } =
    usePostState();
  const { dispatchThumnailUpload, dispatchCreatePost } = usePostDispatch();

  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handleThumnailUpload = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      imageInputRef.current.click();
    },
    [imageInputRef.current],
  );

  const onChangeImage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const thumnail = e.target.files[0];
      const thumnailFormData = new FormData();
      thumnailFormData.append("thumnail", thumnail);

      dispatchThumnailUpload(thumnailFormData);
    },
    [dispatchThumnailUpload],
  );

  const handlePublish = useCallback(() => {
    localStorage.removeItem("savePostData");
    dispatchCreatePost({
      title,
      content,
      thumnail: thumnailURL,
    });
    openModal();
  }, [title, content, thumnailURL]);

  return (
    <ModalContainer>
      <h1 className="publish_title">출간할 제목 : {title}</h1>
      <p className="publish_content">{stringCutter(content, 1000)}</p>
      <form
        className="publish_thumnail"
        encType="multipart/form-data"
        onSubmit={handleThumnailUpload}
      >
        <h2>포스트 섬네일 업로드</h2>
        <input
          type="file"
          name="thumnail"
          hidden
          ref={imageInputRef}
          onChange={onChangeImage}
        />
        <ButtonComponent
          handleFunc={handleThumnailUpload}
          customStyle={{
            marginBottom: "2rem",
          }}
        >
          {thumnailUploadLoading ? "업로드 중..." : "섬네일 업로드"}
        </ButtonComponent>
        {thumnailUploadDone && (
          <Image
            src={`http://localhost:8080/${thumnailURL}`}
            alt={thumnailURL}
            width={400}
            height={300}
            blurDataURL={`http://localhost:8080/${thumnailURL}`}
            placeholder="blur"
          />
        )}
      </form>
      <div className="publish">
        <ButtonComponent handleFunc={handlePublish}>출간하기</ButtonComponent>
        <ButtonComponent
          customStyle={{
            background: colorsModule.hlog_gray_2,
            color: colorsModule.hlog_dark_2,
          }}
          handleFunc={closeModal}
        >
          취소하기
        </ButtonComponent>
      </div>
    </ModalContainer>
  );
};

export default CheckCreatePostModal;
