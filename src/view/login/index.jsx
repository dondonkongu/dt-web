import { Button, Input, Checkbox, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../../api";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    BASE_URL["post"]("/auth/log-in", user).then((res) => {

      console.log(res);
      if (res.status === 200) {
        if(res.data.result.authenticated===true){
        navigate("/");

        localStorage.setItem("token", res.data.result.token);
      }
    }
  }
    ).catch((err) => {
      notification.error({
        message: "Đăng nhập thất bại",
        description: "Tài khoản hoặc mật khẩu không đúng",
      });
      console.log(err);
      
    }
    );
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full sm:w-[70%] flex flex-col justify-center items-center">
        <div className="mb-0 text-center px-4 sm:px-0">
          <h2 className="text-[20px] font-bold">Chào mừng quay trở lại</h2>
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
              Email
            </label>
            <Input
              onChange={handleChange}
              placeholder="Nhập email của bạn"
              name="email"
              className="w-full h-12 px-4" 
            ></Input>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-[16px]" htmlFor="">
              Password
            </label>
            <Input
              type="password"
              placeholder="Nhập mật khẩu"
              onChange={handleChange}
              name="password"
              className="w-full h-12 px-4" 
            ></Input>
          </div>
          <div className="flex justify-end items-center mt-2">
            <Link to="/forgot-password" className=" text-blue-500">
              Quên mật khẩu?
            </Link>
          </div>

          <div className="mt-5">
            <Button
            htmlType="submit"
              className="w-full h-12 text-[18px] font-semibold"
              type="primary"
            >
              Đăng nhập
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
              Bạn chưa có tài khoản?{" "}
              <Link to="/register" className="text-blue-500 font-bold">
                Đăng ký ngay
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
