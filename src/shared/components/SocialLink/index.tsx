import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

interface SocialLinkProps {
  href: string;
  label: string;
  icon: string;
}

export const SocialLink = ({ href, label, icon }: SocialLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cx('link')}>
      <span className="sr-only">{label}</span>
      <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32">
        <path fill="currentColor" d={icon} />
      </svg>
    </a>
  );
};
