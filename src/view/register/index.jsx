import { Button, Checkbox, Input, notification } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import {  checkRePassword, validateEmail, validatePassword } from "../../utils/validateData";
import BASE_URL from "../../api";


export default function Register() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [fullnameError, setFullnameError] = useState(""); 
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
  const [isCheck, setIsCheck] = useState(true);

  const validateData = (name, value) => {
    let isValid = true;
    switch (name) {
      case "fullname":
        if (!value) {
          setFullnameError("Họ và tên không được để trống");
          isValid = false; 
        }else{
          setFullnameError("");
        }
        break;
      case "email":
        if (!value) {
          setEmailError("Email không được để trống");
          isValid = false;
        } else {
          if (!validateEmail(value)) {
            setEmailError(
              "Email không đúng dinh dạng"
            );
          } else {
            setEmailError("");
          }
        }
        break;
      case "password":
        if (!value) {
          setPasswordError("Mật khẩu không được để trống");
          isValid = false;
        } else {
          if (!validatePassword(value)) {
            setPasswordError(
              "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt và nhiều hơn 4 ký tự"
            );
            isValid = false;
          } else {
            setPasswordError("");
          }
        }
        break;
        case "rePassword":
        if (!value) {
          setRePasswordError("vui lòng nhập lại mật khẩu");
          isValid = false;
        } else {
          if (!checkRePassword(user.password,value)) {
            setRePasswordError(
              "Mật khẩu không khớp"
            );
            isValid = false;
          } else {
            setRePasswordError("");
          }
        }
        break;
      default:
        break;
    }
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    validateData(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullnameValid = validateData("fullname", user.fullname);
    const emailValid = validateData("email", user.email);
    const passwordValid = validateData("password", user.password);

    console.log(fullnameValid, emailValid, passwordValid);

    if (fullnameValid && emailValid && passwordValid ) {
        console.log(user);

        BASE_URL["post"]("users/candidate",user).then((res) => {
          notification.success({
            message: "Đăng ký thành công",
            description: "Chúc mừng bạn đã đăng ký thành công",
          });
        }).catch((err) => {
          notification.error({
            message: "Đăng ký thất bại",
            description: err.response.data.message
          });
          console.log(err);
        }
        );
        
    }
};



  const onchangeCheckbox = (e) => {
    setIsCheck(e.target.checked);
    console.log(e.target.checked);
  };

  return (
    <div className="flex min-h-screen">
    <div className="w-full sm:w-[70%] flex flex-col justify-center items-center">
      <div className="mb-0 text-center px-4 sm:px-0">
        <h2 className="text-[20px] font-bold">
          Chào mừng bạn đến với JobNet
        </h2>
        <h2 className="text-[16px] text-[#6c757d]">
          Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[700px] px-2 py-5"
        action=""
      >
        <div className="flex flex-col gap-2 mt-1">
          <label className="text-[16px]" htmlFor="">
            Họ và tên
          </label>
          <Input
            onChange={handleChange}
            placeholder="Nhập họ và tên"
            name="fullname"
            className="w-full h-12 px-4"  
            status={fullnameError ? "error" : ""}
          ></Input>
          {fullnameError && (
            <span className="error-message">{fullnameError}</span>
          )}
        </div>
        
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-[16px]" htmlFor="">
            Email
          </label>
          <Input
            onChange={handleChange}
            placeholder="Nhập email của bạn"
            name="email"
            className="w-full h-12 px-4"  
            status={emailError ? "error" : ""}
          ></Input>
          {emailError && (
            <span className="error-message">{emailError}</span>
          )}
        </div>
  
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-[16px]" htmlFor="">
            Mật khẩu
          </label>
          <Input
            type="password"
            placeholder="Nhập mật khẩu"
            onChange={handleChange}
            name="password"
            className="w-full h-12 px-4" 
            status={passwordError ? "error" : ""}
          ></Input>
          {passwordError && (
            <span className="error-message">{passwordError}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-[16px]" htmlFor="">
            Nhập lại mật khẩu
          </label>
          <Input
            type="password"
            placeholder="Nhập lại mật khẩu"
            onChange={handleChange}
            name="rePassword"
            className="w-full h-12 px-4" 
            status={passwordError ? "error" : ""}
          ></Input>
          {passwordError && (
            <span className="error-message">{rePasswordError}</span>
          )}
        </div>

  
  
        <div className="flex flex-row mt-4">
          <Checkbox onChange={onchangeCheckbox} defaultChecked={isCheck} />
          <div className="px-1">
            <span>Tôi đã đọc và đồng ý với</span>
            <Link to="/" className="text-blue-500 px-1">
              Điều khoản sử dụng
            </Link>
            <span>và</span>
            <Link to="/" className="text-blue-500 px-1">
              Chính sách bảo mật
            </Link>
            <span>của JobNet</span>
          </div>
        </div>
  
        <div className="mt-5">
          <Button
            htmlType="submit"
            className="w-full h-12 text-[18px] font-semibold"
            type="primary"
            disabled={!isCheck}
          >
            Đăng ký
          </Button>
        </div>
        
        <div className="flex flex-col justify-center items-center mt-2">
          <span className="text-center text-[#6c757d]">
            Hoặc đăng nhập bằng
          </span>
          <div className="flex flex-row justify-between items-center w-full mt-2 gap-4">
            <Button className="rounded border-[2px] h-[45px] flex-1 flex justify-center items-center">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
              <span className="font-semibold">Google</span>
            </Button>
            <Button className="rounded border-[2px] h-[45px] flex-1 flex justify-center items-center">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
              <span className="font-semibold">Facebook</span>
            </Button>
          </div>
        </div>
  
        <div className="mt-4 text-center">
          <span>
            Bạn đã có tài khoản{" "}
            <Link to="/login" className="text-blue-500 font-bold">
              Đăng nhập ngay
            </Link>
          </span>
        </div>
      </form>
    </div>
  
    <div className="hidden sm:block w-[30%] bg-gray-200">
      <div className="h-full flex justify-center items-center">
        <h2>Banner</h2>
      </div>
    </div>
  </div>
  
 
  );
}
