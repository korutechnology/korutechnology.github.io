import { useState } from "react";
import { Briefcase, ChevronRight, MapPin } from "lucide-react";
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
    location: {
        address: string;
        name: string;
        map: string;
    };
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
                <Briefcase className="h-6 w-6 text-primary text-center w-full" />
                <div className="space-y-1">
                    <h3 className="text-xl font-bold">{career.jobTitle}</h3>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>{career.location.name}</span>
                    </div>
                </div>
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
                                <h4 className="font-semibold mb-2">Location</h4>
                                <div className="flex items-start gap-2">
                                    <MapPin className="h-3 w-3 text-primary flex-shrink-0 mt-1 items-center" />
                                    <div className="flex flex-col gap-2">
                                        <p>{career.location.name}</p>
                                        <p>{career.location.address}</p>
                                        {career.location.map && (
                                            <a
                                                href={career.location.map}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-primary hover:underline text-sm"
                                            >
                                                View on Google Maps
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
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
                        <a
                            href={!isApply ? "#" : `https://wa.me/6281936124241?text=${encodeURIComponent(`Hi, saya tertarik untuk posisi "${career.jobTitle}" di ${career.location.name}`)}`}
                            target={isApply ? "_blank" : undefined}
                            rel={isApply ? "noopener noreferrer" : undefined}
                            className={`w-full text-center ${
                                isApply
                                    ? "bg-[#25D366] hover:bg-[#25D366]/90"
                                    : "bg-primary hover:bg-primary/90"
                            } text-white items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 outline-none focus:outline-none inline-flex gap-2`}
                            onClick={(e) => {
                                if (!isApply) {
                                    e.preventDefault();
                                    setIsApply(true);
                                }
                            }}
                        >
                            {!isApply ? (
                                "Apply Now"
                            ) : (
                                <>
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Contact us on WhatsApp
                                </>
                            )}
                        </a>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CareerCard;
