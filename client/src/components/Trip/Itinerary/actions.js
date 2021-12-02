
import React, { useState } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Button, ButtonGroup, Modal, ModalBody, ModalHeader, ModalFooter, Popover, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FaFileUpload, FaHome, FaTrash, FaTrashAlt, FaFileDownload, FaQuestion } from 'react-icons/fa';
import check from '../../../static/images/check.svg';
import x from '../../../static/images/x.svg';

const MIME_TYPE = {
    JSON: "application/json",
    CSV: "text/csv",
    SVG: "image/svg+xml",
    KML: "application/vnd.google-earth.kml+xml"
};

const tripName = "My Trip";

export function ItineraryActionsDropdown(props) {
    const [whereIcon, setWhereIcon] = useState(false);
    const toggle = () => setWhereIcon(!whereIcon);
    const [savePopover, setSavPopover] = useState(false);
    const [uploadPopover, setUpPopover] = useState(false);

    function saveToggle(){
        setSavPopover(!savePopover);
    }

    function upToggle(){
        setUpPopover(!uploadPopover);
    }

    return (
        <ActionsDropdown {...props}>
            <DropdownItem onClick={() => moveToHome(props)} data-testid='home-button'>
                <FaHome />
            </DropdownItem>
            <DropdownItem onClick={() => removeAll(props)} data-testid='delete-all-button'>
                <FaTrashAlt />
            </DropdownItem>
            <DropdownItem onClick={iconClick} onMouseEnter={upToggle} onMouseLeave={upToggle} data-testid='load-trip-icon'>
                <FaFileUpload id="up"/>
                <Popover style={{backgroundColor: '#D3D3D3'}} target="up" placement="bottom" isOpen={uploadPopover}> <b>Upload</b> </Popover>
            </DropdownItem>
            <DropdownItem onClick={() => handleJSONSave(props)} onMouseEnter={saveToggle} onMouseLeave={saveToggle} data-testid='save-trip-button'>
                <FaFileDownload id="down"/>
                <Popover style={{backgroundColor: '#D3D3D3'}} target="down" placement="bottom" isOpen={savePopover}> <b>Save</b> </Popover>
            </DropdownItem>
            <DropdownItem onClick={toggle} data-testid='where-is-icon'>
                <FaQuestion/>
                <RenderModal whereIcon={whereIcon} setWhereIcon={setWhereIcon} toggle={toggle} />
            </DropdownItem>
        </ActionsDropdown> 
    );
}


function moveToHome(props) { props.placeActions.moveToHome(); }
function removeAll(props) { props.placeActions.removeAll(); }

function iconClick(){
    const input = document.getElementById('file-upload');

    if (input) {
        input.click();
    }
}

function handleJSONSave(props) {
    const tripJSON = props.placeActions.buildTripJSON();
    const fileName = tripName.replace(/ /g, "_").toLowerCase();
    props.placeActions.downloadFile(fileName + ".json", MIME_TYPE.JSON, tripJSON);
}

function RenderModal(props) {
    const [display, setDisplay] = useState(false); // this is used to display response options after "find" button clicked
                                                   // or once they hit enter
                                                   // or once it is a valid set of coordinates (indicated by a checkmark)
    const [match, setMatch] = useState(false); 
    return (
        <Modal isOpen={props.whereIcon} toggle={props.toggle} data-testid='where-is-modal'>
            <ModalHeader>
                Coordinate Search    
            </ModalHeader> 

                <ModalBody> 
                    <InputGroup>
                        <InputGroupAddon addonType="append"> Coordinates </InputGroupAddon>
                        <Input placeholder={"latitude, longitude"} onChange={e => {
                            setMatch(e.target.value); setDisplay(false);
                        }}/>
                    </InputGroup>
                    {display? <CoordinateSearch match={match} lat={props.places.latitude} lng={props.places.longitude} placeActions={props.placeActions}/> :<div></div>}
                </ModalBody>

            <ModalFooter> 
                <Button color="primary" onClick={props.toggle}> <img src={check} /> </Button>
                <Button color="danger" onClick={props.toggle}> <img src={x} /> </Button>
            </ModalFooter>
        </Modal>
    );
}

export function PlaceActionsDropdown(props) {
    return (
        <ActionsDropdown {...props}>
            <DropdownItem onClick={() => props.placeActions.removeAtIndex(props.index)} data-testid={`delete-button-${props.index}`}>
                <FaTrash />
            </DropdownItem>
        </ActionsDropdown>
    );
}

function ActionsDropdown(props) {
    return (
        <UncontrolledDropdown direction="left" >
            <DropdownToggle tag="div" data-testid={`row-toggle-${props.index}`} >
                <BiDotsVerticalRounded size="1.5em" />
            </DropdownToggle >
            <DropdownMenu>
                <ButtonGroup >
                    {props.children}
                </ButtonGroup>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}