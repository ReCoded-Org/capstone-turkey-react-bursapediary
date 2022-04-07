import PropTypes from 'prop-types';

function FeaturedProjects({ children }) {
  return (
    <div className="flex flex-col w-full bg-bgmain p-10 text-white items-center justify-between">
      <h1 className="text-4xl text-primary">Featured Projects</h1>
      <div className="flex flex-wrap gap-10 justify-center items-center p-10 ">
        {children}
      </div>
    </div>
  );
}
FeaturedProjects.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FeaturedProjects;
