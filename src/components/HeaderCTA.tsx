import Link from "next/link";
import { Button } from "../ui-kit/button";

export default function HeaderCTA() {
  return (
    <div className='hidden lg:flex items-center'>
      <Link href='/contact'>
        <Button className='bg-gradient-to-r from-brand-amber to-brand-brown hover:from-brand-brown hover:to-brand-amber text-white font-bold py-2 px-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
          <span className='flex items-center'>
            <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
            </svg>
            Get Quote
          </span>
        </Button>
      </Link>
    </div>
  );
}
