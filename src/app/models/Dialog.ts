import { Adereco } from './Pedido';
import { Photo } from './Photo';

export type OpenReasons = 'add' | 'edit';

export type DialogType = 'photo' | 'adereco';

export interface InventoryDialogData {
  openReason: OpenReasons;
  adereco?: Adereco;
  photo?: Photo;
  type: DialogType;
}
