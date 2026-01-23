import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton, ButtonHeader } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

import backgroundVideo from '../../public/videos/reel.mp4';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <div className="home">
      <div style={{ position: 'absolute', left: 13, top: 13, width: 12, height: 12, borderBottomWidth: 3, borderRightWidth: 3, borderColor: '#bfbfbf' }}/>
      <div style={{ position: 'absolute', left: 22, top: 22, width: 12, height: 12, borderTopWidth: 3, borderLeftWidth: 3, borderColor: '#bfbfbf' }}/>
      {/* <div style={{ display: 'flex', width: '100%', flexDirection: 'row', }}>
        <div className="top-l"/>
        <div className="top-m"/>
        <div className="top-r"/>
      </div> */}
      <div style={{ display: 'flex', flexDirection: 'row', height: 24, width: '100%', borderBottomWidth: 1, borderColor: '#808080' }}>
        <div style={{ width: 24, borderRightWidth: 1, borderColor: '#808080' }}/>
        <div style={{ flex: 1 }}/>
        <div style={{ width: 24, borderLeftWidth: 1, borderColor: '#808080' }}/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', borderBottomWidth: 1, borderColor: '#808080' }}>
        <div style={{ width: 24, borderRightWidth: 1, borderColor: '#808080' }}/>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12, }}>
          <a href="/">
            <p style={{ fontFamily: 'Inter', fontSize: 24, color: '#ffffff', marginLeft: 8, }}>
              AXON
            </p>
          </a>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 24, }}>
            <a href="/">
              <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#ffffff' }}>
                HOME
              </p>
            </a>
            <a href="/">
              <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#ffffff' }}>
                PRODUCTS
              </p>
            </a>
            <a href="/">
              <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#ffffff' }}>
                SHOP
              </p>
            </a>
            <a href="/">
              <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#ffffff' }}>
                ABOUT
              </p>
            </a>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, borderRadius: 4, backgroundColor: '#ffffff'}}>
            <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#000000' }}>BOOK A DEMO</p>
          </button>
        </div>
        <div style={{ width: 24, borderLeftWidth: 1, borderColor: '#808080' }}/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', borderBottomWidth: 1, borderColor: '#808080' }}>
        <div style={{ width: 24, borderRightWidth: 1, borderColor: '#808080' }}/>
        <div style={{ flex: 1, padding: 12, }}>
          <div style={{ flex: 1, height: '100%', backgroundColor: '#101010' }}>HERO SECTION</div>
        </div>
        <div style={{ width: 24, borderLeftWidth: 1, borderColor: '#808080' }}/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', borderBottomWidth: 1, borderColor: '#808080' }}>
        <div style={{ width: 24, borderRightWidth: 1, borderColor: '#808080' }}/>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', padding: 24, borderRightWidth: 1, borderRightColor: '#808080', gap: 12 }}>
          <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#ffffff' }}>ACCESSIBLE INNOVATION</p>
          <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#ffffff' }}>Most affordable multi-grip bionic arm; built by Axon Bionics in Ukraine, available globally.</p>
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', padding: 24, borderRightWidth: 1, borderRightColor: '#808080', gap: 12 }}>
          <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#ffffff' }}>INTUITIVE CONTROL</p>
          <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#ffffff' }}>Control with your muscles - natural. Multi-grip. 180deg wrist rotation.</p>
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', padding: 24, gap: 12 }}>
          <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#ffffff' }}>CUSTOM FIT AND STYLE</p>
          <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#ffffff' }}>Each Axon Arm is unique just like you.</p>
        </div>
        <div style={{ width: 24, borderLeftWidth: 1, borderColor: '#808080' }}/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', height: 24, width: '100%' }}>
        <div style={{ width: 24, borderRightWidth: 1, borderColor: '#808080' }}/>
        <div style={{ flex: 1 }}/>
        <div style={{ width: 24, borderLeftWidth: 1, borderColor: '#808080' }}/>
      </div>
      {/* <div className="col-l">
        <div className="top-l"/>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div className="top-m"/>
      </div>
      <div className="col-m">
        <div className="top-m"/>
        <div className="navbar">
          <a href="/" className="logo-1">AXON</a>
          <div>BOOK A DEMO</div>
        </div>
        <div>3</div>
        <div>4</div>
        <div className="top-m"/>
      </div>
      <div className="col-r">
        <div className="top-r"/>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div className="top-m"/>
      </div> */}
      {/* <div className="main"> */}
        {/* <div className="flex h-4 w-4 border-1 border-grey-500"></div> */}
        {/* <div className="navbar">
          <div className="logo-container">
            <a href="/" className="logo-1">AXON</a>
            <a href="/" className="logo-2">HEALTH</a>
          </div>
          <div className="navbar-links">
            <a href="/" className="link">COMPANY</a>
            <a href="/" className="link">TECHNOLOGY</a>
            <a href="/" className="link">CONTACT US</a>
            <a href="/" className="link">RESOURCES</a>
          </div>
          <div className="other-links"></div>
          <div className="navbar-links">
            <a href="/" className="link">EN</a>
            <ButtonHeader
              title="AXON FORGE"
              handleClick={() => state.intro = false}
            />
          </div>
        </div> */}
        {/* <div className="row">
          <div className="sidebar"></div>
          <div className="section"></div>
          <div className="square-l"></div>
          <div className="square-r"></div>
        </div>
        <div className="row">
        <div className="sidebar"></div>
          <div className="section"></div>
          <div className="square-l"></div>
          <div className="square-r"></div>
        </div> */}
      {/* </div> */}

          {/* <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
              Transforming Bionics
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-sm font-normal text-white text-base">
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton
                title="CUSTOMIZE"
                handleClick={() => state.intro = false}
              />
            </motion.div>
          </motion.div> */}
    </div>
  )
}

export default Home