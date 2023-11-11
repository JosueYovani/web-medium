import React, { useContext } from "react";
import { HistoryContext } from "../../../layouts/HistoryLayout/HistoryLayout";

import { topics } from "../../../mocks/data-topics";
import { CreateNewForm } from "../CreateNewForm/CreateNewForm";

export const CreateNewHistory = () => {
  const { newFeed, handleChange } = useContext(HistoryContext);

  return (
    <section className="create-new-history">
      <CreateNewForm
        newFeed={newFeed}
        topics={topics}
        handleChange={handleChange}
      />
    </section>
  );
};
