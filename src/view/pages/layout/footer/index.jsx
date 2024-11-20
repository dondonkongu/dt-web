import React from 'react';
import { dataFooter } from '../../../../constants/footerLink';

export default function Footer() {
    const contactData = [
        { title: 'Liên hệ đặt hàng', content: '0345 932 314', link: 'tel:+84345932314' },
        { title: 'Góp ý khiếu nại', content: '1900 6035', link: 'tel:+8419006035' },
        { title: 'Email', content: 'obitanz123@gmail.com', link: 'mailto:obitanz123@gmail.com' },
    ];

    return (
        <div className="container mx-auto py-10 px-4 md:px-8 bg-slate-600 grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataFooter.map((item, index) => (
                <div key={index} className="px-4">
                    <span className="text-white font-semibold text-lg">{item.title}</span>
                    <ul className="mt-4 space-y-3">
                        {item.content.map((subItem, subIndex) => (
                            <li key={subIndex}>
                                <a 
                                    className="text-[#bfcad9] text-sm hover:text-white transition-colors duration-200" 
                                    href={subItem.link}
                                >
                                    {subItem.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="px-4">
                <h3 className="text-white font-semibold text-lg mb-4">DT lắng nghe bạn</h3>
                <p className="text-white text-sm mb-6">
                    Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp
                    và trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.
                </p>
                <div className="space-y-4">
                    {contactData.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <span className="text-[#bfcad9] text-sm">{item.title}</span>
                            <a 
                                className="text-[#bfcad9] text-sm hover:text-white transition-colors duration-200" 
                                href={item.link}
                            >
                                {item.content}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                  <span className='text-white font-semibold text-lg mb-4'>Địa chỉ liên hệ</span>
                  <p className="text-[#bfcad9] text-sm">100 Nguyễn Thức Tự, Hòa Hải, Ngũ Hành Sơn, Đà Nẵng</p>
                  </div>
                
            </div>
        </div>
    );
}
