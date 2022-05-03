import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ProjectTypeButton from './ProjectTypeButton';

export default function ProjectsTypes({ setSelected }) {
  const [specific, setSpecific] = useState('');
  const { t } = useTranslation();

  useEffect(() => setSelected(specific), [specific, setSelected]);

  return (
    <div className="bg-primary px-5">
      <h1 className="flex justify-center text-white font-bold text-lg py-5 ">
        {t('projects.title')}
      </h1>
      <div className=" flex justify-around md: pb-5">
        <ProjectTypeButton
          setSpecific={setSpecific}
          title={['All', 'Cars', 'Education', 'Social', 'Tech', 'Stack']}
        />
      </div>
    </div>
  );
}

ProjectsTypes.propTypes = {
  setSelected: PropTypes.func.isRequired,
};
