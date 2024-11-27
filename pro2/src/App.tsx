import React from 'react';
interface YellowPolygonProps {
  style?: React.CSSProperties;
}
const App: React.FC = () => 
  {
  return (
    <div style={pageStyle}>
      <div className="parent-frame" style={parentFrameStyle}>
        <div title="stage" style={{ ...stageStyle, top: '5%', left: '15%' }}>
        <div className="parent-frame" style={greyStyle}>
        <div title="square" style={{ ...stageRectangle}}>
        <span style={{ 
      color: 'white', 
      fontSize: '1vw', // Use px for fixed size
      fontFamily: 'Arial, sans-serif', 
      transform: 'scale(1)',  // Prevent zoom scaling
      transformOrigin: 'center center' // Ensure it scales from the center
    }}>
      STAGE
    </span>
        </div>
        </div>
        </div>
        <div title="square" style={{ ...basicRectangle, top: '21%', left: '30%' }}></div>
        <div title="square" style={{ ...basicRectangle, top: '30%', left: '30%' }}></div>
        <div title="square" style={{ ...basicRectangle, top: '39%', left: '30%' }}></div>
        <div title="square" style={{ ...basicRectangle, top: '21%', left: '60%' }}></div>
        <div title="square" style={{ ...basicRectangle, top: '30%', left: '60%' }}></div>
        <div title="square" style={{ ...basicRectangle, top: '39%', left: '60%' }}></div>
        <div className="parent-frame" style={yelloParent}>
          <div title="rectangle" style={{ ...yelloStyle, top: '2%', left: '10%' }}></div>
          <div title="rectangle" style={{ ...yelloStyle, top: '2%', left: '70%' }}></div>
          <div title="rectangle" style={{ ...yelloStylem, top: '2%', left: '40%' }}></div>
          <div title="rectangle" style={{ ...yelloStyles, top: '30%', left: '10%' }}></div>
          <div title="rectangle" style={{ ...yelloStyles, top: '30%', left: '70%' }}></div>
          <div title="rectangle" style={{ ...yelloStylemd, top: '50%', left: '40%' }}></div>
          <div className="parent-frame" style={yelloParent1}>
          <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <YellowPolygon style={{ top: '0%', left: '0%' }} />
          </div>
          </div>
          <div className="parent-frame" style={yelloParent2}>
          <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <YellowPolygon1 style={{ top: '0%', left: '0%' }} />
          </div>
          </div>
        </div>
        <div className="parent-frame" style={lorangelStyle}>
          <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <OrangePolygon1l style={{ top: '0%', left: '0%' }} />
          </div>
          </div>
          <div className="parent-frame" style={lorangerStyle}>
          <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <OrangePolygon1r style={{ top: '0%', left: '0%' }} />
          </div>
          </div>
          <div className="parent-frame" style={lorangel2Style}>
          <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <OrangePolygonl2 style={{ top: '0%', left: '0%' }} />
          </div>
          </div>
          <div className="parent-frame" style={loranger2Style}>
          <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <OrangePolygonr2 style={{ top: '0%', left: '0%' }} />
          </div>
          </div>
          <div className="parent-frame" style={lorangel3Style}>
          <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <OrangePolygonl3 style={{ top: '0%', left: '0%' }} />
          </div>
          </div>
          <div className="parent-frame" style={loranger3Style}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <OrangePolygonr3 style={{ top: '0%', left: '0%' }} />
            </div>
          </div>
          <div className="parent-frame" style={lorangerlowStyle}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <OrangePolygonlow style={{ top: '0%', left: '0%' }} />
            </div>
          </div>
          <div className="parent-frame" style={lgreenl1Style}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <GreenPolygonl1 style={{ top: '0%', left: '0%' }} />
            </div>
          </div>
          <div className="parent-frame" style={lgreenr1Style}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <GreenPolygonr1 style={{ top: '0%', left: '0%' }} />
            </div>
          </div>
          <div className="parent-frame" style={lgreenl2Style}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <GreenPolygonl2 style={{ top: '0%', left: '0%' }} />
            </div>
          </div>
          <div className="parent-frame" style={lgreenr2Style}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <GreenPolygonr2 style={{ top: '0%', left: '0%' }} />
            </div>
          </div>
          <div className="parent-frame" style={lgreenl3Style}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <GreenPolygonl3 style={{ top: '0%', left: '0%' }} />
            </div>
          </div>
          <div className="parent-frame" style={lgreenr3Style}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <GreenPolygonr3 style={{ top: '0%', left: '0%' }} />
            </div>
          </div>
          <div className="parent-frame" style={lgreenl4Style}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <GreenPolygonl4 style={{ top: '0%', left: '0%' }} />
            </div>
          </div>
          <div className="parent-frame" style={lgreenr4Style}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <GreenPolygonr4 style={{ top: '0%', left: '0%' }} />
            </div>
          </div>
          <div className="parent-frame" style={lgreenlowStyle}>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <GreenPolygonlow style={{ top: '0%', left: '0%' }} />
            </div>
          </div>
        <div title="green" style={{ ...greenStyle, top: '21%', left: '16%' }}></div>
        <div title="green" style={{ ...greenStyle, top: '30%', left: '16%' }}></div>
        <div title="green" style={{ ...greenStyle, top: '39%', left: '16%' }}></div>
        <div title="green" style={{ ...greenStyle, top: '48%', left: '16%' }}></div>
        <div title="green" style={{ ...greenStyle, top: '21%', left: '74%' }}></div>
        <div title="green" style={{ ...greenStyle, top: '30%', left: '74%' }}></div>
        <div title="green" style={{ ...greenStyle, top: '39%', left: '74%' }}></div>
        <div title="green" style={{ ...greenStyle, top: '48%', left: '74%' }}></div>
      </div>
    </div>
  );
};
const pageStyle: React.CSSProperties = {
  position:'fixed',
  display: 'flex',
  justifyContent: 'center', // Horizontally center the parent container
  alignItems: 'center', // Vertically center the parent container
  height: '100vh', // Take up the full viewport height
  width: '100vw', // Take up the full viewport width
  margin: 0, // Remove any default margins
};
const parentFrameStyle: React.CSSProperties = {
  position: 'absolute', // Make it a reference for absolute positioning of children
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between', // Space out the child frames (no longer needed for positioning)
  alignItems: 'center', // Vertically center the shapes (though now each will have its own position)
  width: '576px', // Set width to 60% of the viewport width
  height: '648px', // Set height to 60% of the viewport height
  border: '2px solid black',
  padding: '10px',
  borderRadius: '1px', // Optional, for rounded corners
};
const stageStyle: React.CSSProperties = {
  position: 'absolute', // Absolute positioning to place it within the parent
  width: '70%', // Set width to 30% of the parent width
  height: '15%', // Set height to 30% of the parent height
  backgroundColor: '#222222', // Red square
  borderRadius: '0px', // No rounded corners (square)
};
const basicRectangle: React.CSSProperties = {
  position: 'absolute', // Absolute positioning to place it within the parent
  width: '10%', // Set width to 30% of the parent width
  height: '8%', // Set height to 30% of the parent height
  backgroundColor: '#ff6801', // Red square
  borderRadius: '0px', // No rounded corners (square)
};
const stageRectangle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  height: '80%',
  backgroundColor: 'grey', 
  borderRadius: '0px', 
  display: 'flex',
  justifyContent: 'center', // Centers content inside the child if needed
  alignItems: 'center',
};
const baseFrameStyle: React.CSSProperties = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'row',
  width: '10%',
  height: '6%',
  padding: '0px',
  borderRadius: '0px',
};
const lorangelStyle: React.CSSProperties = {
  ...baseFrameStyle,
  top: '48%',
  height:'16%',
  left: '30%',
};
const lorangerStyle: React.CSSProperties = {
  ...baseFrameStyle,
  top: '48%',
  height:'16%',
  left: '60%',
};
const lorangel2Style: React.CSSProperties = {
  ...baseFrameStyle,
  top: '52%',
  height:'12%',
  width:'13%',
  left: '30%',
};
const loranger2Style: React.CSSProperties = {
  ...baseFrameStyle,
  top: '52%',
  height:'12%',
  width:'13%',
  left: '57%',
};
const lorangel3Style: React.CSSProperties = {
  ...baseFrameStyle,
  top: '56%',
  height:'10%',
  width:'10%',
  //backgroundColor:'red',
  left: '38%',
};
const loranger3Style: React.CSSProperties = {
  ...baseFrameStyle,
  top: '56%',
  height:'10%',
  width:'10%',
  //backgroundColor:'red',
  left: '52%',
};
const lorangerlowStyle: React.CSSProperties = {
  ...baseFrameStyle,
  top: '61%',
  height:'5%',
  width:'8%',
  //backgroundColor:'red',
  left: '46%',
};
const lgreenl1Style: React.CSSProperties = {
  ...baseFrameStyle,
  top: '57%',
  height:'9%',
  width:'12%',
  //backgroundColor:'red',
  left: '16%',
};
const lgreenr1Style: React.CSSProperties = {
  ...baseFrameStyle,
  top: '57%',
  height:'9%',
  width:'12%',
  //backgroundColor:'red',
  left: '72%',
};
const lgreenl2Style: React.CSSProperties = {
  ...baseFrameStyle,
  top: '60%',
  height:'14%',
  width:'14%',
  //backgroundColor:'red',
  left: '21%',
};
const lgreenr2Style: React.CSSProperties = {
  ...baseFrameStyle,
  top: '60%',
  height: '14%',
  width: '14%',
  //backgroundColor: 'red',
  left: '65%', // Mirrored position
};
const lgreenl3Style: React.CSSProperties = {
  ...baseFrameStyle,
  top: '68%',
  height:'10%',
  width:'10%',
  //backgroundColor:'red',
  left: '27%',
};
const lgreenr3Style: React.CSSProperties = {
  ...baseFrameStyle,
  top: '68%',
  height: '10%',
  width: '10%',
  //backgroundColor: 'red',
  left: '63%', // Mirrored position
};
const lgreenl4Style: React.CSSProperties = {
  ...baseFrameStyle,
  top: '71%',
  height: '8.5%',
  width: '7.5%',
  //backgroundColor: 'red',
  left: '38%', // Mirrored position
};
const lgreenr4Style: React.CSSProperties = {
  ...baseFrameStyle,
  top: '71%',
  height: '8.5%',
  width: '7.5%',
  //backgroundColor: 'red',
  left: '54.5%', // Mirrored position
};
const lgreenlowStyle: React.CSSProperties = {
  ...baseFrameStyle,
  top: '71%',
  height: '6.5%',
  width: '7.5%',
  //backgroundColor: 'red',
  left: '46.25%', // Mirrored position
};

const greyStyle: React.CSSProperties = {
  ...baseFrameStyle,
  top: '20%',
  height:'50%',
  width:'20%',
  backgroundColor: 'white',
  left: '40%',
  display: 'flex',
  justifyContent: 'center', // Centers content inside the child if needed
  alignItems: 'center',
};
const greenStyle: React.CSSProperties = {
  position: 'absolute', // Absolute positioning to place it within the parent
  width: '10%', // Set width to 30% of the parent width
  height: '8%', // Set height to 30% of the parent height
  backgroundColor: '#83a946', // Blue circle
  borderRadius: '0px', // Make it circular
};
const yelloParent: React.CSSProperties = {
  position: 'absolute', // Make it a reference for absolute positioning of children
  display: 'flex',
  flexDirection: 'row',
  left: '41%', // Space out the child frames (no longer needed for positioning)
  top: '19%', // Vertically center the shapes (though now each will have its own position)
  width: '18%', // Set width to 60% of the viewport width
  height: '40%', // Set height to 60% of the viewport height
  backgroundColor: 'white',
  padding: '0px',
  borderRadius: '0px', // Optional, for rounded corners
};
const yelloParent1: React.CSSProperties = {
  position: 'absolute', // Make it a reference for absolute positioning of children
  display: 'flex',
  flexDirection: 'row',
  left: '10%', // Space out the child frames (no longer needed for positioning)
  top: '50%', // Vertically center the shapes (though now each will have its own position)
  width: '21%', // Set width to 60% of the viewport width
  height: '35%', // Set height to 60% of the viewport height
  padding: '0px',
  borderRadius: '0px', // Optional, for rounded corners
};
const yelloParent2: React.CSSProperties = {
  position: 'absolute', // Make it a reference for absolute positioning of children
  display: 'flex',
  flexDirection: 'row',
  left: '70%', // Space out the child frames (no longer needed for positioning)
  top: '50%', // Vertically center the shapes (though now each will have its own position)
  width: '21%', // Set width to 60% of the viewport width
  height: '35%', // Set height to 60% of the viewport height
  backgroundColor: 'white',
  padding: '0px',
  borderRadius: '0px', // Optional, for rounded corners
};
const yelloStyle: React.CSSProperties = {
  position: 'absolute', // Absolute positioning to place it within the parent
  width: '21%', // Set width to 50% of the parent width
  height: '25%', // Set height to 30% of the parent height
  backgroundColor: '#ffef26', // Green rectangle
  borderRadius: '0px', // Slightly rounded corners
};
const yelloStylem: React.CSSProperties = {
  position: 'absolute', // Absolute positioning to place it within the parent
  width: '21%', // Set width to 50% of the parent width
  height: '45%', // Set height to 30% of the parent height
  backgroundColor: '#ffef26', // Green rectangle
  borderRadius: '0px', // Slightly rounded corners
};
const yelloStyles: React.CSSProperties = {
  position: 'absolute', // Absolute positioning to place it within the parent
  width: '21%', // Set width to 50% of the parent width
  height: '17%', // Set height to 30% of the parent height
  backgroundColor: '#ffef26', // Green rectangle
  borderRadius: '0px', // Slightly rounded corners
};
const yelloStylemd: React.CSSProperties = {
  position: 'absolute', // Absolute positioning to place it within the parent
  width: '21%', // Set width to 50% of the parent width
  height: '35%', // Set height to 30% of the parent height
  backgroundColor: '#ffef26', // Green rectangle
  borderRadius: '0px', // Slightly rounded corners
};
const YellowPolygon: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 0,80 100,100 100,0" fill="#ffef26"/>
    </svg>
);
const YellowPolygon1: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 0,100 100,80 100,0" fill="#ffef26"/>
    </svg>
);
const OrangePolygon1r: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width='100%' height='100%' viewBox="0 50 100 100" preserveAspectRatio="none">
        <polygon points="0,0 100,0 100,90 0,70" fill="#ff6801"/>
    </svg>
);
const OrangePolygon1l: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width='100%' height='100%' viewBox="0 50 100 100" preserveAspectRatio="none">
        <polygon points="0,0 0,90 100,70 100,0" fill="#ff6801"/>
    </svg>
);
const OrangePolygonl2: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,28 77,0 100,27 60,100" fill="#ff6801"/>
    </svg>
);
const OrangePolygonr2: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={style}>
    <polygon 
      points="0,28 77,0 100,27 60,100"
      fill="#ff6801" 
      transform="scale(-1, 1) translate(-100, 0)" 
    />
  </svg>
);
const OrangePolygonl3: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 60,0 100,0 100,40 70,40 70,100" fill="#ff6801"/>
    </svg>
);
const OrangePolygonr3: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={style}>
    <polygon 
      points="0,100 60,0 100,0 100,40 70,40 70,100"
      fill="#ff6801" 
      transform="scale(-1, 1) translate(-100, 0)" 
    />
  </svg>
);
const POLYGON_POINTS = "0,0 100,0 100,100 0,100";
const OrangePolygonlow: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points={POLYGON_POINTS} fill="#ff6801"/>
    </svg>
);
const POLYGON_POINTS1 = "0,0 91,0 100,17 35,100 0,40";
const GreenPolygonl1: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points={POLYGON_POINTS1} fill="#83a946"/>
    </svg>
);
const GreenPolygonr1: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={style}>
    <polygon 
      points={POLYGON_POINTS1}
      fill="#83a946" 
      transform="scale(-1, 1) translate(-100, 0)" 
    />
  </svg>
);
const POLYGON_POINTS2 = "0,52 55,0 100,56 40,100";
const GreenPolygonl2: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points={POLYGON_POINTS2} fill="#83a946"/>
    </svg>
);
const GreenPolygonr2: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={style}>
    <polygon 
      points={POLYGON_POINTS2}
      fill="#83a946" 
      transform="scale(-1, 1) translate(-100, 0)" 
    />
  </svg>
);
const POLYGON_POINTS3 = "2,68 84,6 100,26 100,100 28,100";
const GreenPolygonl3: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points={POLYGON_POINTS3} fill="#83a946"/>
    </svg>
);
const GreenPolygonr3: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={style}>
    <polygon 
      points={POLYGON_POINTS3}
      fill="#83a946" 
      transform="scale(-1, 1) translate(-100, 0)" 
    />
  </svg>
);
const GreenPolygonl4: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points={POLYGON_POINTS} fill="#83a946"/>
    </svg>
);
const GreenPolygonr4: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={style}>
    <polygon 
      points={POLYGON_POINTS}
      fill="#83a946" 
      transform="scale(-1, 1) translate(-100, 0)" 
    />
  </svg>
);
const GreenPolygonlow: React.FC<YellowPolygonProps> = ({ style }) => (
  <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points={POLYGON_POINTS} fill="#83a946"/>
    </svg>
);
export default App;
