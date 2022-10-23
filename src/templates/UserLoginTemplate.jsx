import { Layout } from "antd";
import React from "react";
const { Sider, Content } = Layout;

const UserLoginTemplate = ({ children }) => {
  return (
    <Layout>
      <Sider
        width={window.innerWidth / 2}
        style={{
          height: window.innerHeight,
          backgroundImage:
            "url(https://tse4.mm.bing.net/th?id=OIP.cNnIbHlJn0ZFcP5YPU6UCAEsC7&pid=Api&P=0)",
        }}
      >
        Sider
      </Sider>
      <Content>{children}</Content>
    </Layout>
  );
};

export default UserLoginTemplate;
