interface ListingCardProps {
  id: string;
  title: string;
  category: string;
  price: number;
  imageUrl: string;
  sellerName: string;
  location: string;
}

export default function ListingCard({ title, category, price, imageUrl, sellerName, location }: ListingCardProps) {
  // Local asset fallback paths (add these images to public/images/)
  const fallbackPaths = [
    imageUrl,
    "/images/fallback1.jpg",
    "/images/fallback2.jpg",    
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, index: number) => {
    if (index < fallbackPaths.length - 1) {
      e.currentTarget.src = fallbackPaths[index + 1];
    } else {
      // Final fallback: show "Image uploading soon" placeholder
      e.currentTarget.style.display = 'none';
      const parent = e.currentTarget.parentElement;
      if (parent) {
        parent.innerHTML = `
          <div class="h-full w-full flex flex-col items-center justify-center ${
            category === 'pet' ? 'bg-purple-50' : 'bg-blue-50'
          }">
            <div class="text-5xl mb-2">${category === 'pet' ? '🐾' : '📦'}</div>
            <p class="text-sm font-medium ${
              category === 'pet' ? 'text-purple-700' : 'text-blue-700'
            }">Image uploading soon</p>
          </div>
        `;
      }
    }
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img 
          src={fallbackPaths[0]} 
          alt={title} 
          className="w-full h-full object-cover"
          style={{ display: 'block' }}
          loading="lazy"
          onError={(e) => handleImageError(e, 0)}
        />
        <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-bold uppercase tracking-wide rounded-md shadow-sm ${
          category === "pet" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700"
        }`}>
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 mb-1">{title}</h3>
        <p className="text-xl font-bold text-blue-600 mb-3">Rs. {price.toLocaleString()}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-700 border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span className="truncate max-w-[100px]">{sellerName}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}