import { useState } from "react";
import { Briefcase, ChevronRight } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

interface Career {
    jobTitle: string;
    jobSummary: string;
    keyResponsibilities: string[];
    qualifications: string[];
    compensation: {
        baseSalary: string;
        performanceBonus: string;
    };
    additionalNote: string;
}

const CareerCard = ({ career }: { career: Career }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isApply, setIsApply] = useState(false);
    return (
        <>
            <div
                className="flex flex-col space-y-3 bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg"
                onClick={() => setIsModalOpen(true)}
            >
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">{career.jobTitle}</h3>
                <p className="text-gray-500 line-clamp-3">
                    {career.jobSummary}
                </p>
                <div className="text-primary hover:underline mt-auto inline-flex items-center group">
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] h-[90vh] flex flex-col">
                    <DialogHeader className="flex-shrink-0">
                        <DialogTitle>{career.jobTitle}</DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="flex-grow overflow-y-auto">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">
                                    Job Summary
                                </h4>
                                <p>{career.jobSummary}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">
                                    Key Responsibilities
                                </h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    {career.keyResponsibilities.map(
                                        (responsibility, index) => (
                                            <li key={index}>
                                                {responsibility}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">
                                    Qualifications
                                </h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    {career.qualifications.map(
                                        (qualification, index) => (
                                            <li key={index}>{qualification}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">
                                    Compensation
                                </h4>
                                <p>
                                    Base Salary:{" "}
                                    {career.compensation.baseSalary}
                                </p>
                                <p>
                                    Performance Bonus:{" "}
                                    {career.compensation.performanceBonus}
                                </p>
                            </div>
                            {career.additionalNote && (
                                <div>
                                    <h4 className="font-semibold mb-2">
                                        Additional Note
                                    </h4>
                                    <p>{career.additionalNote}</p>
                                </div>
                            )}
                        </div>
                    </DialogDescription>
                    <div className="mt-6 flex-shrink-0">
                        <button
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 outline-none focus:outline-none"
                            onClick={() => setIsApply(true)}
                        >
                            {!isApply
                                ? "Apply Now"
                                : "Send your CV to people@koruindonesia.com"}
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CareerCard;
