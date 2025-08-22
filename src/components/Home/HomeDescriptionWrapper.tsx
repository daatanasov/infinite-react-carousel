import { carouselApproaches } from "../../utils/const";
import DescriptionFooter from "./DescriptionFooter";
import DescriptionHeader from "./DescriptionHeader";
import ImplementationApproaches from "./ImplementationApprouches";
import TaskDescription from "./TaskDescription";
import TechnicalStack from "./TechnicalStack";

export default function HomeDescriptionWrapper() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <DescriptionHeader />
      <TaskDescription />
      <ImplementationApproaches approaches={carouselApproaches} />
      <TechnicalStack />
      <DescriptionFooter />
    </div>
  );
}
