import { useEffect, useState } from 'react';
import type { Audio } from '../../../domain/entities/Audio';
import { MockAudioRepository } from '../../../data/repositories/MockAudioRepository';
import { CardAudio } from '../../components/CardAudio';

//Instanciamos o repositorio que crumpe o contrato
const audioRepository = new MockAudioRepository;

export function ListenerPage(){
    const [audios, setAudios] = useState<Audio[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);

    useEffect(() => {
        async function carregarAudios(){
            try {
                const dados = await audioRepository.buscarTodos();
                setAudios(dados)
            }finally{
                setCarregando(false);
            }
        }

        carregarAudios();
    }, []);

    return (
        <div style={{padding: '24px', backgroundColor: '#121212', minHeight: '100vh', color: '#fff'}}>
            <h1 style={{ fontSize: '1.8rem', marginBottom: '24px'}}>Musicas e Podcasts</h1>

        {carregando ? (
            <p style={{ color: '#b3b3b3' }}>A carregar audios...</p>
        ) : (
           <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}> 
           {audios.map((audio) => (
                <CardAudio key={audio.id} audio={audio} />
           ))}
           </div>
        )}
        </div>
    );
}