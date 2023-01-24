import { Adereco } from './Pedido';

export type OpenReasons = 'add' | 'edit';

export interface AderecoDialogData {
  openReason: OpenReasons;
  adereco?: Adereco;
}
