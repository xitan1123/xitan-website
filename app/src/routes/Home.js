import React from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { connect } from 'dva';
import styles from './Home.css';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function IndexPage() {
    return (
        <Layout>
            <Header className="header">
                <div className="logo"></div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px'}}>
                    <Menu.Item key="1">首页</Menu.Item>
                    <Menu.Item key="2">数据统计</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} style={{background: '#fff' }}>
                    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0}}>
                        <SubMenu key="sub1" title={<span><Icon type="user"/>会员管理</span>}>
                            <Menu.Item key="1">会员信息</Menu.Item>
                            <Menu.Item key="2">会员等级</Menu.Item>
                            <Menu.Item key="3">优惠活动</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop"/>网点管理</span>}>
                            <Menu.Item key="4">网点信息</Menu.Item>
                            <Menu.Item key="5">网点地图</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>saoda</Breadcrumb.Item>
                        <Breadcrumb.Item>asdf</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        Content
                    </Content>
                </Layout>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
