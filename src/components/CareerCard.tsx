import { Briefcase, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CareerCard = ({ career }: { career: any }) => {
    console.log(career);
    return (
        <div className="flex flex-col space-y-3 bg-white p-6 rounded-lg shadow-md">
            <Briefcase className="h-6 w-6" />
            <h3 className="text-xl font-bold">{career?.jobTitle}</h3>
            <p className="text-gray-500">
                Lead complex tech projects and provide expert advice to our
                clients.
            </p>
            <Link
                to="#"
                className="hover:underline mt-auto inline-flex items-center group"
            >
                Apply Now
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
    );
};

export default CareerCard;
