import ProjectTypeButton from './ProjectTypeButton';

export default function ProjectsTypes() {
  return (
    <div className="bg-primary px-5">
      <h1 className="flex justify-center text-white font-bold text-lg py-5 ">
        Find a charity to support
      </h1>
      <div className=" flex justify-around md: pb-5">
        <ProjectTypeButton
          title={[
            'All',
            'Animal',
            'Environment',
            'Education',
            'Tech',
            'Health',
          ]}
        />
      </div>
    </div>
  );
}
