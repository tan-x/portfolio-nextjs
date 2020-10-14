import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

const useMobile = (path) => {
    const [containermain, setContainermain] = useState('container-main flex-column');
	const [header, setHeader] = useState(-120);
    useEffect(() => {
		if (isMobile) {
			setContainermain('container-main flex-column ios');
        }
        if (path === 'home') {
            setHeader(30);
        }
    }, []);
    return [containermain, header];
  };

export default useMobile