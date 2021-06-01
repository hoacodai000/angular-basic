
const userAgent: string = window.navigator.userAgent;

export const isFirefox: boolean = (userAgent.indexOf('Firefox') >= 0);
export const isWebKit: boolean = (userAgent.indexOf('AppleWebKit') >= 0);
export const isChrome: boolean = (userAgent.indexOf('Chrome') >= 0);
export const isSafari: boolean = (!isChrome && (userAgent.indexOf('Safari') >= 0));
export const isWebkitWebView: boolean = (!isChrome && !isSafari && isWebKit);
export const isEdgeLegacyWebView: boolean = (userAgent.indexOf('Edge/') >= 0) && (userAgent.indexOf('WebView/') >= 0);
export const isElectron: boolean = (userAgent.indexOf('Electron/') >= 0);
export const isAndroid: boolean = (userAgent.indexOf('Android') >= 0);
export const isStandalone: boolean = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);