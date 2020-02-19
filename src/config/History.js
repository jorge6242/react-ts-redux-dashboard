import createHistory from 'history/createHashHistory';

export default createHistory({ options: { basename: '/', hashType: 'slash' } });