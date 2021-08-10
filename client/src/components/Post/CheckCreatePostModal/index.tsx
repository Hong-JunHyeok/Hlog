import { ChangeEvent, useCallback, useRef, VFC } from "react";
import { stringCutter } from "../../../utils/stringCutter";
import { ButtonComponent } from "../../Common/Button";
import { ModalContainer } from "./styles";

interface ICheckCreatePostProps {
  title: string;
  content: string;
}

const CheckCreatePostModal: VFC<ICheckCreatePostProps> = ({
  title,
  content,
}) => {
  const imageInputRef = useRef<HTMLInputElement>();

  const handleThumnailUpload = useCallback(() => {
    imageInputRef.current.click();
  }, [imageInputRef.current]);

  const onChangeImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log("image", e.target.files[0]);
  }, []);

  return (
    <ModalContainer>
      <h1 className="publish_title">출간할 제목 : {title}</h1>
      <p className="publish_content">{stringCutter(content, 200)}</p>
      <div className="publish_thumnail">
        <h2>포스트 섬네일 업로드</h2>
        <input
          type="file"
          name="thumnail"
          hidden
          ref={imageInputRef}
          onChange={onChangeImage}
        />
        <ButtonComponent handleFunc={handleThumnailUpload}>
          섬네일 업로드
        </ButtonComponent>
      </div>
    </ModalContainer>
  );
};

export default CheckCreatePostModal;
