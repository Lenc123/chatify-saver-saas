
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import AnimatedCard from '@/components/ui/AnimatedCard';

const Calculator = () => {
  const [employees, setEmployees] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [isVisible, setIsVisible] = useState(false);

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
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('calculator-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="calculator-section" className="turso-section bg-white">
      <div className="turso-container">
        <AnimatedCard className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full mb-4 font-medium text-sm">
            ROI Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your Support Cost Savings</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how much you could save by implementing our AI solution for your e-commerce store.
          </p>
        </AnimatedCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedCard className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-8">Adjust Your Parameters</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Number of Support Staff</label>
                  <span className="font-semibold text-brand-secondary">{employees}</span>
                </div>
                <Slider 
                  value={[employees]} 
                  min={1} 
                  max={50} 
                  step={1} 
                  onValueChange={(value) => setEmployees(value[0])}
                  className="my-6"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1</span>
                  <span>50+</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Hourly Rate ($)</label>
                  <span className="font-semibold text-brand-secondary">${hourlyRate}</span>
                </div>
                <Slider 
                  value={[hourlyRate]} 
                  min={10} 
                  max={50} 
                  step={1} 
                  onValueChange={(value) => setHourlyRate(value[0])}
                  className="my-6"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>$10</span>
                  <span>$50</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Support Hours per Week</label>
                  <span className="font-semibold text-brand-secondary">{hoursPerWeek} hrs</span>
                </div>
                <Slider 
                  value={[hoursPerWeek]} 
                  min={1} 
                  max={100} 
                  step={1} 
                  onValueChange={(value) => setHoursPerWeek(value[0])}
                  className="my-6"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1 hr</span>
                  <span>100+ hrs</span>
                </div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200} className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex flex-col">
            <h3 className="text-xl font-semibold mb-8">Your Estimated Savings</h3>
            
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-300">
                <p className="text-gray-600 mb-1">Current Monthly Support Costs</p>
                <p className="text-3xl font-bold text-gray-800">${currentMonthlyCost.toLocaleString()}</p>
              </div>
              
              <div className="bg-brand-secondary/5 rounded-lg p-6 border-l-4 border-brand-secondary">
                <p className="text-gray-600 mb-1">AI Solution Monthly Costs</p>
                <p className="text-3xl font-bold text-brand-secondary">${aiMonthlyCost.toLocaleString()}</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <p className="text-gray-600 mb-1">Your Monthly Savings</p>
                <p className="text-3xl font-bold text-green-600">${monthlySavings.toLocaleString()}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-dashed border-green-500">
                <p className="text-gray-600 mb-1">Annual Savings with AI</p>
                <p className="text-4xl font-bold text-green-600">${annualSavings.toLocaleString()}</p>
              </div>
            </div>
            
            <Button 
              variant="amber" 
              size="xl" 
              className="w-full mt-8"
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
