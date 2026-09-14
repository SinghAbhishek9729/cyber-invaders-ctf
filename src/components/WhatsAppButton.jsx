import CONFIG from '../data/config'

export default function WhatsAppButton({
  className = '',
  variant = 'secondary',
}) {
  const url = CONFIG.WHATSAPP_GROUP_URL?.trim()
  const ready = Boolean(url)
  const label = CONFIG.whatsappLabel
  const classes = `btn btn--${variant}${className ? ` ${className}` : ''}`

  if (!ready) {
    return (
      <button
        type="button"
        className={`${classes} btn--disabled`}
        disabled
        title="The WhatsApp group link will be announced soon"
        aria-disabled="true"
      >
        {label}
      </button>
    )
  }

  return (
    <a
      href={url}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  )
}
