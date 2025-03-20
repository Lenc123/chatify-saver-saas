import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import AnimatedCard from '@/components/ui/AnimatedCard';

const Calculator = () => {
  const [employees, setEmployees] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Calculate the costs and savings
  const currentMonthlyCost = employees * hourlyRate * hoursPerWeek * 4;
  const aiMonthlyCost = currentMonthlyCost * 0.3; // 70% cost reduction
  const monthlySavings = currentMonthlyCost - aiMonthlyCost;
  const annualSavings = monthlySavings * 12;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 relative overflow-hidden bg-[#F9FAFF]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#008080]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#008080]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="turso-container">
        <AnimatedCard className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-block px-3 py-1 bg-[#008080]/10 text-[#008080] rounded-full mb-4 font-medium text-sm">
            ROI Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Calculate Your Support <span className="text-[#008080]">Cost Savings</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how much you could save by implementing our AI solution for your e-commerce store.
          </p>
        </AnimatedCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <AnimatedCard className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Adjust Your Parameters</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Number of Support Staff</label>
                  <span className="font-semibold text-[#008080]">{employees}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#008080] my-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1</span>
                  <span>50+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Hourly Rate ($)</label>
                  <span className="font-semibold text-[#008080]">${hourlyRate}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#008080] my-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>$10</span>
                  <span>$50</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Support Hours per Week</label>
                  <span className="font-semibold text-[#008080]">{hoursPerWeek} hrs</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#008080] my-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1 hr</span>
                  <span>100+ hrs</span>
                </div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Your Estimated Savings</h3>
            
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-300">
                <p className="text-gray-600 mb-1">Current Monthly Support Costs</p>
                <p className="text-3xl font-bold text-gray-800">${currentMonthlyCost.toLocaleString()}</p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <p className="text-gray-600 mb-1">Your Monthly Savings</p>
                <p className="text-3xl font-bold text-green-600">${monthlySavings.toLocaleString()}</p>
              </div>

              <div className="bg-[#008080]/5 rounded-lg p-6 border border-dashed border-[#008080]">
                <p className="text-gray-600 mb-1">Annual Savings with Unburdend</p>
                <p className="text-4xl font-bold text-[#008080]">${annualSavings.toLocaleString()}</p>
              </div>
            </div>

            <Button 
              variant="teal" 
              size="lg" 
              className="w-full mt-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              Start Saving Now
            </Button>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
