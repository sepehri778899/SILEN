import React from 'react';
import {
  ThermometerSun,
  Sparkles,
  Shirt,
  ShieldCheck,
  Smile,
  Car,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ThermometerSun,
      title: 'اتاق اختصاصی با دمای ۲۸ درجه',
      desc: 'برای عکاسی نوزاد، دمای محیط با سیستم کنترل هوشمند روی ۲۸ تا ۳۰ درجه تنظیم می‌شود تا نوزاد در عریان‌ترین ژست‌ها هم کاملاً آرام و گرم بماند.',
      badge: 'استاندارد جهانی نیوبورن',
    },
    {
      icon: ShieldCheck,
      title: 'استریل و ضدعفونی صددرصدی',
      desc: 'تمامی قنداق‌ها، پتوها، عروسک‌ها، هدبندها و صندلی‌های چوبی قبل از ورود هر خانواده با مواد شوینده هیپوآلرژنیک شسته و ضدعفونی می‌شوند.',
      badge: 'تضمین بهداشت کودک',
    },
    {
      icon: Shirt,
      title: 'کمد لباس رایگان بارداری و کودک',
      desc: 'بیش از ۵۰ دست لباس بارداری حریر و بادی‌های لوکس، به همراه انواع لباس‌های فانتزی و بافتنی نوزاد تا ۳ سال بدون هیچ هزینه جداگانه در اختیارتان است.',
      badge: 'صرفه‌جویی در هزینه خرید',
    },
    {
      icon: Smile,
      title: 'کادر مجرب و صبور خانم',
      desc: 'عکاسان و کمک‌عکاسان ما با سال‌ها تخصص در زمینه روانشناسی و ارتباط با کودک، با حوصله و بازی کودک را همراهی می‌کنند تا طبیعی‌ترین لبخند ثبت شود.',
      badge: 'تیم حرفه‌ای بانوان',
    },
    {
      icon: HeartHandshake,
      title: 'تعهد کامل به حریم خصوصی',
      desc: 'هیچ تصویری بدون اجازه کتبی والدین در فضای مجازی منتشر نمی‌شود. برای دیدن کامل نمونه‌کارها آرشیو حضوری در جلسه مشاوره آتلیه موجود است.',
      badge: 'امنیت و آرامش خاطر',
    },
    {
      icon: Car,
      title: 'دسترسی آسان و پارکینگ مجتمع زیتون',
      desc: 'واقع در اتوبان شهید رئیسی با پارکینگ اختصاصی مجتمع تجاری زیتون و آسانسور مستقیم، تا همراهی کالسکه و نوزاد بدون دغدغه ترافیک باشد.',
      badge: 'رفاه کامل والدین',
    },
  ];

  return (
    <section className="py-16 bg-[#F2F7F4] border-b border-[#DFE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-[#3E604F] bg-[#9DB9A7]/25 px-3.5 py-1 rounded-full">
            چرا والدین استودیو سیلن کیدز را انتخاب می‌کنند؟
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#2D3A33]">
            استانداردهای طلایی آتلیه تخصصی کودک، نوزاد و بارداری
          </h2>
          <p className="text-[#52635A] text-sm leading-relaxed">
            ما در آتلیه سیلن می‌دانیم که سلامت نوزاد و راحتی والدین بیش از هر چیزی اهمیت دارد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold bg-[#F8FAF9] text-[#3E604F] px-2.5 py-1 rounded-full border border-[#DFE8E2]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#2D3A33]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-medium text-[#3E604F]">
                  <CheckCircle2 className="w-4 h-4 text-[#9DB9A7]" />
                  <span>آماده پذیرایی از فرشته‌های کوچک شما</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
