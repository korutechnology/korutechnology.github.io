import { useState } from "react";
import { Briefcase, ChevronRight, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
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
                <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px]">
                    <DialogHeader>
                        <DialogTitle>{career.jobTitle}</DialogTitle>
                        <button
                            className="absolute right-4 top-4"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <span className="sr-only">Close</span>
                        </button>
                    </DialogHeader>
                    <DialogDescription>
                        <div className="mt-4 space-y-4">
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
                    <div className="mt-6">
                        <button
                            className="w-full"
                            onClick={() => window.open("#", "_blank")}
                        >
                            Apply Now
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CareerCard;
