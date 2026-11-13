import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../shared/components';
import type { NavItem } from '../../shared/components';
import styles from './UsuarioPage.module.css';

// 🌿 1. IMPORTA AQUí TU IMAGEN EXCLUSIVA PARA ESTA VISTA:
// (Cambia el nombre del archivo por el de tu imagen guardada en assets)
import miImagenFondoUsuario from '../../assets/fondo reconocimiento.jpeg';

const NAV_ITEMS: NavItem[] = [
  { icon: '🏠', label: 'Inicio', href: '/' },
  { icon: '🛡️', label: 'Áreas protegidas', href: '/areas-protegidas' },
  { icon: '🔍', label: 'Reconocimiento de especies', href: '/reconocimiento' },
];

export default function UsuarioPage() {
  const navigate = useNavigate();

  // Estados para el formulario de aportes y mensajes al interno
  const [nombre, setNombre] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [tipoAporte, setTipoAporte] = useState<string>('Sugerir nueva especie');
  const [mensaje, setMensaje] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [enviado, setEnviado] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    // 🖼️ 2. AQUÍ SE APLICA TU IMAGEN COMO FONDO EXCLUSIVO DE ESTA VISTA:
    <div 
      className={styles.page} 
      style={{ 
        backgroundImage: `url(${miImagenFondoUsuario})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      
      {/* Barra superior de navegación corporativa estándar */}
      <Navbar brand="Herbario" brandIcon="🌿" items={NAV_ITEMS} />

      <div className={styles.contentWrapper}>
        
        {/* Botón de volver */}
        <div className={styles.topBarSection}>
          <button onClick={() => navigate(-1)} className={styles.backBtn}>
            ← Volver
          </button>
        </div>

        {/* Encabezado */}
        <header className={styles.headerSection}>
          <h1 className={styles.mainTitle}>Contribuye a nuestro herbario</h1>
          <p className={styles.subTitle}>Envía tu mensaje; opinión, sugerencias, fotografías de campo o propuestas para incluir especies</p>
        </header>

        {/* FORMULARIO DE MENSAJES Y APORTES AL INTERNO */}
        <section className={styles.cardBlock}>
          <h2 className={styles.cardHeaderGreen}>
            <span>📬</span> Buzón de Sugerencias y Aportes Botánicos
          </h2>
          <p className={styles.sectionDesc}>
            ¿Tienes una nueva planta para registrar, una fotografía de campo o deseas complementar información taxonómica? Déjanos tu mensaje aquí.
          </p>

          {enviado ? (
            <div className={styles.successMessage}>
              <h3>¡Mensaje enviado con éxito! 🌿</h3>
              <p>Gracias por tu aporte al herbario. Los administradores revisarán la información y la fotografía adjunta próximamente.</p>
              <button 
                onClick={() => { setEnviado(false); setMensaje(''); setSelectedFile(null); setNombre(''); setCorreo(''); }} 
                className={styles.resetButton}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.aporteForm}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="nombre">Nombre o Colaborador</label>
                  <input 
                    id="nombre" 
                    type="text" 
                    required 
                    placeholder="Escribe tu nombre o seudónimo" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                  />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="correo">Correo Electrónico de Contacto</label>
                  <input 
                    id="correo" 
                    type="email" 
                    required 
                    placeholder="correo@ejemplo.com" 
                    value={correo} 
                    onChange={(e) => setCorreo(e.target.value)} 
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="tipoAporte">Tipo de Solicitud / Aporte</label>
                  <select 
                    id="tipoAporte" 
                    value={tipoAporte} 
                    onChange={(e) => setTipoAporte(e.target.value)}
                  >
                    <option value="Sugerir nueva especie">🌿 Sugerir nueva especie</option>
                    <option value="Aportar fotografía de campo">📷 Aportar fotografía de campo</option>
                    <option value="Complementar información taxonómica">📚 Complementar información taxonómica</option>
                    <option value="Comentario general o sugerencia">💬 Comentario general o sugerencia</option>
                  </select>
                </div>
                <div className={styles.formField}>
                  <label htmlFor="archivoAdjunto">Adjuntar Fotografía o Archivo (Opcional)</label>
                  <input 
                    id="archivoAdjunto" 
                    type="file" 
                    accept="image/*,.pdf" 
                    onChange={handleFileChange} 
                    className={styles.fileInput}
                  />
                  {selectedFile && <span className={styles.fileName}>📎 {selectedFile.name}</span>}
                </div>
              </div>

              <div className={styles.formFieldFull}>
                <label htmlFor="mensaje">Descripción o Mensaje al Interno</label>
                <textarea 
                  id="mensaje" 
                  rows={4} 
                  required 
                  placeholder="Escribe los detalles de la planta, características macroscópicas o el motivo de tu mensaje..." 
                  value={mensaje} 
                  onChange={(e) => setMensaje(e.target.value)}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                📤 Enviar mensaje a los administradores
              </button>
            </form>
          )}
        </section>

      </div>
    </div>
  );
}