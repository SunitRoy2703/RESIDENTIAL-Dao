
import { FC } from "react";
import CreateForm from "components/create-form";
import ListActive from "components/list-active";
import ListReleased from "components/list-released";

export const AppView: FC = ({ }) => {

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
          Residential Dao
        </h1>
        <CreateForm />
        <div className="mt-12">
          <ListActive />
          <div className="mt-10">
            <ListReleased />
          </div>
        </div>
      </div>
    </div>
  );
};
