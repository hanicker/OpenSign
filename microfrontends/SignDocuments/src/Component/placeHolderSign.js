import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../css/./signature.css";
import Modal from "react-bootstrap/Modal";
import sign from "../assests/sign3.png";
import stamp from "../assests/stamp2.png";
import { themeColor } from "../utils/ThemeColor/backColor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop } from "react-dnd";
import RenderAllPdfPage from "./component/renderAllPdfPage";
import FieldsComponent from "./component/fieldsComponent";
import Tour from "reactour";
import { useParams } from "react-router-dom";
import Loader from "./component/loader";
import HandleError from "./component/HandleError";
import Nodata from "./component/Nodata";
import SignerListPlace from "./component/signerListPlace";
import Header from "./component/header";
import {
  pdfNewWidthFun,
  contractDocument,
  contractUsers,
  getHostUrl,
  addZIndex,
  randomId
} from "../utils/Utils";
import RenderPdf from "./component/renderPdf";
import ModalComponent from "./component/modalComponent";
import { useNavigate } from "react-router-dom";
import PlaceholderCopy from "./component/PlaceholderCopy";
import LinkUserModal from "./component/LinkUserModal";
import Title from "./component/Title";

function PlaceHolderSign() {
  const navigate = useNavigate();
  const [pdfDetails, setPdfDetails] = useState([]);
  const [isMailSend, setIsMailSend] = useState(false);
  const [allPages, setAllPages] = useState(null);
  const numPages = 1;
  const [pageNumber, setPageNumber] = useState(1);
  const [signBtnPosition, setSignBtnPosition] = useState([]);
  const [xySignature, setXYSignature] = useState({});
  const [dragKey, setDragKey] = useState();
  const [signersdata, setSignersData] = useState();
  const [signerObjId, setSignerObjId] = useState();
  const [signerPos, setSignerPos] = useState([]);
  const [isSelectListId, setIsSelectId] = useState();
  const [isSendAlert, setIsSendAlert] = useState({});
  const [isSend, setIsSend] = useState(false);
  const [isLoading, setIsLoading] = useState({
    isLoad: true,
    message: "This might take some time"
  });
  const [handleError, setHandleError] = useState();
  const [currentEmail, setCurrentEmail] = useState();
  const [pdfNewWidth, setPdfNewWidth] = useState();
  const [placeholderTour, setPlaceholderTour] = useState(true);
  const [checkTourStatus, setCheckTourStatus] = useState(false);
  const [tourStatus, setTourStatus] = useState([]);
  const [signerUserId, setSignerUserId] = useState();
  const [noData, setNoData] = useState(false);
  const [pdfOriginalWidth, setPdfOriginalWidth] = useState();
  const [contractName, setContractName] = useState("");
  const [containerWH, setContainerWH] = useState();
  const { docId } = useParams();
  const signRef = useRef(null);
  const dragRef = useRef(null);
  const divRef = useRef(null);
  const [isShowEmail, setIsShowEmail] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(false);
  const [isResize, setIsResize] = useState(false);
  const [zIndex, setZIndex] = useState(1);
  const [signKey, setSignKey] = useState();
  const [pdfLoadFail, setPdfLoadFail] = useState({
    status: false,
    type: "load"
  });
  const [isPageCopy, setIsPageCopy] = useState(false);
  const [uniqueId, setUniqueId] = useState("");
  const [roleName, setRoleName] = useState("");
  const [isAddUser, setIsAddUser] = useState({});
  const [signerExistModal, setSignerExistModal] = useState(false);
  const color = [
    "#93a3db",
    "#e6c3db",
    "#c0e3bc",
    "#bce3db",
    "#b8ccdb",
    "#ceb8db",
    "#ffccff",
    "#99ffcc",
    "#cc99ff",
    "#ffcc99",
    "#66ccff",
    "#ffffcc"
  ];
  const isMobile = window.innerWidth < 767;
  const [{ isOver }, drop] = useDrop({
    accept: "BOX",
    drop: (item, monitor) => addPositionOfSignature(item, monitor),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  });
  const [{ isDragSign }, dragSignature] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 1,
      text: "drag me"
    },
    collect: (monitor) => ({
      isDragSign: !!monitor.isDragging()
    })
  });
  const [{ isDragStamp }, dragStamp] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 2,
      text: "drag me"
    },
    collect: (monitor) => ({
      isDragStamp: !!monitor.isDragging()
    })
  });

  const [{ isDragSignatureSS }, dragSignatureSS] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 3,
      text: "drag me"
    },
    collect: (monitor) => ({
      isDragSignatureSS: !!monitor.isDragging()
    })
  });

  const [{ isDragStampSS }, dragStampSS] = useDrag({
    type: "BOX",
    item: {
      type: "BOX",
      id: 4,
      text: "drag me"
    },
    collect: (monitor) => ({
      isDragStampSS: !!monitor.isDragging()
    })
  });

  const rowLevel =
    localStorage.getItem("rowlevel") &&
    JSON.parse(localStorage.getItem("rowlevel"));
  const objectId =
    rowLevel && rowLevel.id
      ? rowLevel.id
      : rowLevel?.objectId && rowLevel.objectId;

  const documentId = docId ? docId : objectId && objectId;
  const senderUser =
    localStorage.getItem(
      `Parse/${localStorage.getItem("parseAppId")}/currentUser`
    ) &&
    localStorage.getItem(
      `Parse/${localStorage.getItem("parseAppId")}/currentUser`
    );
  const jsonSender = JSON.parse(senderUser);

  useEffect(() => {
    if (documentId) {
      getDocumentDetails();
    }
  }, []);

  useEffect(() => {
    if (divRef.current) {
      const pdfWidth = pdfNewWidthFun(divRef);
      setPdfNewWidth(pdfWidth);
      setContainerWH({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight
      });
    }
  }, [divRef.current]);
  //function for get document details
  const getDocumentDetails = async () => {
    //getting document details
    const documentData = await contractDocument(documentId);
    if (documentData && documentData.length > 0) {
      // const alreadyPlaceholder =
      //   documentData[0].Placeholders && documentData[0].Placeholders;
      // if (alreadyPlaceholder && alreadyPlaceholder.length > 0) {
      //   setIsAlreadyPlace(true);
      // }
      // setSignersData(documentData[0]);
      // setIsSelectId(0);
      // setSignerObjId(documentData[0].Signers[0].objectId);
      // setContractName(documentData[0].Signers[0].className);
      setPdfDetails(documentData);

      if (documentData[0].Signers && documentData[0].Signers.length > 0) {
        const currEmail = documentData[0].ExtUserPtr.Email;
        const filterCurrEmail = documentData[0].Signers.filter(
          (data) => data.Email === currEmail
        );
        setCurrentEmail(filterCurrEmail);
        setSignerObjId(documentData[0].Signers[0].objectId);
        setContractName(documentData[0].Signers[0].className);
        setIsSelectId(0);
        if (
          documentData[0].Placeholders &&
          documentData[0].Placeholders.length > 0
        ) {
          setSignerPos(documentData[0].Placeholders);
          let signers = [...documentData[0].Signers];
          let updatedSigners = documentData[0].Placeholders.map((x) => {
            let matchingSigner = signers.find(
              (y) => x.signerObjId && x.signerObjId === y.objectId
            );

            if (matchingSigner) {
              return {
                ...matchingSigner,
                Role: x.Role ? x.Role : matchingSigner.Role,
                Id: x.Id,
                blockColor: x.blockColor
              };
            } else {
              return {
                Role: x.Role,
                Id: x.Id,
                blockColor: x.blockColor
              };
            }
          });
          setSignersData(updatedSigners);
          setUniqueId(updatedSigners[0].Id);
        } else {
          const updatedSigners = documentData[0].Signers.map((x, index) => ({
            ...x,
            Id: randomId(),
            Role: "User " + (index + 1)
          }));
          setSignersData(updatedSigners);
          setUniqueId(updatedSigners[0].Id);
        }
      } else {
        setRoleName("User 1");
        if (
          documentData[0].Placeholders &&
          documentData[0].Placeholders.length > 0
        ) {
          let updatedSigners = documentData[0].Placeholders.map((x) => {
            return {
              Role: x.Role,
              Id: x.Id,
              blockColor: x.blockColor
            };
          });
          setSignerPos(documentData[0].Placeholders);
          setSignersData(updatedSigners);
          setIsSelectId(0);
          setUniqueId(updatedSigners[0].Id);
        }
      }
    } else if (
      documentData === "Error: Something went wrong!" ||
      (documentData.result && documentData.result.error)
    ) {
      const loadObj = {
        isLoad: false
      };
      setHandleError("Error: Something went wrong!");
      setIsLoading(loadObj);
    } else {
      setNoData(true);

      const loadObj = {
        isLoad: false
      };
      setIsLoading(loadObj);
    }
    const res = await contractUsers(jsonSender.email);
    if (res[0] && res.length) {
      setSignerUserId(res[0].objectId);
      const tourstatus = res[0].TourStatus && res[0].TourStatus;
      if (tourstatus && tourstatus.length > 0) {
        setTourStatus(tourstatus);
        const checkTourRecipients = tourstatus.filter(
          (data) => data.placeholder
        );
        if (checkTourRecipients && checkTourRecipients.length > 0) {
          setCheckTourStatus(checkTourRecipients[0].placeholder);
        }
      }
      const loadObj = {
        isLoad: false
      };
      setIsLoading(loadObj);
    } else if (res === "Error: Something went wrong!") {
      const loadObj = {
        isLoad: false
      };
      setHandleError("Error: Something went wrong!");
      setIsLoading(loadObj);
    } else if (res.length === 0) {
      setNoData(true);

      const loadObj = {
        isLoad: false
      };
      setIsLoading(loadObj);
    }
  };

  //function for setting position after drop signature button over pdf
  const addPositionOfSignature = (item, monitor) => {
    if (isMobile) {
      if (selectedEmail) {
        getSignerPos(item, monitor);
      } else {
        setIsShowEmail(true);
      }
    } else {
      getSignerPos(item, monitor);
    }
  };

  const getSignerPos = (item, monitor) => {
    const posZIndex = zIndex + 1;
    setZIndex(posZIndex);
    const newWidth = containerWH.width;
    const scale = pdfOriginalWidth / newWidth;
    const key = Math.floor(1000 + Math.random() * 9000);
    // let filterSignerPos = signerPos.filter(
    //   (data) => data.signerObjId === signerObjId
    // );
    let filterSignerPos = signerPos.filter((data) => data.Id === uniqueId);

    let dropData = [];
    let xyPosArr = [];
    let xyPos = {};
    if (item === "onclick") {
      const dropObj = {
        //onclick put placeholder center on pdf
        xPosition: window.innerWidth / 2 - 100,
        yPosition: window.innerHeight / 2 - 60,
        isStamp: monitor,
        key: key,
        isDrag: false,
        scale: scale,
        isMobile: isMobile,
        yBottom: window.innerHeight / 2 - 60,
        zIndex: posZIndex
      };
      dropData.push(dropObj);
      xyPos = {
        pageNumber: pageNumber,
        pos: dropData
      };

      xyPosArr.push(xyPos);
    } else if (item.type === "BOX") {
      const offset = monitor.getClientOffset();
      //adding and updating drop position in array when user drop signature button in div
      const containerRect = document
        .getElementById("container")
        .getBoundingClientRect();
      const x = offset.x - containerRect.left;
      const y = offset.y - containerRect.top;
      const ybottom = containerRect.bottom - offset.y;

      const dropObj = {
        xPosition: signBtnPosition[0] ? x - signBtnPosition[0].xPos : x,
        yPosition: signBtnPosition[0] ? y - signBtnPosition[0].yPos : y,
        isStamp: isDragStamp || isDragStampSS ? true : false,
        key: key,
        isDrag: false,
        firstXPos: signBtnPosition[0] && signBtnPosition[0].xPos,
        firstYPos: signBtnPosition[0] && signBtnPosition[0].yPos,
        yBottom: ybottom,
        scale: scale,
        isMobile: isMobile,
        zIndex: posZIndex
      };
      dropData.push(dropObj);
      xyPos = {
        pageNumber: pageNumber,
        pos: dropData
      };

      xyPosArr.push(xyPos);
    }

    //add signers objId first inseretion
    if (filterSignerPos.length > 0) {
      // const colorIndex = signerPos
      //   .map((e) => e.signerObjId)
      //   .indexOf(signerObjId);

      const colorIndex = signerPos.map((e) => e.Id).indexOf(uniqueId);

      const getPlaceHolder = filterSignerPos[0].placeHolder;
      const updatePlace = getPlaceHolder.filter(
        (data) => data.pageNumber !== pageNumber
      );
      const getPageNumer = getPlaceHolder.filter(
        (data) => data.pageNumber === pageNumber
      );

      //add entry of position for same signer on multiple page
      if (getPageNumer.length > 0) {
        const getPos = getPageNumer[0].pos;
        const newSignPos = getPos.concat(dropData);
        let xyPos = {
          pageNumber: pageNumber,
          pos: newSignPos
        };
        updatePlace.push(xyPos);
        let placeHolderPos;
        if (contractName) {
          placeHolderPos = {
            blockColor: color[isSelectListId],
            signerObjId: signerObjId,
            placeHolder: updatePlace,
            signerPtr: {
              __type: "Pointer",
              className: `${contractName}`,
              objectId: signerObjId
            },
            Role: roleName,
            Id: uniqueId
          };
        } else {
          placeHolderPos = {
            blockColor: color[isSelectListId],
            signerObjId: "",
            placeHolder: updatePlace,
            signerPtr: {},
            Role: roleName,
            Id: uniqueId
          };
        }
        // signerPos.splice(colorIndex, 1, placeHolderPos);
        const newArry = [placeHolderPos];
        const newArray = [
          ...signerPos.slice(0, colorIndex),
          ...newArry,
          ...signerPos.slice(colorIndex + 1)
        ];
        setSignerPos(newArray);
      } else {
        const newSignPoss = getPlaceHolder.concat(xyPosArr[0]);
        let placeHolderPos;
        if (contractName) {
          placeHolderPos = {
            blockColor: color[isSelectListId],
            signerObjId: signerObjId,
            placeHolder: newSignPoss,
            signerPtr: {
              __type: "Pointer",
              className: `${contractName}`,
              objectId: signerObjId
            },
            Role: roleName,
            Id: uniqueId
          };
        } else {
          placeHolderPos = {
            blockColor: color[isSelectListId],
            signerObjId: "",
            placeHolder: newSignPoss,
            signerPtr: {},
            Role: roleName,
            Id: uniqueId
          };
        }

        // signerPos.splice(colorIndex, 1, placeHolderPos);
        const newArry = [placeHolderPos];
        const newArray = [
          ...signerPos.slice(0, colorIndex),
          ...newArry,
          ...signerPos.slice(colorIndex + 1)
        ];

        setSignerPos(newArray);
      }
    } else {
      let placeHolderPos;
      if (contractName) {
        placeHolderPos = {
          signerPtr: {
            __type: "Pointer",
            className: `${contractName}`,
            objectId: signerObjId
          },
          signerObjId: signerObjId,
          blockColor: color[isSelectListId],
          placeHolder: xyPosArr,
          Role: roleName,
          Id: uniqueId
        };
      } else {
        placeHolderPos = {
          signerPtr: {},
          signerObjId: "",
          blockColor: color[isSelectListId],
          placeHolder: xyPosArr,
          Role: roleName,
          Id: uniqueId
        };
      }

      setSignerPos((prev) => [...prev, placeHolderPos]);
    }
    setIsMailSend(false);
  };

  //function for get pdf page details
  const pageDetails = async (pdf) => {
    const load = {
      status: true
    };
    setPdfLoadFail(load);
    pdf.getPage(1).then((pdfPage) => {
      const pageWidth = pdfPage.view[2];

      setPdfOriginalWidth(pageWidth);
    });
  };

  //function for save x and y position and show signature  tab on that position
  const handleTabDrag = (key, signerId) => {
    setDragKey(key);
  };

  //function for set and update x and y postion after drag and drop signature tab
  const handleStop = (event, dragElement, signerId, key) => {
    if (!isResize) {
      const dataNewPlace = addZIndex(signerPos, key, setZIndex);
      let updateSignPos = [...signerPos];
      updateSignPos.splice(0, updateSignPos.length, ...dataNewPlace);
      // signerPos.splice(0, signerPos.length, ...dataNewPlace);
      const containerRect = document
        .getElementById("container")
        .getBoundingClientRect();
      const signId = signerId ? signerId : uniqueId; //? signerId : signerObjId;
      const keyValue = key ? key : dragKey;
      const ybottom = containerRect.height - dragElement.y;

      if (keyValue >= 0) {
        const filterSignerPos = updateSignPos.filter(
          (data) => data.Id === signId
        );

        if (filterSignerPos.length > 0) {
          const getPlaceHolder = filterSignerPos[0].placeHolder;

          const getPageNumer = getPlaceHolder.filter(
            (data) => data.pageNumber === pageNumber
          );

          if (getPageNumer.length > 0) {
            const getXYdata = getPageNumer[0].pos;

            const getPosData = getXYdata;
            const addSignPos = getPosData.map((url, ind) => {
              if (url.key === keyValue) {
                return {
                  ...url,
                  xPosition: dragElement.x,
                  yPosition: dragElement.y,
                  isDrag: true,
                  yBottom: ybottom
                };
              }
              return url;
            });

            const newUpdateSignPos = getPlaceHolder.map((obj, ind) => {
              if (obj.pageNumber === pageNumber) {
                return { ...obj, pos: addSignPos };
              }
              return obj;
            });
            const newUpdateSigner = updateSignPos.map((obj, ind) => {
              if (obj.Id === signId) {
                return { ...obj, placeHolder: newUpdateSignPos };
              }
              return obj;
            });

            setSignerPos(newUpdateSigner);
          }
        }
      }
    }
  };

  //function for delete signature block
  const handleDeleteSign = (key, Id) => {
    const updateData = [];
    // const filterSignerPos = signerPos.filter(
    //   (data) => data.signerObjId === signerId
    // );

    const filterSignerPos = signerPos.filter((data) => data.Id === Id);

    if (filterSignerPos.length > 0) {
      const getPlaceHolder = filterSignerPos[0].placeHolder;

      const getPageNumer = getPlaceHolder.filter(
        (data) => data.pageNumber === pageNumber
      );

      if (getPageNumer.length > 0) {
        const getXYdata = getPageNumer[0].pos.filter(
          (data, ind) => data.key !== key
        );

        if (getXYdata.length > 0) {
          updateData.push(getXYdata);
          const newUpdatePos = getPlaceHolder.map((obj, ind) => {
            if (obj.pageNumber === pageNumber) {
              return { ...obj, pos: updateData[0] };
            }
            return obj;
          });

          const newUpdateSigner = signerPos.map((obj, ind) => {
            if (obj.Id === Id) {
              return { ...obj, placeHolder: newUpdatePos };
            }
            return obj;
          });

          setSignerPos(newUpdateSigner);
        } else {
          const updateFilter = signerPos.filter((data) => data.Id !== Id);
          const getRemainPage = filterSignerPos[0].placeHolder.filter(
            (data) => data.pageNumber !== pageNumber
          );

          if (getRemainPage && getRemainPage.length > 0) {
            const newUpdatePos = filterSignerPos.map((obj, ind) => {
              if (obj.Id === Id) {
                return { ...obj, placeHolder: getRemainPage };
              }
              return obj;
            });
            let signerupdate = [];
            signerupdate = signerPos.filter((data) => data.Id !== Id);
            signerupdate.push(newUpdatePos[0]);

            setSignerPos(signerupdate);
          } else {
            setSignerPos(updateFilter);
          }
        }
      }
    }
  };

  //function for change page
  function changePage(offset) {
    setSignBtnPosition([]);
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  //function for capture position on hover signature button
  const handleDivClick = (e) => {
    const divRect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - divRect.left;
    const mouseY = e.clientY - divRect.top;

    const xyPosition = {
      xPos: mouseX,
      yPos: mouseY
    };

    setXYSignature(xyPosition);
  };

  //function for capture position of x and y on hover signature button last position
  const handleMouseLeave = (e) => {
    setSignBtnPosition([xySignature]);
  };

  const alertSendEmail = async () => {
    if (signerPos.length === signersdata.length) {
      const IsSignerNotExist = signerPos?.some((x) => !x.signerObjId);
      if (IsSignerNotExist) {
        setSignerExistModal(true);
      } else {
        const alert = {
          mssg: "confirm",
          alert: true
        };
        setIsSendAlert(alert);
      }
    } else {
      const alert = {
        mssg: "sure",
        alert: true
      };

      setIsSendAlert(alert);
    }
  };
  const sendEmailToSigners = async () => {
    const loadObj = {
      isLoad: true,
      message: "This might take some time"
    };
    setIsLoading(loadObj);
    setIsSendAlert({});

    let sendMail;
    // console.log("pdfDetails", pdfDetails);
    const expireDate = pdfDetails?.[0].ExpiryDate.iso;
    const newDate = new Date(expireDate);
    const localExpireDate = newDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    let sender = pdfDetails?.[0].ExtUserPtr.Email;
    const signerMail = signersdata;

    for (let i = 0; i < signerMail.length; i++) {
      try {
        const imgPng =
          "https://qikinnovation.ams3.digitaloceanspaces.com/logo.png";
        let url = `${localStorage.getItem("baseUrl")}functions/sendmailv3/`;
        const headers = {
          "Content-Type": "application/json",
          "X-Parse-Application-Id": localStorage.getItem("parseAppId"),
          sessionToken: localStorage.getItem("accesstoken")
        };
        const serverUrl = localStorage.getItem("baseUrl");
        const newServer = serverUrl.replaceAll("/", "%2F");
        const objectId = signerMail[i].objectId;
        const serverParams = `${newServer}&${localStorage.getItem(
          "parseAppId"
        )}&${localStorage.getItem("_appName")}`;

        const hostUrl = window.location.origin + "/loadmf/signmicroapp";
        let signPdf = `${hostUrl}/login/${pdfDetails?.[0].objectId}/${signerMail[i].Email}/${objectId}/${serverParams}`;
        const openSignUrl = "https://www.opensignlabs.com/";
        const themeBGcolor = themeColor();
        let params = {
          recipient: signerMail[i].Email,
          subject: `${pdfDetails?.[0].ExtUserPtr.Name} has requested you to sign ${pdfDetails?.[0].Name}`,
          from: sender,

          html:
            "<html><head><meta http-equiv='Content-Type' content='text/html; charset=UTF-8' /> </head>   <body> <div style='background-color: #f5f5f5; padding: 20px'> <div   style=' box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;background-color: white;padding-bottom: 20px;'> <div><img src=" +
            imgPng +
            " height='50' style='padding: 20px,width:170px,height:40px' /></div>  <div  style=' padding: 2px;font-family: system-ui;background-color:" +
            themeBGcolor +
            ";'><p style='font-size: 20px;font-weight: 400;color: white;padding-left: 20px;' > Digital Signature Request</p></div><div><p style='padding: 20px;font-family: system-ui;font-size: 14px;   margin-bottom: 10px;'> " +
            pdfDetails?.[0].ExtUserPtr.Name +
            " has requested you to review and sign " +
            pdfDetails?.[0].Name +
            "</p><div style='padding: 5px 0px 5px 25px;display: flex;flex-direction: row;justify-content: space-around;'><table> <tr> <td style='font-weight:bold;font-family:sans-serif;font-size:15px'>Sender</td> <td> </td> <td  style='color:#626363;font-weight:bold'>" +
            sender +
            "</td></tr><tr><td style='font-weight:bold;font-family:sans-serif;font-size:15px'>Organization Name</td> <td> </td><td style='color:#626363;font-weight:bold'>__</td></tr> <tr> <td style='font-weight:bold;font-family:sans-serif;font-size:15px'>Expire on</td><td> </td> <td style='color:#626363;font-weight:bold'>" +
            localExpireDate +
            "</td></tr><tr> <td></td> <td> <div style='display: flex; justify-content: center;margin-top: 50px;'><a href=" +
            signPdf +
            ">  <button style='padding: 12px 20px 12px 20px;background-color: #d46b0f;color: white;  border: 0px;box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;font-weight:bold'>Sign here</button></a> </div> </td><td> </td></tr></table> </div><div style='display: flex; justify-content: center;margin-top: 10px;'> </div></div></div><div><p> This is an automated email from OpenSign. For any queries regarding this email, please contact the sender " +
            sender +
            " directly.If you think this email is inappropriate or spam, you may file a complaint with OpenSign   <a href= " +
            openSignUrl +
            " target=_blank>here</a>.</p> </div></div></body> </html>"
        };
        sendMail = await axios.post(url, params, { headers: headers });
      } catch (error) {
        console.log("error", error);
      }
    }

    if (sendMail.data.result.status === "success") {
      const signers = signersdata?.map((x) => {
        return {
          __type: "Pointer",
          className: "contracts_Contactbook",
          objectId: x.objectId
        };
      });
      // console.log("signers ", signers);
      try {
        const data = {
          Placeholders: signerPos,
          SignedUrl: pdfDetails[0].URL,
          Signers: signers
        };

        await axios
          .put(
            `${localStorage.getItem("baseUrl")}classes/${localStorage.getItem(
              "_appName"
            )}_Document/${documentId}`,
            data,
            {
              headers: {
                "Content-Type": "application/json",
                "X-Parse-Application-Id": localStorage.getItem("parseAppId"),
                "X-Parse-Session-Token": localStorage.getItem("accesstoken")
              }
            }
          )
          .then((result) => {
            setIsSend(true);
            setIsMailSend(true);
            const loadObj = {
              isLoad: false
            };
            setIsLoading(loadObj);
          })
          .catch((err) => {
            console.log("axois err ", err);
          });
      } catch (e) {
        console.log("error", e);
      }
    }
  };
  //here you can add your messages in content and selector is key of particular steps

  const tourConfig = [
    {
      selector: '[data-tut="reactourFirst"]',
      content: `Select a recipient from this list to add a place-holder where he is supposed to sign.The placeholder will appear in the same colour as the recipient name once you drop it on the document.`,
      position: "top",

      style: { fontSize: "13px" }
    },
    {
      selector: '[data-tut="reactourSecond"]',
      content: `Drag the signature or stamp placeholder onto the PDF to choose your desired signing location.`,
      position: "top",
      style: { fontSize: "13px" }
    },
    {
      selector: '[data-tut="reactourThird"]',
      content: `Drag the placeholder for a recipient anywhere on the document.Remember, it will appear in the same colour as the name of the recipient for easy reference.`,
      position: "top",
      style: { fontSize: "13px" }
    },
    {
      selector: '[data-tut="reactourFour"]',
      content: `Clicking "Send" button will share the document with all the recipients.It will also send out emails to everyone on the recipients list.`,
      position: "top",
      style: { fontSize: "13px" }
    }
  ];

  //function for update TourStatus
  const closeTour = async () => {
    setPlaceholderTour(false);
    const extUserClass = localStorage.getItem("extended_class");
    let updatedTourStatus = [];
    if (tourStatus.length > 0) {
      updatedTourStatus = [...tourStatus];
      const placeholderIndex = tourStatus.findIndex(
        (obj) => obj["placeholder"] === false || obj["placeholder"] === true
      );
      if (placeholderIndex !== -1) {
        updatedTourStatus[placeholderIndex] = { placeholder: true };
      } else {
        updatedTourStatus.push({ placeholder: true });
      }
    } else {
      updatedTourStatus = [{ placeholder: true }];
    }
    await axios
      .put(
        `${localStorage.getItem(
          "baseUrl"
        )}classes/${extUserClass}/${signerUserId}`,
        {
          TourStatus: updatedTourStatus
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Parse-Application-Id": localStorage.getItem("parseAppId"),
            sessionToken: localStorage.getItem("accesstoken")
          }
        }
      )
      .then((Listdata) => {
        // const json = Listdata.data;
        // const res = json.results;
      })
      .catch((err) => {
        console.log("axois err ", err);
      });
  };
  const handleRecipientSign = () => {
    const hostUrl = getHostUrl();
    navigate(
      `${hostUrl}recipientSignPdf/${documentId}/${currentEmail[0].objectId}`
    );
  };

  const handleLinkUser = (id) => {
    setIsAddUser({ [id]: true });
  };
  const handleAddUser = (data) => {
    if(data && data.objectId){
    const signerPtr = {
      __type: "Pointer",
      className: "contracts_Contactbook",
      objectId: data.objectId
    };
    const updatePlaceHolder = signerPos.map((x) => {
      if (x.Id === uniqueId) {
        return { ...x, signerPtr: signerPtr, signerObjId: data.objectId };
      }
      return { ...x };
    });
    // console.log("updatePlaceHolder ", updatePlaceHolder);
    setSignerPos(updatePlaceHolder);

    const updateSigner = signersdata.map((x) => {
      if (x.Id === uniqueId) {
        return { ...x, ...data };
      }
      return { ...x };
    });
    // console.log("updateSigner ", updateSigner);

    setSignersData(updateSigner);
  }
  };

  const closePopup = () => {
    setIsAddUser({});
  };
  return (
    <>
      <Title title={"placeholder"} />
      <DndProvider backend={HTML5Backend}>
        {isLoading.isLoad ? (
          <Loader isLoading={isLoading} />
        ) : handleError ? (
          <HandleError handleError={handleError} />
        ) : noData ? (
          <Nodata />
        ) : (
          <div className="signatureContainer" ref={divRef}>
            {/* this component used for UI interaction and show their functionality */}
            {!checkTourStatus && (
              //this tour component used in your html component where you want to put
              //onRequestClose function to close tour
              //steps is defined what will be your messages and style also
              //isOpen is takes boolean value to open
              <Tour
                onRequestClose={closeTour}
                steps={tourConfig}
                isOpen={placeholderTour}
                rounded={5}
                closeWithMask={false}
              />
            )}
            {/* this component used to render all pdf pages in left side */}
            <RenderAllPdfPage
              signPdfUrl={pdfDetails[0].URL}
              allPages={allPages}
              setAllPages={setAllPages}
              setPageNumber={setPageNumber}
              setSignBtnPosition={setSignBtnPosition}
              pageNumber={pageNumber}
            />

            {/* pdf render view */}
            <div
              style={{
                marginLeft: !isMobile && pdfOriginalWidth > 500 && "20px",
                marginRight: !isMobile && pdfOriginalWidth > 500 && "20px"
              }}
            >
              {/* this modal is used show alert set placeholder for all signers before send mail */}

              <Modal show={isSendAlert.alert}>
                <Modal.Header
                  className={
                    isSendAlert.mssg === "sure"
                      ? "bg-danger"
                      : isSendAlert.mssg === "confirm" && "bg-success"
                  }
                >
                  {isSendAlert.mssg === "sure" ? (
                    <span style={{ color: "white" }}>Fields required</span>
                  ) : (
                    isSendAlert.mssg === "confirm" && (
                      <span style={{ color: "white" }}>Send Mail</span>
                    )
                  )}
                </Modal.Header>

                {/* signature modal */}
                <Modal.Body>
                  {isSendAlert.mssg === "sure" ? (
                    <p>Please add field for all recipients.</p>
                  ) : (
                    isSendAlert.mssg === "confirm" && (
                      <p>
                        Are you sure you want to send out this document for
                        signatures?
                      </p>
                    )
                  )}
                </Modal.Body>

                <Modal.Footer>
                  <button
                    onClick={() => setIsSendAlert({})}
                    style={{
                      color: "black"
                    }}
                    type="button"
                    className="finishBtn"
                  >
                    Close
                  </button>
                  {isSendAlert.mssg === "confirm" && (
                    <button
                      onClick={() => sendEmailToSigners()}
                      style={{
                        background: "#24b53a"
                      }}
                      type="button"
                      className="finishBtn"
                    >
                      Yes
                    </button>
                  )}
                </Modal.Footer>
              </Modal>
              {/* this modal is used show send mail  message and after send mail success message */}
              <Modal show={isSend}>
                <Modal.Header
                  style={{
                    background: themeColor()
                  }}
                >
                  <span style={{ color: "white" }}>Mails Sent</span>
                </Modal.Header>

                {/* signature modal */}
                <Modal.Body>
                  <p>You have successfully sent mails to all recipients!</p>
                  {currentEmail?.length > 0 && (
                    <p>Do you want to sign documents right now ?</p>
                  )}
                </Modal.Body>

                <Modal.Footer>
                  {currentEmail?.length > 0 ? (
                    <>
                      <button
                        onClick={() => {
                          setIsSend(false);
                          setSignerPos([]);
                        }}
                        style={{
                          color: "black"
                        }}
                        type="button"
                        className="finishBtn"
                      >
                        No
                      </button>

                      <button
                        onClick={() => {
                          handleRecipientSign();
                        }}
                        style={{
                          background: themeColor(),
                          color: "white"
                        }}
                        type="button"
                        className="finishBtn"
                      >
                        Yes
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        setIsSend(false);
                        setSignerPos([]);
                      }}
                      style={{
                        color: "black"
                      }}
                      type="button"
                      className="finishBtn"
                    >
                      Close
                    </button>
                  )}
                </Modal.Footer>
              </Modal>
              {/* <ModalComponent isShow={isAlreadyPlace} type={"alreadyPlace"} /> */}
              <ModalComponent
                isShow={isShowEmail}
                type={"signersAlert"}
                setIsShowEmail={setIsShowEmail}
              />
              <PlaceholderCopy
                isPageCopy={isPageCopy}
                setIsPageCopy={setIsPageCopy}
                xyPostion={signerPos}
                setXyPostion={setSignerPos}
                allPages={allPages}
                pageNumber={pageNumber}
                signKey={signKey}
                // signerObjId={signerObjId}
                Id={uniqueId}
              />
              {/* pdf header which contain funish back button */}
              <Header
                isPlaceholder={true}
                pageNumber={pageNumber}
                allPages={allPages}
                changePage={changePage}
                pdfDetails={pdfDetails}
                signerPos={signerPos}
                signersdata={signersdata}
                isMailSend={isMailSend}
                alertSendEmail={alertSendEmail}
                isShowHeader={true}
                currentSigner={true}
                dataTut4="reactourFour"
              />
              <div data-tut="reactourThird">
                {containerWH && (
                  <RenderPdf
                    pageNumber={pageNumber}
                    pdfOriginalWidth={pdfOriginalWidth}
                    pdfNewWidth={pdfNewWidth}
                    pdfDetails={pdfDetails}
                    signerPos={signerPos}
                    successEmail={false}
                    numPages={numPages}
                    pageDetails={pageDetails}
                    placeholder={true}
                    drop={drop}
                    handleDeleteSign={handleDeleteSign}
                    handleTabDrag={handleTabDrag}
                    handleStop={handleStop}
                    setPdfLoadFail={setPdfLoadFail}
                    pdfLoadFail={pdfLoadFail}
                    setSignerPos={setSignerPos}
                    containerWH={containerWH}
                    setIsResize={setIsResize}
                    setZIndex={setZIndex}
                    setIsPageCopy={setIsPageCopy}
                    signersdata={signersdata}
                    setSignKey={setSignKey}
                    setSignerObjId={setSignerObjId}
                    handleLinkUser={handleLinkUser}
                    setUniqueId={setUniqueId}
                  />
                )}
              </div>
            </div>

            {/* signature button */}
            {isMobile ? (
              <div>
                <FieldsComponent
                  dataTut="reactourFirst"
                  dataTut2="reactourSecond"
                  pdfUrl={isMailSend}
                  sign={sign}
                  stamp={stamp}
                  dragSignature={dragSignature}
                  signRef={signRef}
                  handleDivClick={handleDivClick}
                  handleMouseLeave={handleMouseLeave}
                  isDragSign={isDragSign}
                  themeColor={themeColor}
                  dragStamp={dragStamp}
                  dragRef={dragRef}
                  isDragStamp={isDragStamp}
                  isSignYourself={true}
                  isDragSignatureSS={isDragSignatureSS}
                  dragSignatureSS={dragSignatureSS}
                  dragStampSS={dragStampSS}
                  addPositionOfSignature={addPositionOfSignature}
                  signerPos={signerPos}
                  signersdata={signersdata}
                  isSelectListId={isSelectListId}
                  setSignerObjId={setSignerObjId}
                  setIsSelectId={setIsSelectId}
                  setContractName={setContractName}
                  isSigners={true}
                  setIsShowEmail={setIsShowEmail}
                  isMailSend={isMailSend}
                  setSelectedEmail={setSelectedEmail}
                  selectedEmail={selectedEmail}
                  setUniqueId={setUniqueId}
                  setRoleName={setRoleName}
                />
              </div>
            ) : (
              <div>
                <div className="signerComponent">
                  <SignerListPlace
                    signerPos={signerPos}
                    signersdata={signersdata}
                    isSelectListId={isSelectListId}
                    setSignerObjId={setSignerObjId}
                    setIsSelectId={setIsSelectId}
                    setContractName={setContractName}
                    setUniqueId={setUniqueId}
                    setRoleName={setRoleName}
                    // handleAddSigner={handleAddSigner}
                  />
                  <div data-tut="reactourSecond">
                    <FieldsComponent
                      pdfUrl={isMailSend}
                      sign={sign}
                      stamp={stamp}
                      dragSignature={dragSignature}
                      signRef={signRef}
                      handleDivClick={handleDivClick}
                      handleMouseLeave={handleMouseLeave}
                      isDragSign={isDragSign}
                      themeColor={themeColor}
                      dragStamp={dragStamp}
                      dragRef={dragRef}
                      isDragStamp={isDragStamp}
                      isSignYourself={false}
                      addPositionOfSignature={addPositionOfSignature}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </DndProvider>
      <div>
        <Modal show={signerExistModal}>
          <Modal.Header className="bg-danger">
            <span style={{ color: "white" }}>Users required</span>
          </Modal.Header>

          {/* signature modal */}
          <Modal.Body>
            <p>Please attach users to all fields</p>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={() => setSignerExistModal(false)}
              style={{
                color: "black"
              }}
              type="button"
              className="finishBtn"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <LinkUserModal
          handleAddUser={handleAddUser}
          isAddUser={isAddUser}
          uniqueId={uniqueId}
          closePopup={closePopup}
        />
      </div>
    </>
  );
}

export default PlaceHolderSign;