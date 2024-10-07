import IconOpen from '@/assets/icons/open.svg'

const ProfileOverview = () => {
    return (
        <>
            <div className="relative font-sfpro h-56 rounded-lg w-2/3 bg-[url('https://ik.imagekit.io/jumzeey/microflux/image%20110_cVt-TnK4i.svg?updatedAt=1728295404655')] bg-cover bg-center">
                {/* Overlay background color */}
                <div className="absolute inset-0 bg-primary-blue bg-opacity-80 rounded-lg"></div>

                {/* Content */}
                <div className="relative z-10 text-white py-4 px-6">
                    <div className="flex items-center justify-between w-full border-b border-white pb-2">
                        <div>
                            <p className=' text-xl font-medium'>Financial Overview</p>
                        </div>
                        <div className='flex gap-2 cursor-pointer'>
                            <p className='font-thin'>View all campaigns</p>
                            <img src={IconOpen} alt="" width={16} height={16} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default ProfileOverview;
