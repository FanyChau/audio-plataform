import type { Audio } from '../../domain/entities/Audio';

/**
 * Contrato (Interface) que define as operacoes de dados para os Audios.
 * A camada de apresentacao (React) dependera apenas deste contrato.
 */

export interface AudioRepositoryProtocol {
    buscarTodos(): Promise<Audio[]>;
    buscarPorId(id: string): Promise<Audio | null>;
    salvar(audio: Audio): Promise<void>;
}