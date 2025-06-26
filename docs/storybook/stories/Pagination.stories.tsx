import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination, Button } from '@repo/design-system';

const meta = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current active page',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages',
    },
    onPageChange: {
      action: 'pageChanged',
      description: 'Callback when page changes',
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first/last page buttons',
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 3 },
      description: 'Number of sibling pages to show',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaginationDefault: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const PaginationWithFirstLast: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: true,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const PaginationManyPages: Story = {
  args: {
    currentPage: 10,
    totalPages: 50,
    showFirstLast: true,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const PaginationFewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const PaginationSinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const PaginationDifferentSiblings: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium mb-3">No siblings (siblingCount: 0)</p>
        <Pagination
          currentPage={5}
          totalPages={10}
          siblingCount={0}
          onPageChange={(page) => console.log('Page:', page)}
        />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-3">1 sibling (default)</p>
        <Pagination
          currentPage={5}
          totalPages={10}
          siblingCount={1}
          onPageChange={(page) => console.log('Page:', page)}
        />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-3">2 siblings</p>
        <Pagination
          currentPage={5}
          totalPages={10}
          siblingCount={2}
          onPageChange={(page) => console.log('Page:', page)}
        />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-3">3 siblings</p>
        <Pagination
          currentPage={5}
          totalPages={10}
          siblingCount={3}
          onPageChange={(page) => console.log('Page:', page)}
        />
      </div>
    </div>
  ),
};

export const PaginationInteractive: Story = {
  render: () => {
    const InteractivePagination = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const totalPages = 20;
      
      return (
        <div className="space-y-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showFirstLast
          />
          
          <p className="text-center text-sm text-black/60">
            Page {currentPage} of {totalPages}
          </p>
          
          <div className="flex justify-center gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setCurrentPage(1)}
            >
              Go to First
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setCurrentPage(Math.floor(totalPages / 2))}
            >
              Go to Middle
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setCurrentPage(totalPages)}
            >
              Go to Last
            </Button>
          </div>
        </div>
      );
    };

    return <InteractivePagination />;
  },
};

export const PaginationWithTableData: Story = {
  render: () => {
    const TableWithPagination = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 5;
      const totalItems = 23;
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      
      // Generate mock data
      const allData = Array.from({ length: totalItems }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Inactive',
        date: new Date(2024, 0, i + 1).toLocaleDateString(),
      }));
      
      // Get current page data
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentData = allData.slice(startIndex, endIndex);
      
      return (
        <div className="space-y-4">
          <div className="border border-black">
            <table className="w-full">
              <thead>
                <tr className="border-b border-black">
                  <th className="text-left p-4">ID</th>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item) => (
                  <tr key={item.id} className="border-b border-black/10">
                    <td className="p-4">{item.id}</td>
                    <td className="p-4">{item.name}</td>
                    <td className="p-4">{item.status}</td>
                    <td className="p-4">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-black/60">
              Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems} items
            </p>
            
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              showFirstLast
            />
          </div>
        </div>
      );
    };
    
    return <TableWithPagination />;
  },
};

export const PaginationSimpleControls: Story = {
  render: () => {
    const SimplePaginationExample = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const totalPages = 5;
      
      return (
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium mb-3">Standard Pagination</p>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
          
          <div>
            <p className="text-sm font-medium mb-3">Simple Previous/Next</p>
            <div className="flex items-center justify-between max-w-sm">
              <Button
                variant="secondary"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </Button>
              <span className="text-sm text-black/60">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="secondary"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </Button>
            </div>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-3">Minimal Controls</p>
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="w-8 h-8 p-0"
              >
                ‹
              </Button>
              <span className="px-4 text-sm">
                {currentPage} / {totalPages}
              </span>
              <Button
                variant="ghost"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="w-8 h-8 p-0"
              >
                ›
              </Button>
            </div>
          </div>
        </div>
      );
    };
    
    return <SimplePaginationExample />;
  },
};

export const PaginationLoadMore: Story = {
  render: () => {
    const LoadMoreExample = () => {
      const [loadedItems, setLoadedItems] = useState(10);
      const itemsPerPage = 10;
      const totalItems = 47;
      
      const loadMore = () => {
        setLoadedItems(Math.min(loadedItems + itemsPerPage, totalItems));
      };
      
      return (
        <div className="space-y-4">
          <div className="grid gap-2">
            {Array.from({ length: loadedItems }, (_, i) => (
              <div key={i} className="p-3 border border-black/10">
                Item {i + 1}
              </div>
            ))}
          </div>
          
          {loadedItems < totalItems ? (
            <div className="text-center space-y-4">
              <Button onClick={loadMore} variant="secondary">
                Load More ({loadedItems} of {totalItems})
              </Button>
              
              <div className="text-sm text-black/60">
                Or use pagination:
              </div>
              
              <Pagination
                currentPage={Math.ceil(loadedItems / itemsPerPage)}
                totalPages={Math.ceil(totalItems / itemsPerPage)}
                onPageChange={(page) => setLoadedItems(page * itemsPerPage)}
              />
            </div>
          ) : (
            <p className="text-center text-sm text-black/60">
              All {totalItems} items loaded
            </p>
          )}
        </div>
      );
    };
    
    return <LoadMoreExample />;
  },
};

export const PaginationMobileOptimized: Story = {
  render: () => {
    const MobilePaginationExample = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const totalPages = 10;
      
      return (
        <div className="space-y-6 max-w-sm mx-auto">
          <div>
            <p className="text-sm font-medium mb-3">Mobile Dots</p>
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="w-8 h-8 p-0"
              >
                ‹
              </Button>
              <div className="flex gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + 1;
                  if (totalPages <= 5) {
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          currentPage === page ? 'bg-black' : 'bg-black/20'
                        }`}
                        aria-label={`Go to page ${page}`}
                      />
                    );
                  }
                  
                  // For many pages, show dynamic range
                  let displayPage = page;
                  if (currentPage > 3 && currentPage < totalPages - 2) {
                    displayPage = currentPage - 2 + i;
                  } else if (currentPage >= totalPages - 2) {
                    displayPage = totalPages - 4 + i;
                  }
                  
                  return (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(displayPage)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        currentPage === displayPage ? 'bg-black' : 'bg-black/20'
                      }`}
                      aria-label={`Go to page ${displayPage}`}
                    />
                  );
                })}
              </div>
              <Button
                variant="ghost"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="w-8 h-8 p-0"
              >
                ›
              </Button>
            </div>
            <p className="text-center text-xs text-black/60 mt-2">
              Page {currentPage} of {totalPages}
            </p>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-3">Compact Pagination</p>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              siblingCount={0}
            />
          </div>
        </div>
      );
    };
    
    return <MobilePaginationExample />;
  },
};