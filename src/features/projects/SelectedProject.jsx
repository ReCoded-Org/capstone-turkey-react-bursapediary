/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  AiOutlineUser,
  AiOutlineCaretRight,
  AiOutlineRise,
  AiFillPushpin,
  AiFillHeart,
} from 'react-icons/ai';
import { fetchSelectedProjectDetails } from './selectedProjectSlice';
import image from '../../assets/images/featuredProjectImg.png';

export default function SelectedProject({ selectedProjectId }) {
  const selectedProjectDetails = useSelector(
    (state) => state.selectedProjectDetails.entities,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSelectedProjectDetails(selectedProjectId));
  }, [dispatch, selectedProjectId]);

  return (
    selectedProjectDetails && (
      <div className="grid grid-1 grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="p-5">
          <p className="text-2xl font-bold mb-2">
            {selectedProjectDetails?.title}
          </p>
          <img src={image} className="w-full h-15 mb-2" alt="img" />
          <div className="flex flex-row mt-2">
            <AiFillHeart className="w-4 h-4 mr-2 mt-1" />
            <h1 className="mb-2">
              Project Owner Name is organizing this fundraiser
            </h1>
          </div>

          <hr className="w-3/4 mb-2" />
          <h1 className="mb-4">
            Created at:{' '}
            {selectedProjectDetails?.createdAt
              ?.replace(/T/, ' ')
              .replace(/\..+/, '')
              .slice(0, 16)}
          </h1>
          <h1 className="mb-4">{selectedProjectDetails?.description}</h1>
          <hr className="w-3/4 mb-2" />
          <h1>
            This fundraiser is related to{' '}
            {selectedProjectDetails?.categories?.map((e) => {
              return <li key={e}>{e}</li>;
            })}
          </h1>
          <div className="flex flex-row mt-2">
            <AiFillHeart className="w-4 h-4 mr-2 mt-1" />
            <h1 className="mb-2">Organizer</h1>
          </div>
          <hr className="w-3/4 mb-2" />
          <div className="flex flex-row">
            <AiOutlineUser className="w-8 h-8 mr-3" />
            <div>
              <h1 className="mb-2">Project Owner Name</h1>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-primary hover:bg-white text-white hover:text-black border-2 border-primary hover:border-black font-medium text-xs leading-tight uppercase rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="bg-secondary w-full mt-6">
            <h1 className="text-2xl font-bold p-4">Comments</h1>
            {selectedProjectDetails?.reviews?.map((e) => {
              return (
                <div className="flex flex-row p-4">
                  <AiOutlineUser className="w-4 h-4 mr-2" />
                  <div>
                    <h1 className="font-semibold mb-3">{e._id} donated $100</h1>
                    <h1 className="mb-3">{e.content}</h1>
                    <h1>
                      {e?.createdAt
                        ?.replace(/T/, ' ')
                        .replace(/\..+/, '')
                        .slice(0, 16)}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-5">
          <h1 className="font-bold text-2xl">
            $68.448 USD raised of $123.457.000 goal
          </h1>
          <h1 className="text-gray mt-2">12 people donated to this project</h1>
          <div className="flex flex-row mt-2">
            <button
              type="button"
              className=" w-2/3 inline-block mr-5 px-6 py-6 bg-white hover:bg-primary text-black hover:text-white border-2 border-black hover:border-primary font-bold text-base leading-tight uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Share
            </button>
            <button
              type="button"
              className="w-2/3 inline-block ml-5 px-6 py-6 bg-primary hover:bg-white text-white hover:text-black hover:border-2 hover:border-black font-bold text-base leading-tight uppercase rounded focus:outline-none focus:ring-0  transition duration-150 ease-in-out"
            >
              Donate now
            </button>
          </div>
          <hr className="my-4" />
          <div className="flex flex-row mt-2">
            <AiOutlineUser className="w-8 h-8 mr-3 mt-3" />
            <div>
              <h1 className="mb-2">Marry Poppins</h1>
              <div className="flex flex-row">
                <h1 className="font-bold mr-2">$100</h1>
                <AiOutlineCaretRight className="w-5 h-5 mr-1" />
                <h1>Recent Donation</h1>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex flex-row mt-2">
            <AiOutlineUser className="w-8 h-8 mr-3 mt-3" />
            <div>
              <h1 className="mb-2">Marry Poppins</h1>
              <div className="flex flex-row">
                <h1 className="font-bold mr-2">$100</h1>
                <AiOutlineRise className="w-5 h-5 mr-1" />
                <h1>Top Donation</h1>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex flex-row mt-2">
            <AiOutlineUser className="w-8 h-8 mr-3 mt-3" />
            <div>
              <h1 className="mb-2">Marry Poppins</h1>
              <div className="flex flex-row">
                <h1 className="font-bold mr-2">$100</h1>
                <AiFillPushpin className="w-5 h-5 mr-1" />
                <h1>First Donation</h1>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex flex-row mt-2">
            <button
              type="button"
              className="w-2/3 inline-block mr-5 px-3 py-3 bg-primary hover:bg-white text-white hover:text-black font-bold hover:border-2 hover:border-black text-base leading-tight uppercase rounded focus:outline-none focus:ring-0  transition duration-150 ease-in-out"
            >
              See top donations
            </button>
            <button
              type="button"
              className=" w-2/3 inline-block ml-5 px-3 py-3 bg-white hover:bg-primary text-black hover:text-white hover:border-primary border-2 border-black font-bold text-base leading-tight uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              See all
            </button>
          </div>
        </div>
      </div>
    )
  );
}

SelectedProject.propTypes = {
  selectedProjectId: PropTypes.string.isRequired,
};
