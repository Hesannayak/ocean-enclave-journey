import {describe,it,expect} from 'vitest';
import {reportData} from './mock';
import {createHash,webcrypto} from 'node:crypto';
import {vi} from 'vitest';
vi.stubGlobal('crypto',webcrypto);
describe('PERLY report-data binding',()=>{it('hashes the exact protocol prefix, wallet and challenge followed by 32 zero bytes',async()=>{const wallet='demo-wallet';const nonce='a'.repeat(64);const hash=createHash('sha256').update(`perly:v1:${wallet}:${nonce}`).digest('hex');expect(await reportData(wallet,nonce)).toBe('0x'+hash+'0'.repeat(64))});it('binds distinct challenges to distinct reports',async()=>{expect(await reportData('wallet','a')).not.toBe(await reportData('wallet','b'))})});
