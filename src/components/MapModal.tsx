import React from "react";
import styled from "styled-components";
import mapImage from "../assets/images/Map.png"

const MapModalWrapper = styled.div`
  width: 1312px;
  height: 793px;
  background: var(--white-color);
  position: absolute;
  top: 50px;
  left: 300px;
  z-index: 999;
  border-radius: 16px;
  box-shadow: 0px 5px 29px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  overflow: hidden;
`;

const MapModalMenu = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const MapModalSearch = styled.input``;

const MapModalDropdownMenuButton = styled.div``;

const MapModalDropdownMenu = styled.ul``;

const MapModalDropdownMenuElement = styled.li``;

const MapModalUl = styled.ul``;

const MapModalLi = styled.li``;

const MapModalLiCheckbox = styled.input``;

const MapModalLiTitle = styled.div``;

const MapModalLiSubtitle = styled.div``;

const MapModalButtonsWrapper = styled.div``;

const MapModalButton = styled.button``;

const MapModalMap = styled.div`
  max-width: 900px;
  flex-grow: 1;
  background: url(${mapImage}) no-repeat center/cover;
`;

const MapModalMapButton = styled.input``;

const MapModal = () => {
  return (
    <MapModalWrapper>
      <MapModalMenu>
        <MapModalSearch />
        <MapModalDropdownMenuButton />
        <MapModalDropdownMenu>
          <MapModalDropdownMenuElement></MapModalDropdownMenuElement>
        </MapModalDropdownMenu>
        <MapModalUl>
          <MapModalLi>
            <MapModalLiCheckbox type="checkbox" />
            <MapModalLiTitle></MapModalLiTitle>
            <MapModalLiSubtitle></MapModalLiSubtitle>
          </MapModalLi>
        </MapModalUl>
        <MapModalButtonsWrapper>
          <MapModalButton></MapModalButton>
          <MapModalButton></MapModalButton>
        </MapModalButtonsWrapper>
      </MapModalMenu>
      <MapModalMap>
        <MapModalMapButton type="checkbox"></MapModalMapButton>
      </MapModalMap>
    </MapModalWrapper>
  );
};

export default MapModal;
