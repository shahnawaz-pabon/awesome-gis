import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import { Link, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faTable,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  Accordion,
  Badge,
  Button,
  Image,
  Nav,
  Navbar,
} from "@themesberg/react-bootstrap";
import { navItems } from "../../navs";
import ReactHero from "../../@core/assets/img/preview.png";
import "./sidebar.css";

export default (props: any = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);

  const showClass = show ? "show" : "";
  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props: any) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button
            as={Nav.Link}
            className="d-flex justify-content-between align-items-center sidemenuicon"
          >
            <span>
              <span className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />{" "}
              </span>
              <span className="sidebar-text ">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">{children}</Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props: any) => {
    const {
      title,
      link,
      external,
      target,
      icon,
      image,
      badgeText,
      badgeBg = "secondary",
      badgeColor = "primary",
    } = props;
    const classNames = badgeText
      ? "d-flex justify-content-start align-items-center justify-content-between"
      : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link href={link} target={target} className={classNames}>
          <span>
            {icon ? (
              <span className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />{" "}
              </span>
            ) : null}
            {image ? (
              <Image
                src={image}
                width={20}
                height={20}
                className="sidebar-icon svg-icon"
              />
            ) : null}

            <span className="sidebar-text ">{title}</span>
          </span>
          {badgeText ? (
            <Badge
              pill
              bg={badgeBg}
              text={badgeColor}
              className="badge-md notification-count ms-2"
            >
              {badgeText}
            </Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  let navs = navItems;

  //   if (AuthUser.isLooggedIn()) {
  //     let roles = AuthUser.getRoles();
  //     if (roles.includes(UserRole.ADMIN) || roles.includes("DEO") || roles.includes("USEO")) {
  //       navs = navItems;
  //     }
  //   }

  return (
    <>
      <Navbar
        expand={false}
        collapseOnSelect
        variant="dark"
        className="navbar-theme-primary px-4 d-md-none"
      >
        <Navbar.Brand className="me-lg-5" as={Link} to="/">
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle
          as={Button}
          aria-controls="main-navbar"
          onClick={onCollapse}
        >
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar
          className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}
        >
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center"></div>
              <Nav.Link
                className="collapse-close d-md-none"
                onClick={onCollapse}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0 side-Logo-link">
              {/* <NavItem title="BANBEIS " link="/" className="logo"  image={ReactHero}/> */}
              <Link to="/">
                <div
                  id="banbeis_home"
                  className="d-flex justify-content-center text-primary align-items-center p-5"
                >
                  <Image src={ReactHero} width={22} height={22} />
                  <span className="text-primary text-uppercase fw-bold">
                    Banbeis
                  </span>
                </div>
              </Link>
              {navs.map(({ nav, navIndex }: any) => {
                if (nav?.children !== undefined && nav?.children?.length) {
                  return (
                    <CollapsableNavItem
                      key={navIndex}
                      eventKey={nav.path}
                      title={nav.title}
                      // icon={faTable}
                      icon={nav.icon}
                    >
                      {nav.children.map(({ navChild, navChildIndex }: any) => {
                        return (
                          <NavItem
                            key={navChildIndex}
                            title={navChild.title}
                            link={navChild.path}
                          />
                        );
                      })}
                    </CollapsableNavItem>
                  );
                } else {
                  return (
                    <NavItem
                      key={navIndex}
                      title={nav?.title}
                      // icon={faCog}
                      icon={nav?.icon}
                      link={nav?.path}
                    />
                  );
                }
              })}
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
