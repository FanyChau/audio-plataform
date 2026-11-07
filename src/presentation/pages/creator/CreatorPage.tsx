import { useState } from "react";
import type {  SyntheticEvent } from "react";
import type { Audio } from "../../../domain/entities/Audio";
import { MockAudioRepository } from "../../../data/repositories/MockAudioRepository";

//Instancia o repositorio para salvar os dados
const audioRepository = new MockAudioRepository();

export function CreatorPage()  {
    const[titulo, setTitulo] = useState('');
    const[artista, setArtista] = useState('');
    const[duracao, setDuracao] = useState('');
    const[urlFicheiro, setUrlFicheiro] = useState('');
    const[capaUrl, setCapaUrl] = useState('');
    const[categoria, setCategoria] = useState<'musica' | 'podcast' | 'estudo'>('musica');
    const[mensagem, setMensagem] = useState('');

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();

        if (!titulo || !artista || !duracao){
            setMensagem('Por favor, preencha os campos obrigatorios.');
            return;
        }

        const novoAudio: Audio = {
            id:Date.now().toString(),
            titulo,
            artista,
            duracaoEmSegundos: Number(duracao),
            urlFicheiro: urlFicheiro || 'https://www.soundhelix.com/exemples/mp3/SoudHelix-Song-1.mp3',
            capaUrl: capaUrl || 'https://images.unsplash.com/photo-151116711782779-c97d3d27a1d4?w=300&q=80',
            categoria,
            criadoEm: new Date()
        };

        await audioRepository.salvar(novoAudio);
        setMensagem('Audio publicado com sucesso!');

        //Limpar formulario
        setTitulo('');
        setArtista('');
        setDuracao('');
        setUrlFicheiro('');
        setCapaUrl('');
    }

    return(
        <div style={{padding: '24px', backgroundColor: '#121212', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif'}}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '24px' }}>Painel do Criador -Publicar Audio</h1>

        {mensagem && (
            <div style={{ padding: '12px', marginBottom: '16px', backgroundColor: '#1ed760', color: '#000', borderRadius: '4px', fontWeight: 'bold'}}>
                {mensagem}
            </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px'}}>
            <div>
                <label style={{ display: 'block', marginBottom: '8px'}}>Titulo:</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #333', backgroundColor: "#282828", color: '#fff' }}
                    />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '8px'}}>Artista / Autor:</label>
                <input
                    type="text"
                    value={artista}
                    onChange={(e) => setArtista(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #333', backgroundColor: "#282828", color: '#fff' }}
                    />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '8px'}}>
                    Duracao (em segundos)</label>
                    <input
                    type="number"
                    value={duracao}
                    onChange={(e) => setDuracao(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #333', backgroundColor: "#282828", color: '#fff' }}
                    />
            </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px'}}>Categoria:</label>
                <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value as 'musica' | 'podcast' | 'estudo')}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #333', backgroundColor: "#282828", color: '#fff' }}
                    />
                    <option value={"musica"}>Musica</option>
                    <option value={"podcast"}>Podcast</option>
                    <option value="estudo">Estudo</option>
            </div>

            <button
                type="submit"
                style={{ padding: '12px', backgroundColor:'#1ed760', color: '#000', border: 'none', borderRadius: '24px', fontWeight: 'bold', cursor: 'pointer',    
                marginTop: '12px' }}>
                    Publicar Audio
                </button>  
        </form>
        </div>
    );
}
