import { Tooltip } from '@mui/material';
import { useState } from 'react';

interface GifItemProps {
    title: string,
    url: string
}

export const GifItem = ({ title, url }: GifItemProps) => {

    const [copied, setCopied] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true)
            setShowTooltip(true)
            setTimeout(() => { setShowTooltip(false) }, 1200)
            setTimeout(() => { setCopied(false) }, 1200)
        } catch (error) {
            console.error('Error al copiar al portapeles', error)
        }
    }

    const handleMouseEnter = () => {
        if (!copied) {
            setShowTooltip(true)
            setTimeout(() => setShowTooltip(false), 1500)
        }
    }
    const handleMouseLeave = () => {
        if (!copied) {
            setShowTooltip(false)
        }
    }

    return (
        <Tooltip title={copied ? '¡Copiado!' : 'Copiar link'} open={showTooltip} arrow slotProps={{
            transition: { timeout: 0 }
        }}>
            <div className="card" onClick={handleCopy} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
        </Tooltip>
    )
}


