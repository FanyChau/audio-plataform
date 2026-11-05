import type { Audio } from '../../domain/entities/Audio';

interface CardAudioProps {
    audio: Audio;
}

export function CardAudio ({ audio }: CardAudioProps){
    //Converte Segundos em minutos (ex: 1800s -> 30min)
    const duracaoEmMinutos = Math.floor(audio.duracaoEmSegundos / 60);

    return (
        <div style={{
            border: '1px solid #282828',
            borderRadius: '8px',
            padding: '16px',
            width: '200px',
            backgroundColor: '#181818',
            color: '#fff',
            fontFamily: 'sans-serif'
        }}>
            <img
                src={audio.capaUrl}
                alt={audio.titulo}
                style={{ width: '100%, borderRadius: 6px', height: '140', objectFit: 'cover'}}
            />

            <h3 style={{ margin: '12px 0 4px 0', fontSize: '1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {audio.titulo}
            </h3>

            <p style={{ margin: 0, color: "#b3b3b3", fontSize: '0.85rem'}}>{audio.artista}</p>

            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '0.75rem', color: '#888'}}>
            <span style={{ textTransform: 'uppercase', fontWeight: 'bold'}}>{audio.categoria}</span> 
            <span>{duracaoEmMinutos} min</span>
            </div>
    </div>        
    );
}