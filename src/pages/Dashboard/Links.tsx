import React, { useState } from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import { useGetUrls } from '@/store/api/url';
import { Copy, Ellipsis, Eye, Link2, MessageCircle, MoreHorizontal, Share, User } from 'lucide-react';
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ShareModal } from '@/components/modals/share';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { FaTrash } from 'react-icons/fa';
import { Link as RouteLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

function Links() {

    const { data: data } = useGetUrls();
  const [copied, setCopied] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState({
    open: false,
    url: '',
  })

  const copyToClipboard = (url, id) => {
    navigator.clipboard.writeText(url);
     setCopied(id);
    setTimeout(() => setCopied(false), 1200);
  };
    console.log('data', data)

  return (
    <div>
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <h1 className="text-2xl font-bold font-heading">Created Links</h1>
          <RouteLink to="/" className={cn(
                    buttonVariants({ variant: "default" }),
                  )}>
Create new link
          </RouteLink>
          {/* <Button className="bg-primary text-white px-4 w-full md:w-auto">Create new link</Button> */}
        </div>

        <div>
          <div className="mt-12 grid  rounded-xl gap-4">
             {data?.data?.length == 0 && (
          <Card className="text-center py-12 shadow border border-dashed border-muted">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">No links created yet</h3>
              <p className="text-muted-foreground mb-4">Get started by creating your first shortened link.</p>
              <RouteLink to="/" className={cn(
                    buttonVariants({ variant: "default" }),
                  )}>
            Create new link
          </RouteLink>
            </CardContent>
          </Card>
        )}
          {data?.data?.map(({ alias, shortId, originalUrl, created_at, expiration, passwordHash, clicks, id }) => (
            <div key={id} className="border p-6 rounded-xl bg-white">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
              <div className="flex items-center gap-3 w-full">
                <div className='flex flex-col gap-y-1.5 min-w-0'>
                  <p className="font-semibold underline">{alias || shortId}</p>
                  <a href={`${import.meta.env.VITE_REDIRECT_URL}/${alias || shortId}`} className="text-sm text-blue-600">{`${import.meta.env.VITE_REDIRECT_URL}/${alias || shortId}`}</a>
                  <a href={originalUrl} className="text-sm text-muted-foreground truncate">
                    {originalUrl}
                  </a>
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                <Button variant="ghost" onClick={() => copyToClipboard(`${import.meta.env.VITE_REDIRECT_URL}/${alias || shortId}`, id)} ><Copy className='size-4'/> {copied == id ? 'Copied' : 'Copy'}</Button>
                <Button variant="outline" onClick={() => setShareModalOpen({open: true, url: `${import.meta.env.VITE_REDIRECT_URL}/${alias || shortId}`})}><Share className='size-4'/> Share</Button>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Ellipsis />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-2">
                      <DropdownMenuItem>
                        <FaTrash className="mr-1" /> Delete
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link2 className="mr-1" /> View Details
                      </DropdownMenuItem>
                    </DropdownMenuContent>
    </DropdownMenu>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="link" size="sm">Stats</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{clicks} clicks</p>
                </TooltipContent>
              </Tooltip>
                <span>Created at: {dayjs(created_at).format('MMM D, YYYY')}</span>
               {expiration && <span>Expires at: {dayjs(expiration).format('MMM D, YYYY')}</span>}
              </div>
            </div>
            </div>
          ))}
        </div>
        </div>

{shareModalOpen?.open &&  <ShareModal open={shareModalOpen?.open} onClose={setShareModalOpen} url={shareModalOpen?.url}/>}
    </div>
  )
}

export default Links