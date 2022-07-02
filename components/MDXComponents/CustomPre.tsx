export default function CustomPre({
    className,
    children,
}: {
    className: string;
    children: any;
}) {
    return (
        <div className='mockup-code'>
            <pre className={className}>{children}</pre>
        </div>
    );
}
