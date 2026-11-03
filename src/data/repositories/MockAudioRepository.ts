import type { Audio } from '../../domain/entities/Audio';
import type { AudioRepositoryProtocol } from '../protocols/AudioRepositoryProtocol';

//Lista inicial de audios simulados para testes
const MOCK_AUDIOS: Audio[] = [
    {
    id: '1',
    titulo: 'Clen Code na Pratica',
    artista: 'Podcast Dev',
    duracaoEmSegundos: 1800,
    urlFicheiro: 'https://ww.sondthelix.com/exe,ples/mp3Soudhelix-Song-1.mp3',
    capaUrl: 'htpps://picsum.photos/200?random=1',
    categoria: 'podcast',
    criadoEm: new Date()
    },
    {
        id: '1',
        titulo: 'Sintaxe e Tippos no TypeScript',
        artista: 'Aula Tech',
        duracaoEmSegundos: 900,
        urlFicheiro: 'https://ww.sondthelix.com/exe,ples/mp3Soudhelix-Song-2.mp3',
        capaUrl: 'htpps://picsum.photos/200/200?random=2',
        categoria: 'estudo',
        criadoEm: new Date()
    }

];

export class MockAudioRepository implements AudioRepositoryProtocol {
    private audios: Audio[] = [...MOCK_AUDIOS];

    async buscarTodos(): Promise<Audio[]> {
    // Simula  o atraso natural de uma rede (3000ms)
    await new Promise((resolve) => setTimeout(resolve, 300));
    return this.audios;
    }

    async buscarPorId(id: string): Promise<Audio | null>{
        await new Promise((resolve) => setTimeout(resolve, 300));
        const audio = this.audios.find((item) => item.id === id);
        return audio || null;
    }

    async salvar(audio: Audio): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, 300));
        this.audios.push(audio);
    }
}
