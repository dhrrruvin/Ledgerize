import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type BackToTopProps = {
    variant: string;
};

const BackToTop = ({ variant }: BackToTopProps) => {
    return (
        <Link
            className={classNames('btn', 'btn-soft-' + variant, 'shadow-none', 'btn-icon', 'btn-back-to-top')}
            id="btn-back-to-top"
            to="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <FeatherIcon icon="arrow-up" className="icon-xxs" />
        </Link>
    );
};

BackToTop.defaultProps = {
    variant: 'primary',
};

export default BackToTop;
