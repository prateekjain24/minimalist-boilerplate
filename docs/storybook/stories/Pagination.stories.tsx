import type { Meta, StoryObj } from '@storybook/react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious,
  PaginationEllipsis,
  Button
} from '@repo/design-system';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useState } from 'react';

const meta = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'minimal'],
      description: 'Visual style of pagination',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of pagination controls',
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first/last page buttons',
    },
    showPageNumbers: {
      control: 'boolean',
      description: 'Show page number buttons',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium mb-3">Default Variant</p>
        <Pagination variant="default">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-3">Outline Variant</p>
        <Pagination variant="outline">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-3">Minimal Variant</p>
        <Pagination variant="minimal">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium mb-3">Small</p>
        <Pagination size="sm">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-3">Medium (Default)</p>
        <Pagination size="md">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-3">Large</p>
        <Pagination size="lg">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  ),
};

export const WithFirstLast: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Go to first page">
            <ChevronsLeft className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">6</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">20</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Go to last page">
            <ChevronsRight className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const Interactive: Story = {
  render: () => {
    const InteractivePagination = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const totalPages = 10;
      
      const getPageNumbers = () => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];
        let l;

        for (let i = 1; i <= totalPages; i++) {
          if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
            range.push(i);
          }
        }

        range.forEach((i) => {
          if (l) {
            if (i - l === 2) {
              rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
              rangeWithDots.push('...');
            }
          }
          rangeWithDots.push(i);
          l = i;
        });

        return rangeWithDots;
      };

      return (
        <div className="space-y-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
              </PaginationItem>
              
              {getPageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  {page === '...' ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href="#"
                      isActive={currentPage === page}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(page as number);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          
          <p className="text-center text-sm text-black/60">
            Page {currentPage} of {totalPages}
          </p>
        </div>
      );
    };

    return <InteractivePagination />;
  },
};

export const SimplePagination: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" disabled>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <span className="text-sm text-black/60">Page 1 of 5</span>
        <Button variant="ghost" size="sm">
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
      
      <div className="flex items-center justify-center gap-2">
        <Button variant="ghost" size="sm">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="px-4 text-sm">1 / 5</span>
        <Button variant="ghost" size="sm">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  ),
};

export const WithPageInfo: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-black/60">
          Showing 10 of 248 results
        </p>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">25</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  ),
};

export const TablePagination: Story = {
  render: () => (
    <div className="border border-black">
      <table className="w-full">
        <thead>
          <tr className="border-b border-black">
            <th className="text-left p-4">ID</th>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, i) => (
            <tr key={i} className="border-b border-black/10">
              <td className="p-4">{i + 1}</td>
              <td className="p-4">User {i + 1}</td>
              <td className="p-4">user{i + 1}@example.com</td>
              <td className="p-4">Active</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex items-center justify-between p-4 border-t border-black">
        <div className="flex items-center gap-4">
          <p className="text-sm text-black/60">Rows per page:</p>
          <select className="px-2 py-1 border border-black text-sm">
            <option>5</option>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        
        <p className="text-sm text-black/60">
          1-5 of 15 items
        </p>
      </div>
    </div>
  ),
};

export const LoadMore: Story = {
  render: () => {
    const LoadMoreExample = () => {
      const [items, setItems] = useState(10);
      const totalItems = 50;
      
      const loadMore = () => {
        setItems(Math.min(items + 10, totalItems));
      };
      
      return (
        <div className="space-y-4">
          <div className="grid gap-2">
            {[...Array(items)].map((_, i) => (
              <div key={i} className="p-3 border border-black/10">
                Item {i + 1}
              </div>
            ))}
          </div>
          
          {items < totalItems && (
            <div className="text-center">
              <Button onClick={loadMore} variant="secondary">
                Load More ({items} of {totalItems})
              </Button>
            </div>
          )}
          
          {items >= totalItems && (
            <p className="text-center text-sm text-black/60">
              All items loaded
            </p>
          )}
        </div>
      );
    };
    
    return <LoadMoreExample />;
  },
};

export const MobilePagination: Story = {
  render: () => (
    <div className="space-y-6 max-w-sm mx-auto">
      <div>
        <p className="text-sm font-medium mb-3">Mobile Optimized</p>
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-1">
            {[1, 2, 3].map((page) => (
              <Button
                key={page}
                variant={page === 2 ? "default" : "ghost"}
                size="sm"
                className="w-8 h-8 p-0"
              >
                {page}
              </Button>
            ))}
          </div>
          <Button variant="ghost" size="sm">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-3">Swipe Indicator</p>
        <div className="flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === 2 ? 'bg-black' : 'bg-black/20'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-xs text-black/60 mt-2">Swipe to navigate</p>
      </div>
    </div>
  ),
};