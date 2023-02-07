import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// import Content from "./Content";
// import {selectToastAlert, setToastAlert} from "../../reducers/toastAlertSlice";
// import {selectDeleteModal, setDeleteModal} from "../../reducers/deleteModalSlice";
import { useDispatch, useSelector } from "react-redux";
// import {DeleteModal, ToastAlert} from "../../components/notification";
// import {setErrorMessage} from "../../reducers/errorMessageSlice";

import "./Portal.scss";

const Portal = () => {
  const dispatch = useDispatch();

  //   const {type} = useSelector(selectToastAlert);
  //   const {deleteApi} = useSelector(selectDeleteModal);

  //   useEffect(() => {

  //     dispatch(setToastAlert({
  //       type: '',
  //       message: ''
  //     }));

  //     dispatch(setDeleteModal({
  //       title: '',
  //       message: ''
  //     }));

  //   }, [type, deleteApi]);

  //   useEffect(() => {

  //     dispatch(setErrorMessage({
  //       errors: ''
  //     }));

  //   });

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className={isActive ? "sidebar-expand" : ""}>
        <Sidebar />
      </div>
      <main className={isActive ? "content-hide" : "content"}>
        <Navbar onToggleFun={() => toggleClass()} />
        {/* <Content/> */}
        {/*<Footer />*/}
      </main>
      {/* <ToastAlert/> */}
      {/* <DeleteModal/> */}
    </>
  );
};

export default Portal;
