import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import twIcon from './tw/tw.svg';

import customExtensionIcon from './custom/custom.svg';

import utilsIcon from './utils/utilites.svg';

import gameutilsIcon from './gameutils/gameutils.svg'

import cloudlinkIcon from './cloudlink/cloudlinkThumb.png'

import jsIcon from './js/js.svg'

import saveIcon from './save/save.svg'

import uniteIcon from './unite/Unite.png'

import runtimeIcon from './runtime/runtime.png'

import box2dIcon from './box2d/griffpatch_physics.png'

import shredsdkIcon from './shredsdk/shredsdk.svg'

import consoleIcon from './console/console.svg'

import browserIcon from './browser/ada.png'

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        tags: ["scratch"],
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        tags: ["scratch"],
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        tags: ["scratch"],
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        tags: ["scratch"],
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        tags: ["scratch"],
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        tags: ["scratch"],
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        tags: ["scratch"],
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        tags: ["scratch"],
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        tags: ["scratch"],
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        tags: ["scratch"],
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="ShredMod Blocks"
                description="Name of TW extension"
                id="tw.twExtension.name"
            />
        ),
        extensionId: 'tw',
        tags: ["others"],
        iconURL: twIcon,
        description: (
            <FormattedMessage
                defaultMessage="Weird new blocks. Not compatible with Scratch. Formerly in TurboWarp."
                description="Description of TW extension"
                id="tw.twExtension.description"
            />
        ),
        featured: true,
        incompatibleWithScratch: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of custom extension category"
                id="tw.customExtension.name"
            />
        ),
        tags: ["others"],
        extensionId: '',
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions from URLs. For developers. Experimental."
                description="Description of custom extension category"
                id="tw.customExtension.description"
            />
        ),
        featured: true
    },
    {
        name: "Utilites",
        tags: ["utils"],
        extensionId: 'utils',
        iconURL: utilsIcon,
        description: (
            <FormattedMessage
                defaultMessage="Utilites for Scratch"
                description="Scratch utilities"
                id="gui.extension.utils.description"
            />
        ),
        featured: true,
        collaborator: 'The_Mad_Punter',
        incompatibleWithScratch: true
    },
    {
        name: "GameUtils",
        tags: ["utils"],
        extensionId: 'gameutils',
        iconURL: gameutilsIcon,
        description: (
            <FormattedMessage
                defaultMessage="The Extension that Loads Sprites, costumes, etc."
                description="Scratch utilities"
                id="gui.extension.gameutils.description"
            />
        ),
        featured: true,
        collaborator: 'showierdata9978',
        incompatibleWithScratch: true
    },
    {
        name: "CloudLink",
        extensionId: 'cloudlink',
        tags: ["utils"],
        iconURL: cloudlinkIcon,
        description: (
            <FormattedMessage
                defaultMessage="CloudLink: Link to the Cloud"
                description="Scratch utilities"
                id="gui.extension.cloudlink.description"
            />
        ),
        featured: true,
        collaborator: 'MikeDev101',
        internetConnectionRequired: true,
        incompatibleWithScratch: true
    },
    {
        name: "JavaScript",
        extensionId: 'js',
        tags: ["utils"],
        iconURL: jsIcon,
        description: (
            <FormattedMessage
                defaultMessage="JavaScript with Scratch"
                description="Scratch utilities"
                id="gui.extension.js.description"
            />
        ),
        featured: true,
        collaborator: 'The_Mad_Punter',
        incompatibleWithScratch: true
    },
    {
        name: "Save",
        extensionId: 'save',
        tags: ["utils"],
        iconURL: saveIcon,
        description: (
            <FormattedMessage
                defaultMessage="Save with Scratch"
                description="Scratch utilities"
                id="gui.extension.save.description"
            />
        ),
        featured: true,
        collaborator: 'The_Mad_Punter',
        incompatibleWithScratch: true
    },
    {
        name: "Unite",
        extensionId: 'jwUnite',
        tags: ["utils"],
        iconURL: uniteIcon,
        description: (
            <FormattedMessage
                defaultMessage="Blocks that should be in Scratch"
                description="Scratch utilities"
                id="gui.extension.jwUnite.description"
            />
        ),
        featured: true,
        collaborator: 'PenguinMod',
        incompatibleWithScratch: true
    },
    {
        name: "Runtime",
        extensionId: 'jgRuntime',
        tags: ["utils"],
        iconURL: runtimeIcon,
        description: (
            <FormattedMessage
                defaultMessage="Runtime Utilites from PenguinMod"
                description="Scratch utilities"
                id="gui.extension.jgRuntime.description"
            />
        ),
        featured: true,
        collaborator: 'PenguinMod',
        incompatibleWithScratch: true
    },
    {
        name: "Box2D",
        extensionId: 'box2d',
        tags: ["others", "sdks"],
        iconURL: box2dIcon,
        description: (
            <FormattedMessage
                defaultMessage="Box2D"
                description="Scratch utilities"
                id="gui.extension.box2d.description"
            />
        ),
        featured: true,
        collaborator: 'griffpatch',
        incompatibleWithScratch: true
    },
    {
        name: "ShredSDK",
        tags: ["utils", "sdks"],
        extensionId: 'shredsdk',
        iconURL: shredsdkIcon,
        description: (
            <FormattedMessage
                defaultMessage="A development kit for making good web games"
                description="Scratch utilities"
                id="gui.extension.shredsdk.description"
            />
        ),
        featured: true,
        collaborator: 'The_Mad_Punter',
        incompatibleWithScratch: true
    },
    {
        name: "Console SDK (Gamepad)",
        tags: ["utils", "sdks"],
        extensionId: 'Gamepad',
        iconURL: consoleIcon,
        description: (
            <FormattedMessage
                defaultMessage="Console SDK (including controller support)"
                description="Scratch utilities"
                id="gui.extension.gamepad.description"
            />
        ),
        featured: true,
        collaborator: 'The_Mad_Punter',
        incompatibleWithScratch: true
    },
    {
        name: "Browser SDK",
        tags: ["utils", "sdks"],
        extensionId: 'adabrowser',
        iconURL: browserIcon,
        description: (
            <FormattedMessage
                defaultMessage="Change the web browser! Perfect for web apps."
                description="Scratch utilities"
                id="gui.extension.adabrowser.description"
            />
        ),
        featured: true,
        collaborator: 'The_Mad_Punter',
        incompatibleWithScratch: true
    },
    {
        name: "File SDK",
        tags: ["utils", "sdks"],
        extensionId: 'jgFiles',
        iconURL: filesIcon,
        description: (
            <FormattedMessage
                defaultMessage="Ask for and download files!"
                description="Scratch utilities"
                id="gui.extension.jgFiles.description"
            />
        ),
        featured: true,
        collaborator: 'The_Mad_Punter',
        incompatibleWithScratch: true
    }
    
];
