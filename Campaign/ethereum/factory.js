import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
// addr: 0x51F24Cf75B2BB0aC9D8EAd063F09EbF4F7b924A7
const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x51F24Cf75B2BB0aC9D8EAd063F09EbF4F7b924A7'
);

export default instance;