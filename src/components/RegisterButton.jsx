import CONFIG from '../data/config'

export default function RegisterButton({
  className = '',
  children,
  variant = 'primary',
}) {
  const url = CONFIG.UNSTOP_REGISTRATION_URL?.trim()
  const ready = Boolean(url)
  const label = children || (ready ? CONFIG.registerLabel : CONFIG.registerPendingLabel)
  const classes = `btn btn--${variant}${className ? ` ${className}` : ''}`

  if (!ready) {
    return (
      <button
        type="button"
        className={`${classes} btn--disabled`}
        disabled
        title="The Unstop registration link will be announced soon"
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
