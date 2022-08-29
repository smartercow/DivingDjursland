import { Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Content = ({ navigation }) => {
  const { asPath } = useRouter();

  return (
    <div className="w-full">
      <Navbar isBordered variant="sticky" css={{ backgroundColor: "#0A2540" }}>
        <Navbar.Toggle showIn="xs" color="primary" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Link color="primary" href="/">
            <div className="logo w-10 h-auto"></div>
          </Link>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          {navigation.map((item, index) => {
            if (asPath === item.link)
              return (
                <Navbar.Link isActive key={index} href={item.link}>
                  {item.title}
                </Navbar.Link>
              );
            else
              return (
                <Navbar.Link key={index} href={item.link}>
                  {item.title}
                </Navbar.Link>
              );
          })}
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="primary"
              onAction={(actionKey) => console.log({ actionKey })}
              disabledKeys={["🇬🇧eng"]}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                Turer
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Indstillinger</Dropdown.Item>
              <Dropdown.Item key="hjaelp" withDivider>
                Hjælp
              </Dropdown.Item>
              <Dropdown.Item key="logud" withDivider color="error">
                Lod ud
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse css={{ width: "100%" }}>
          {navigation.map((item, index) => {
            if (asPath === item.link)
              return (
                <Navbar.CollapseItem
                  key={item}
                  activeColor="primary"
                  isActive
                >
                  <Link
                    color="primary"
                    css={{
                      minWidth: "100%",
                    }}
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                </Navbar.CollapseItem>
              );
            else
              return (
                <Navbar.CollapseItem
                  key={item}
                  activeColor="primary"
                >
                  <Link
                    color="primary"
                    css={{
                      minWidth: "100%",
                    }}
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                </Navbar.CollapseItem>
              );
          })}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Content;
