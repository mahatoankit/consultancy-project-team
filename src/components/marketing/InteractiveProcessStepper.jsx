'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import {
  UserCheck, Building2, FileText, CreditCard, Plane, Check
} from 'lucide-react'
import { PROCESS_STEPS } from '@/constants/mockData'

const ICON_MAP = {
  UserCheck,
  Building2,
  FileText,
  CreditCard,
  Plane,
  Check,
}

export default function InteractiveProcessStepper() {
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState(new Set())

  const handleStepClick = (index) => {
    if (index > activeStep) {
      const newCompleted = new Set(completedSteps)
      for (let i = 0; i < index; i++) {
        newCompleted.add(i)
      }
      setCompletedSteps(newCompleted)
    }
    setActiveStep(index)
  }

  const progress = Math.round((completedSteps.size / PROCESS_STEPS.length) * 100)

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="sticky top-[120px]">
            <p className="text-sm font-semibold tracking-[0.1em] uppercase text-amber-500 mb-3">
              Our Process
            </p>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-neutral-900 leading-[1.15] mb-6">
              Five steps to
              <br />
              your dream.
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed mb-8 max-w-sm">
              From profile assessment to pre-departure briefing, we guide you at every stage of your journey abroad.
            </p>

            {/* Progress Card */}
            <div className="bg-neutral-100 rounded-[16px] p-5 mb-6">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-medium text-neutral-700">Journey progress</p>
                <p className="text-sm font-bold text-[#1e3a8a]">{progress}%</p>
              </div>
              <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#1e3a8a] to-amber-500 transition-[width] duration-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-neutral-400 mt-2">Click each stage to explore</p>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-[#1e3a8a] text-white font-semibold rounded-[10px] px-7 py-3.5 hover:bg-[#0f1f4d] transition-colors">
              Start your journey now
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-0">
            {PROCESS_STEPS.map((step, index) => {
              const isActive = activeStep === index
              const isCompleted = completedSteps.has(index)
              const isFuture = index > activeStep

              const IconComponent = ICON_MAP[step.icon]

              return (
                <div key={step.id} className={cn('flex gap-5', index < PROCESS_STEPS.length - 1 && 'pb-6')}>
                  {/* Icon Column */}
                  <div className="w-11 flex-col items-center flex">
                    <button
                      onClick={() => handleStepClick(index)}
                      className={cn(
                        'w-11 h-11 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all',
                        isCompleted
                          ? 'border-amber-500 bg-amber-500 text-white'
                          : isActive
                          ? 'border-[#1e3a8a] bg-[#1e3a8a] text-white'
                          : 'border-neutral-300 bg-white text-neutral-400'
                      )}
                    >
                      {isCompleted ? (
                        <Check size={18} strokeWidth={2.5} />
                      ) : IconComponent ? (
                        <IconComponent size={18} />
                      ) : null}
                    </button>

                    {/* Connector Line */}
                    {index < PROCESS_STEPS.length - 1 && (
                      <div
                        className={cn(
                          'flex-1 w-0.5 min-h-[32px] my-1 transition-colors duration-300',
                          isCompleted ? 'bg-amber-500' : 'bg-neutral-200'
                        )}
                      />
                    )}
                  </div>

                  {/* Content Column */}
                  <div className={cn('flex-1', index < PROCESS_STEPS.length - 1 && 'pb-6')}>
                    {/* Header */}
                    <div
                      onClick={() => handleStepClick(index)}
                      className="flex items-center gap-3 cursor-pointer mb-0"
                    >
                      <div className="flex-1">
                        <h3
                          className={cn(
                            'transition-all',
                            isActive || isCompleted
                              ? 'text-lg font-bold text-neutral-900'
                              : 'text-neutral-400 font-semibold'
                          )}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <span className="text-[11px] bg-neutral-100 text-neutral-400 font-semibold px-2 py-0.5 rounded whitespace-nowrap">
                        {step.duration}
                      </span>
                    </div>

                    {/* Expandable Content */}
                    <div
                      className={cn(
                        'overflow-hidden transition-[max-height] duration-300 ease-out',
                        isActive ? 'max-h-[500px]' : 'max-h-0'
                      )}
                    >
                      <div className="bg-blue-50 border border-blue-100 rounded-[10px] p-5 mt-3">
                        <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                          {step.description}
                        </p>

                        <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                          Documents at this stage
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {step.docs.map((doc) => (
                            <span
                              key={doc}
                              className="text-[12px] font-medium bg-blue-100 text-[#1e3a8a] px-2.5 py-1 rounded"
                            >
                              {doc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
