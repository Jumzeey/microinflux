// import { IconMessage, IconNotification } from "@/assets/icons";
import message from '@/assets/icons/Message.svg'
import notification from '@/assets/icons/Notification.svg'
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

const Navbar = () => {
    return (
        <>
            <div className="w-full flex justify-between items-center">
                <div>
                    <p className='font-sfpro'>Dashboard</p>
                </div>
                <div className="flex gap-6">
                    <Button className='bg-primary-blue'>
                        <Plus className="mr-2 h-4 w-4" /> Create a New Campaign
                    </Button>
                    <img src={message} alt="Message Icon" className='cursor-pointer animate-shake hover:animate-none'/>
                    <img src={notification} alt="Notification Icon" className='cursor-pointer animate-shake hover:animate-none' />
                </div>
            </div>
        </>
    );
};

export default Navbar;
