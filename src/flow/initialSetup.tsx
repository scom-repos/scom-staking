import { 
    Module, 
    ControlElement, 
    customModule, 
    customElements,
    Container,
    Styles
 } from '@ijstech/components';
import { tokenStore } from '@scom/scom-token-list';
import { getAllCampaignsInfo } from '../staking-utils/index';
import { State } from '../store/index';
import ScomTokenInput from '@scom/scom-token-input';

const Theme = Styles.Theme.ThemeVars;

interface ScomStakingFlowInitialSetupElement extends ControlElement {
	data?: any;
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['i-scom-staking-flow-initial-setup']: ScomStakingFlowInitialSetupElement;
		}
	}
}

@customModule
@customElements('i-scom-staking-flow-initial-setup')
export default class ScomStakingFlowInitialSetup extends Module {
	private state: State;
	private _data: any;
    private tokenInput: ScomTokenInput;

    constructor(parent?: Container, options?: ControlElement) {
		super(parent, options);
		this.state = new State({});
	}
    private get rpcWallet() {
		return this.state.getRpcWallet();
	}
    private async resetRpcWallet() {
		const rpcWalletId = await this.state.initRpcWallet(this._data.chainId);
		const rpcWallet = this.rpcWallet;
	}
    async setData(value: any) {
		this._data = value;
		await this.resetRpcWallet();
		await this.initializeWidgetConfig();
	}
    private initWallet = async () => {
		try {
			const rpcWallet = this.rpcWallet;
			await rpcWallet.init();
		} catch (err) {
			console.log(err);
		}
	}
    private initializeWidgetConfig = async () => {
        await this.initWallet();
        tokenStore.updateTokenMapData(this._data.chainId);
        const rpcWallet = this.rpcWallet;
        // let campaigns = await getAllCampaignsInfo(rpcWallet, { [this._data.chainId]: this._data });
        // let campaignInfo = campaigns[0];
        // let tokenAddress = campaignInfo.tokenAddress?.toLowerCase()
        let tokenAddress = this._data.tokenRequirements[0].tokenOut.address?.toLowerCase();
        this.tokenInput.rpcWalletId = rpcWallet.instanceId;
        const token = tokenStore.tokenMap[tokenAddress];
        this.tokenInput.tokenDataListProp = [token];
        this.tokenInput.token = token
	}

    render() {
        return (
            <i-vstack gap='1rem' padding={{ top: 10, bottom: 10, left: 20, right: 20 }}>
                <i-label caption='Get Ready to Stake' font={{ size: '1.5rem' }}></i-label>
                <i-vstack>
                    <i-label caption='How many tokens are you planning to stake?'></i-label>
                    <i-scom-token-input
                        id="tokenInput"
                        placeholder='0.0'
                        value='-'
                        tokenReadOnly={true}
                        isBalanceShown={false}
                        isBtnMaxShown={false}
                        border={{ radius: '1rem' }}
                        font={{ size: '1.25rem' }}
                        background={{ color: Theme.input.background }}
                    ></i-scom-token-input>
                </i-vstack>
            </i-vstack>
        )
    }
}