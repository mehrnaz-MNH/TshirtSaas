import React ,{useState,useEffect} from 'react';
import { AnimatePresence , motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import config from '../config/config';
import {download} from '../assets';
import {downloadCanvasToImage , reader} from '../config/helpers';
import {EditiorTabs , FilterTabs , DecalTypes} from '../config/constants'
import { fadeAnimation , slideAnimation} from '../config/motion';

const Customizer = () => {
  return (
    <div>Customizer</div>
  )
}

export default Customizer
