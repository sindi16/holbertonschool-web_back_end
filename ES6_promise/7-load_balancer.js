/* eslint-disable */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.all([chinaDownload,USDownload]);
}
