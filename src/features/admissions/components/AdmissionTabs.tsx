"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ClipboardList, CheckCircle, DollarSign, TrendingDown, Download } from "lucide-react"
import { AdmissionProcess } from "./AdmissionProcess"
import { Eligibility } from "./Eligibility"
import { FeeStructure } from "./FeeStructure"
import { CutoffList } from "./CutoffList"
import { BrochureDownload } from "./BrochureDownload"

export function AdmissionTabs() {
  return (
    <Tabs defaultValue="process" className="w-full">
      <TabsList className="mb-8 w-full flex-wrap">
        <TabsTrigger value="process">
          <ClipboardList className="mr-1.5 h-4 w-4" />
          Admission Process
        </TabsTrigger>
        <TabsTrigger value="eligibility">
          <CheckCircle className="mr-1.5 h-4 w-4" />
          Eligibility
        </TabsTrigger>
        <TabsTrigger value="fees">
          <DollarSign className="mr-1.5 h-4 w-4" />
          Fee Structure
        </TabsTrigger>
        <TabsTrigger value="cutoff">
          <TrendingDown className="mr-1.5 h-4 w-4" />
          Cutoff List
        </TabsTrigger>
        <TabsTrigger value="brochure">
          <Download className="mr-1.5 h-4 w-4" />
          Brochure
        </TabsTrigger>
      </TabsList>

      <TabsContent value="process">
        <AdmissionProcess />
      </TabsContent>
      <TabsContent value="eligibility">
        <Eligibility />
      </TabsContent>
      <TabsContent value="fees">
        <FeeStructure />
      </TabsContent>
      <TabsContent value="cutoff">
        <CutoffList />
      </TabsContent>
      <TabsContent value="brochure">
        <BrochureDownload />
      </TabsContent>
    </Tabs>
  )
}
