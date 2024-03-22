import { twMerge } from "tailwind-merge";
import Link from 'next/link'
import PropTypes from 'prop-types'
export default function Button({
  text,
  href,
  type = 'button',
  target = '_self',
  icon,
  iconPosition = 'right',
  className,
  bgClassName = twMerge(`bg-primary-500 hover:bg-primary-400`),
  textClassName = twMerge(`text-white`),
  buttonSize,
  ...props
}) {

  const smallButtonClasses = twMerge(`${bgClassName} ${textClassName} transition-all duration-500  ease-in-out rounded-md px-3 py-2 text-sm font-medium tracking-heading flex justify-center items-center ${className || ''}`)
  const classNames = twMerge(`${bgClassName} ${textClassName} transition-all duration-500 ease-in-out rounded-md px-4 py-3 text-md font-semibold tracking-heading flex justify-center items-center ${className || ''}`)

  if (!href) {
    return (
      <button {...props} type={type} className={buttonSize === 'small' ? smallButtonClasses : classNames} data-testid="Button-main" >
        {
          icon && iconPosition === 'left' && (
            <span className="inline-block mr-2" data-testid="Button-icon-left">{icon}</span>
          )
        }
        <span className="inline-block">{text}</span>
        {
          icon && iconPosition === 'right' && (
            <span className="inline-block ml-2" data-testid="Button-icon-right">{icon}</span>
          )
        }
      </button>
    )
  }

  return (
    <Link href={href} passHref>
      <a {...props} target={target} rel="noopener noreferrer" className={buttonSize === 'small' ? smallButtonClasses : classNames} data-testid="Button-link">
        {
          icon && iconPosition === 'left' && (
            <span className="inline-block mr-2">{icon}</span>
          )
        }
        <span className="inline-block">{text}</span>
        {
          icon && iconPosition === 'right' && (
            <span className="inline-block ml-2">{icon}</span>
          )
        }
      </a>
    </Link>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  type: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  bgClassName: PropTypes.string,
  textClassName: PropTypes.string,
  buttonSize: PropTypes.oneOf(['small', 'large']),
}

Button.defaultProps = {
  type: 'button',
  target: '_self',
  iconPosition: 'right',
  buttonSize: 'large',
}


