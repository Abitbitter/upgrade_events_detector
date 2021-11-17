import { 
  TransactionEvent, 
  Finding, 
  HandleTransaction, 
  FindingSeverity, 
  FindingType,
  createTransactionEvent,
  getJsonRpcUrl

} from 'forta-agent'
import Web3 from 'web3';
import {
  UPGRADE_EVENT_SIGNATURE,
  CONTRACT_ADDRESS
  

} from "./consts"

const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
  const findings: Finding[] = [];
  const events = txEvent.filterEvent(
    UPGRADE_EVENT_SIGNATURE,
    CONTRACT_ADDRESS.length > 0 ? CONTRACT_ADDRESS : undefined
  );

  if (!events.length) return findings;

  findings.push(
    Finding.fromObject({
      name: "UPGRADE_EVENT",
      description: `Detected update event`,
      alertId: "FORTA-1000",
      type: FindingType.Info,
      severity: FindingSeverity.High,
      
    })
  );

 

  


  

    

  return findings;
}

export default {
  handleTransaction
}