export default function ServiceCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="flex flex-col items-center space-y-4 text-center">
            {icon}
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
    );
}
